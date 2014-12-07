angular.module('raspi-server').factory('camera', ['$http', '$q', function ($http, $q) {
    return {
        requestPhoto: function () {
            var deferred = $q.defer();
            $http.post('/photo/snap', {}).then(function (response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
    };
}]);