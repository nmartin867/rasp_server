angular.module('raspi-server', ['ui.router', 'btford.socket-io']);

angular.element(document).ready(function () {
    angular.bootstrap(document, ['raspi-server']);
});