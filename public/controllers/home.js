angular.module('raspi-server').controller('home', ['$scope', 'socket', 'camera', function ($scope, socket, camera) {
    $scope.logItems = [];
    socket.on('client-log', function (logData) {
        $scope.logItems.push(logData);
    });
    socket.on('image-still', function (imageData) {
        $scope.snapShot = imageData.data;
    });
    $scope.requestPhoto = function () {
        if ($scope.snapShot) {
            $scope.snapShot = null;
        }
        camera.requestPhoto();
    };
}]);