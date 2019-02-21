---
slug: "classes-complexity-and-functional-programming""
title: "Classes, Complexity, and Functional Programming""
date: "2017-06-06""
author: "Kent C. Dodds"
description: "_When I use classes, when I don’t, what I do instead, and why_"
keywords: ["JavaScript","ES6","Classes","Functional Programming","Complexity"]
banner: ./images/banner.jpg
bannerCredit: "Obligatory semi-to-not-related header image via: [https://unsplash.com/photos/sMQiL_2v4vs](https://unsplash.com/photos/sMQiL_2v4vs)"
---

When it comes to applications intended to last, I think we all want to have
simple code that’s easier to maintain. Where we often really disagree is how to
accomplish that. In this blog post I’m going to talk about how I see functions,
objects, and classes fitting into that discussion.

### A class

Let’s take a look at an example of a class implementation to illustrate my
point:

```js
class Person {
  constructor(name) {
    // common convention is to prefix properties with \`_\`
    // if they're not supposed to be used. See the appendix
    // if you want to see an alternative
    this._name = name
    this.greeting = 'Hey there!'
  }
  setName(strName) {
    this._name = strName
  }
  getName() {
    return this._getPrefixedName('Name')
  }
  getGreetingCallback() {
    const {greeting, _name} = this
    return subject => `${greeting} ${subject}, I'm ${_name}`
  }
  _getPrefixedName(prefix) {
    return `${prefix}: ${this._name}`
  }
}
const person = new Person('Jane Doe')
person.setName('Sarah Doe')
person.greeting = 'Hello'
person.getName() // Name: John Doe
person.getGreetingCallback()('Jeff') // Hello Jeff, I'm Sarah Doe
```

So we’ve declared a `Person` class with a constructor instantiating a few member
properties as well as a couple of methods. With that, if we type out the
`person` object in the Chrome console, it looks like this:

![](./images/0.png)

<figcaption>A Person instance with methods on \_\_proto\_\_</figcaption>

The real benefit to notice here is that most of the properties for this `person`
live on the `prototype` (shown as `__proto__` in the screenshot) rather than the
instance of `person`. This is not insignificant because if we had ten thousand
instances of `person` they would all be able to share a reference to the same
methods rather than having ten thousand copies of those methods everywhere.

What I want to focus on now is how many concepts you have to learn to really
understand this code and how much complexity those concepts add to your code.

- Objects: Pretty basic. Definitely entry level stuff here. They don’t add a
  whole lot of complexity by themselves.
- Functions (and
  [closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)):
  This is also pretty fundamental to the language. Closures do add a bit of
  complexity to your code (and can cause
  [problems](https://blog.meteor.com/an-interesting-kind-of-javascript-memory-leak-8b47d2e7f156)
  if you’re not careful), but you really can’t make it too far in JavaScript
  without having to learn these. (Learn more
  [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)).
- A function/method’s `this` keyword: Definitely an important concept in
  JavaScript.

> My assertion is that `this` is hard to learn and can add unnecessary
> complexity to your codebase.

### The \`this\` keyword

Here’s what
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
has to say about `this`:

> A **function’s** `**_this_**` **keyword** behaves a little differently in
> JavaScript compared to other languages. It also has some differences between
> [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode)
> and non-strict mode.

> In most cases, the value of `_this_` is determined by how a function is
> called. It can't be set by assignment during execution, and it may be
> different each time the function is called. ES5 introduced the
> `[_bind_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)`method
> to
> [set the value of a function's](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#The_bind_method)
> `[_this_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#The_bind_method)`
> [regardless of how it's called](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#The_bind_method),
> and ES2015 introduced
> [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
> whose `_this_` is lexically scoped (it is set to the `_this_` value of the
> enclosing execution context).

Maybe not rocket science 🚀, but it’s an implicit relationship and it’s
definitely more complicated than just objects and closures. You can’t get away
from objects and closures, but I believe you _can_ often get away with avoiding
classes and `this` most of the time.

Here’s a (contrived) example of where things can break down with `this`.

```js
const person = new Person('Jane Doe')
const getGreeting = person.getGreeting
// later...
getGreeting() // Uncaught TypeError: Cannot read property 'greeting' of undefined at getGreeting
```

> The core issue is that your function has been
> “[complected](https://youtu.be/rI8tNMsozo0)” with wherever it is referenced
> because it uses `this`.

For a more real world example of the problem, you’ll find that this is
especially evident in React ⚛️. If you’ve used React for a while, you’ve
probably made this mistake before as I have:

```
class Counter extends React.Component {
  state = {clicks: 0}
  increment() {
    this.setState({clicks: this.state.clicks + 1})
  }
  render() {
    return (
      You have clicked me {this.state.clicks} times
    )
  }
}
```

When you click the button you’ll see:
`Uncaught TypeError: Cannot read property 'setState' of null at increment`

And this is all because of `this`, because we’re passing it to `onClick` which
is not calling our `increment` function with `this` bound to our instance of the
component. There are various ways to fix this
([watch this free 🆓 egghead.io video 💻 about how](https://egghead.io/lessons/javascript-public-class-fields-with-react-components)).

> The fact that you have to think about \`this\` adds cognitive load that would
> be nice to avoid.

### How to avoid ``` this` ``

So, if `this` adds so much complexity (as I’m asserting), how do we avoid it
without adding even more complexity to our code? How about instead of the
object-oriented approach of classes, we try a more functional approach? This is
how things would look if we used
[pure functions](https://en.wikipedia.org/wiki/Pure_function):

```js
function setName(person, strName) {
  return Object.assign({}, person, {name: strName})
}

// bonus function!
function setGreeting(person, newGreeting) {
  return Object.assign({}, person, {greeting: newGreeting})
}

function getName(person) {
  return getPrefixedName('Name', person.name)
}

function getPrefixedName(prefix, name) {
  return `${prefix}: ${name}`
}

function getGreetingCallback(person) {
  const {greeting, name} = person
  return subject => `${greeting} ${subject}, I'm ${name}`
}

const person = {greeting: 'Hey there!', name: 'Jane Doe'}
const person2 = setName(person, 'Sarah Doe')
const person3 = setGreeting(person2, 'Hello')
getName(person3) // Name: Sarah Doe
getGreetingCallback(person3)('Jeff') // Hello Jeff, I'm Sarah Doe
```

With this solution we have no reference to `this`. We don’t have to think about
it. As a result, it’s easier to understand. Just functions and objects. There is
basically no state you need to keep in your head at all with these functions
which makes it very nice! And the person object is just data, so even easier to
think about:

![](./images/1.png)

<figcaption>The person3 object with just greeting and name</figcaption>

Another nice property of functional programming that I won’t delve into very far
is that it’s very easy to unit test. You simply call a function with some input
and assert on its output. You don’t need to set up any state beforehand. That’s
a very handy property!

Note that functional programming is more about making code easier to understand
so long as it’s “fast enough.” Despite speed of execution not being the focus,
there are some reeeeally nice perf wins you _can_ get in certain scenarios (like
reliable `===` equality checks for objects for example). More often than not,
**your use of functional programming will _often be way down on the list of
bottlenecks that are making your application slow._**

### Cost and Benefit

Usage of `class` is not bad. It definitely has its place. If you have some
really
[“hot” code](https://en.wikipedia.org/wiki/Hot_spot_%28computer_programming%29)
that’s a bottleneck for your application, then using `class` can really speed
things up. But 99% of the time, that’s not the case. And I don’t see how
`class`es and the added complexity of `this` is worth it for most cases (let’s
not even get started with
[prototypal inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)).
I have yet to have a situation where I needed `class`es for performance. So I
_only_ use them for React components because that’s what you have to do if you
need to use state/lifecycle methods (but maybe not in the
[future](https://github.com/reactjs/react-future/tree/master/07%20-%20Returning%20State)).

### Conclusion

Classes (and prototypes) have their place in JavaScript. But they’re an
optimization. They don’t make your code simpler, they make it more complex. It’s
better to narrow your focus on things that are not only simple to learn but
simple to understand: functions and objects.

![](./images/2.png)

<figcaption>See you [around](https://twitter.com/kentcdodds) friends!</figcaption>
