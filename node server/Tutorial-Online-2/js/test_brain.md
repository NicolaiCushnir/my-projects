* prima întrebare

```js
f.call(null);

function f() {
  alert(this);
}
```

* a 2 întrebarea

```js
let a = [1,2]

(function() { alert(a) })()
```

* trei

```js
let user = {
  sayHi: function() {
    alert(this);
  }
};

(user.sayBye = user.sayHi)();
```

* patru

```js
```
node.js:Developer=>1995
