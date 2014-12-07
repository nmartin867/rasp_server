angular.module('raspi-server').factory('camera', ['$http', '$q', 'Config', function ($http, $q, config) {
    return {
        requestPhoto: function () {
            var deferred = $q.defer();
            $http.post(config.client + '/image/600/480', {}).then(function (response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
    };
}]);