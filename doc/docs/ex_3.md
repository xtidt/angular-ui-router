# UI-Router for Angular 1 - Hello Galaxy

## Hello Galaxy application

```javascript
var personState = { 
  name: 'people.person', 
  url: '/{personId}', 
  component: 'person',
  resolve: {
    person: function(people, $stateParams) {
      return people.find(function(person) { 
        return person.id === $stateParams.personId;
      });
    }
  }
}
```

## State name 

## url

## resolve

## Views

```javascript
<!-- outer container -->
<div class="flex-h">  

  <!-- inner container for people -->
  <div class="people">
  
    <h3>Some people:</h3>
    <ul>
      <li ng-repeat="person in $ctrl.people">
        <a ui-sref-active="active" 
           ui-sref="people.person({ personId: person.id })">
          {{person.name}}
        </a>
      </li>
    </ul>
    
  </div>
  
  <!-- viewport for child view -->
  <ui-view></ui-view>
</div>
```