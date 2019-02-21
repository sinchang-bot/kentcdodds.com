---
slug: "es6-getter-setter""
title: "ES6 Getter Setter""
date: "2015-01-05""
author: "Kent C. Dodds"
description: "_Compared to ES5_"
banner: ./images/banner.jpg
bannerCredit: "[TestingJavaScript.com](https://testingjavascript.com) Learn the smart, efficient way to test any JavaScript application."
---

It’s actually very simple:

```
var x = 0;
var y = (newX) => x = typeof newX !== ‘undefined’ ? newX : x;
```

In pre-ES6, the equivalent would be:

```
var x = 0;
function y(newX) {
 return x = typeof newX !== ‘undefined’ ? newX : x;
}
```

The main three differences are

- No need for a return statement in single-line expressions in ES6
- No need for curly braces on single-line expressions in ES6
- No function name — this is sad :-(

One sad thing is that arrow function identifiers has been
[deferred](http://tc39wiki.calculist.org/es6/arrow-functions/), so we wont
necessarily be getting it when arrow functions are implemented in browsers. This
means that when you’re debugging, you wont see a function name associated with
this function. You also wont benefit from function declaration hoisting which is
part of my personal coding style :-(

But, I like how simple it is, and it’s kind of fun to compare. Here’s
[the spec proposal](http://tc39wiki.calculist.org/es6/arrow-functions/). If you
want to toy around with it, be my guest:

[**JS Bin**  
\_Sample of the bin: // ES6 Getter/Setter var bar = 0; var foo = (newBar) => bar = typeof newBar !== 'undefined' ? newBar…\_jsbin.com](http://jsbin.com/fuferu/3/edit?js,output 'http://jsbin.com/fuferu/3/edit?js,output')[](http://jsbin.com/fuferu/3/edit?js,output)

\*Edit\*: I just tested it out and it looks like Chrome will show the name of
the variable that was assigned to the function (so “y” in this case) which is
awesome! But still no getting around hoisting :-(
