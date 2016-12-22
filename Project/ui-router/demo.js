var myApp = angular.module('app', ['ui.router']);

$stateProvider.state('contacts', {
    template: '<h1>{{title}}</h1>',
    controller: function($scope) {
        $scope.title = 'My Contacts';
    }
})

$state.go()