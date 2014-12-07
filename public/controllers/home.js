angular.module('raspi-server').controller('home', ['$scope', 'camera', 'Config', function ($scope, camera, config) {
    $scope.takeImage = function () {
        $scope.snapShot = null;
        camera.requestPhoto().then(function () {
            $scope.snapShot = config.client + '/image';
        });
    };

}]);