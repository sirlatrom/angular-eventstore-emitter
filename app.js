var app = angular.module('policyEvents', ['uuid']);

app.controller('PolicyCreatedController', ['$scope', '$http', 'rfc4122', function($scope, $http, rfc4122) {
  $scope.event = {
    'eventId': rfc4122.v4(),
    'eventType': 'PolicyCreated',
    'data': {}
  };
  
  $scope.pushEvent = function() {
    var req = {
      method: 'POST',
      url: 'http://127.0.0.1:2114/streams/policy',
      headers: {
        'Content-Type': 'application/vnd.eventstore.events+json'
      },
      data: [$scope.event]
    }

    $http(req).then(function(response) {
      alert('success! ' + response);
    });
  };
}]);
