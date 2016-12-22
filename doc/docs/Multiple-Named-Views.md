# ui-router - 多个命名的视图

## 可以给ui-view指定名称，这样一个模板中就可以有多个ui-view。假设您有一个应用，需要动态填充graph、table data和filters，像下面这样：

![text](http://bubkoo.qiniudn.com/MultipleNamedViewsExample.png)

* 当您需要使用多视图时，需要用到状态的views属性，views属性值是一个对象

## 设置views属性将覆盖覆盖的template属性

* 如果在状态中定义了views属性，那么状态中的templateUrl、template 和 templateProvider属性将被忽略。

## 示例 - 名称匹配

* `views`的属性`key`应该对应的`ui-view`的名称、像下面这样：

```html
<!-- index.html -->
<body>
  <div ui-view="filters"></div>
  <div ui-view="tabledata"></div>
  <div ui-view="graph"></div>
</body>
```

```javascript
$stateProvider
  .state('report', {
    views: {
      'filters': { ... templates and/or controllers ... },
      'tabledata': {},
      'graph': {},
    }
  })
```

* 然后views中的每一个 view 都可以设置自身的模板属性（template，templateUrl，templateProvider） 和控制器属性（controller，controllerProvider）。

```javascript
$stateProvider
  .state('report',{
    views: {
      'filters': {
        templateUrl: 'report-filters.html',
        controller: function($scope){ ... controller stuff just for filters view ... }
      },
      'tabledata': {
        templateUrl: 'report-table.html',
        controller: function($scope){ ... controller stuff just for tabledata view ... }
      },
      'graph': {
        templateUrl: 'report-graph.html',
        controller: function($scope){ ... controller stuff just for graph view ... }
      },
    }
  })
```

## 视图名称 - 相对命名与绝对命名

* 在定义views属性时，如果视图名称中包含@，那么视图名称就是绝对命名的方式，否则就是相对命名的方式。相对命名的意思是相对于父模板中的ui-view，而绝对命名则指定了相对于哪个状态的模板。

* 在 ui-router 内部，views属性中的每个视图都被按照viewname@statename的方式分配为绝对名称，viewname是目标模板中的ui-view对应的名称，statename是状态的名称，状态名称对应于一个目标模板。@前面部分为空表示未命名的ui-view，@后面为空则表示相对于根模板，通常是 index.html。

```javascript
.state('report',{
  views: {
    'filters@': { },
    'tabledata@': { },
    'graph@': { }
  }
})
```

* 注意，这样的写法，视图的名称指定为绝对的名字，而不是相对的名字。这样 ‘filters’，’tabledata’和’graph’三个视图将加载到根视图的模板中(由于没有父状态，则根模板就是index.html)。

* 绝对命名的方式可以让我们完成一些强大的功能，让我们假设我们有几个模板设置（这里仅仅作为实例演示，有些不现实的地方），像下面这样：

```html
<!-- index.html (root unnamed template) -->
<body ng-app>
<div ui-view></div> <!-- contacts.html plugs in here -->
<div ui-view="status"></div>
</body>
```


```html
<!-- contacts.html -->
<h1>My Contacts</h1>
<div ui-view></div>
<div ui-view="detail"></div>
```

```html
<!-- contacts.detail.html -->
<h1>Contacts Details</h1>
<div ui-view="info"></div>
```

* 让我们来看看在contacts.detail状态中，相对命名和绝对命名的各种使用方式，请注意，一旦使用了@则表示绝对命名的方式。

```javascript
$stateProvider
  .state('contacts', {
    // 根状态，对应的父模板则是index.html
    // 所以 contacts.html 将被加载到 index.html 中未命名的 ui-view 中
    templateUrl: 'contacts.html'   
  })
  .state('contacts.detail', {
    views: {
        // 嵌套状态，对应的父模板是 contacts.html
        // 相对命名
        // contacts.html 中 <div ui-view='detail'/> 将对应下面
        "detail" : { },   
         
        // 相对命名
        // 对应 contacts.html 中的未命名 ui-view <div ui-view/>
        "" : { }, 
        // 绝对命名
        // 对应 contacts.detail.html 中 <div ui-view='info'/>
        "info@contacts.detail" : { }
        // 绝对命名
        // 对应 contacts.html 中 <div ui-view='detail'/>
        "detail@contacts" : { }
        // 绝对命名
        // 对应 contacts.html 中的未命名 ui-view <div ui-view/>
        "@contacts" : { }
        // 绝对命名
        // 对应 index.html 中 <div ui-view='status'/> 
        "status@" : { }
        // 绝对命名
        // 对应 index.html 中 <div ui-view/>
        "@" : { } 
  });
```



















