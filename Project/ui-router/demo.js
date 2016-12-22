var myApp = angular.module('app', ['ui.router']);

myApp.config(function($stateProvider) {
    $stateProvider.state("contacts", {
        template: '<h1>{{title}}</h1>',
        resolve: { title: 'My Contacts' },
        controller: function($scope, title) {
            $scope.title = 'My Contacts';
        },
        // title 是解决依赖项，这里也是可以使用解决依赖项的
        onEnter: function(title) {
            if (title) {
                console.log(title);
            }
        },
        // title 是解决依赖项，这里也是可以使用解决依赖项的
        onExit: function(title) {
            if (title) {}
        }
    })
});