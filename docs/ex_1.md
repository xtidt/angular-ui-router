# UI-Router for Angular 1 - Hello World! 

## Hello World application

```html
<html>
  <head>
    <script src="lib/angular.js"></script>
    <script src="lib/angular-ui-router.js"></script>
    <script src="helloworld.js"></script>

    <style>.active { color: red; font-weight: bold; }</style>
  </head>

  <body ng-app="helloworld">
    <a ui-sref="hello" ui-sref-active="active">Hello</a>
    <a ui-sref="about" ui-sref-active="active">About</a>

    <ui-view></ui-view>
  </body>
</html>

```

## helloworld.js 

```javascript
var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});
```

## 视图

* 添加 ui-view 标签

```html
<body ng-app="myApp">
  <ui-view></ui-view>
</body>
```








