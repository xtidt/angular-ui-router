# UI-Router for Angular 1 - Hello Solar System

## Hello Solar System application

* 组件定义

```javascript
angular.module('hellogalaxy').component('hello', {
  template:  '<h3>{{$ctrl.greeting}} Solar System!</h3>' +
             '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',
           
  controller: function() {
    this.greeting = 'hello';
  
    this.toggleGreeting = function() {
      this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
    }
  }
})
```

* 组件引用

```javascript
var helloGalaxy = {
  name: 'hello',
  url: '/hello',
  component: 'hello'
}
```

```javascript
var peopleState = {
  name: 'people',
  url: '/people',
  component: 'people',
  resolve: {
    people: function(PeopleService) {
      return PeopleService.getAllPeople();
    }
  }
},
```
* 状态参数

```javascript
angular.module('hellogalaxy').component('people', {
  bindings: { people: '<' },

  template: '<h3>Some people:</h3>' +
            '<ul>' +
            '  <li ng-repeat="person in $ctrl.people">' +
            '    <a ui-sref="person({ personId: person.id })">' +
            '      {{person.name}}' +
            '    </a>' +
            '  </li>' +
            '</ul>'
})
```

* 参数链接 

```html
<li ng-repeat="person in $ctrl.people">
  <a ui-sref="person({ personId: person.id })">
    {{person.name}}
  </a>
</li>
```
