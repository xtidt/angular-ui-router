# ui-router 系列文章

## ui-router - 状态嵌套和视图嵌套

[参考原文](https://github.com/angular-ui/ui-router/wiki/Nested-States-%26-Nested-Views)

## 状态嵌套的方法

* 状态可以相互嵌套。有三个嵌套的方法

1. 使用“点标记法”，例如：`.state('contacts.list', {})`
1. 使用parent属性，指定一个父状态的名称字符串，例如：`parent: 'contacts`;
1. 使用parent属性，指定一个父状态对象，例如：`parent: contacts`（contacts 是一个状态对象）

## 点标记法

* 在$stateProvider中可以使用点语法来表示层次结构，下面，contacts.list是contacts的子状态。

```javascript
$stateProvider
  .state('contacts', {})
  .state('contacts.list', {});
```

* 使用parent属性，指定一个父状态的名称字符串

```javascript
$stateProvider
  .state('contacts', {})
  .state('list', {
    parent: 'contacts'
  });
```

* 基于对象的状态










