angular.module('raspi-server').factory('socket', ['socketFactory', function (socketFactory) {
    return socketFactory();
}]);