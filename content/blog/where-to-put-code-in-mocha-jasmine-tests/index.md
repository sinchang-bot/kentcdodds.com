---
slug: "where-to-put-code-in-mocha-jasmine-tests""
title: "Where to put code in mocha/jasmine tests""
date: "2015-10-22""
author: "Kent C. Dodds"
description: "_UPDATE: I now try to avoid using testing lifecycle hooks or nesting describes at all. Listen to me talk about it for 3 minutes here. In…_"
keywords: ["JavaScript","Testing","Angularjs"]
banner: ./images/banner.jpg
bannerCredit: "[TestingJavaScript.com](https://testingjavascript.com) Learn the smart, efficient way to test any JavaScript application."
---

**_UPDATE:_** _I now try to avoid using testing lifecycle hooks or nesting
describes at all. Listen to me talk about it for 3 minutes_
[_here_](https://www.briefs.fm/3-minutes-with-kent/27)_. In fact, now that I’m
using_ [_Jest_](http://facebook.github.io/jest/)
_(_[_learn Jest_](https://kcd.im/egghead-jest)_), I don’t even use describe
either. I find it’s much better this way. But if you want to use lifecycle hooks
anyway, this blogpost is still relevant._

With [mocha](http://mochajs.org/) (and [jasmine](http://jasmine.github.io/)) you
have a few hooks into the testing lifecycle: _describe_, _before_, _after_,
_beforeEach_, _afterEach_, and _it._ What do these all mean? When do I use one
over another? What do I put in each of these? I’m going to attempt to answer
this to my best abilities according to my personal experience.

#### describe

Used to group tests about a unit or a component together. You can nest describe
statements to be more specific about a piece of a unit. I nest these when I’m
testing a module that has several methods I can call. For example:

```js
import wand from './wand'
```

describe(\`wand\`, function() {  
 describe(\`createUnicorn\`, function() {  
 // test wand.createUnicorn  
 })  
})

````

In the context of E2E testing of a page, I’d group like-tests that require similar set-up/tear-down and/or specific parts or components of the page you’re testing. Honestly I have limited experience with this type of testing, but the general rule should be group things that can be described together.

#### before/after

This runs in the scope of the describe. As the names imply, they run before and after the set of contained tests and only run once each. This is handy if you need to set up or tear down state for all of the tests. These things should not need modification between tests. I generally favor _beforeEach_ and _afterEach_ to ensure that your state is reset between tests. But in E2E this might be a little expensive, so sharing that state between tests may not be a bad idea.

You can have multiple of each of these (they’re executed in the order they appear). I normally only have one, but it can be handy if you want to group and label set-up or tear-down. Generally, these should not contain any kind of assertions.

As far as placement, I would recommend you place them where you would cognitively think they should run:

```js
import wand from './wand'
````

describe(\`wand\`, function() {  
 describe(\`createUnicorn\`, function() {  
 before(\`optional descriptive message\`, function() {  
 // set up state before any of the tests run  
 })

```js
// test wand.createUnicorn
```

    after(\`optional descriptive message\`, function() {
      // tear down state after all of the tests run
    })

})  
})

````

#### beforeEach/afterEach

These run for every single individual test. So if you have 3 tests, these will each run 3 times. Use this only for stuff that’s shared across all of your statements. I often use this to set up some state that needs to exist (when the thing I’m testing isn’t stateless 😒) or to create convenience objects/functions that are not stateless.

You can have multiple of each of these (they’re executed in the order they appear). I normally only have one, but it can be handy if you want to group and label set-up or tear-down. Generally, these should not contain any kind of assertions.

```js
import wand from './wand'
````

describe(\`wand\`, function() {  
 describe(\`createUnicorn\`, function() {  
 before(\`optional descriptive message\`, function() {  
 // set up state before any of the tests run  
 })

```````
    beforeEach(\`optional descriptive message\`, function() {
      // set up state before each of the tests run
    })
``````js
    // test wand.createUnicorn
```````

    afterEach(\`optional descriptive message\`, function() {
      // tear down state after each of the tests run
    })

````
    after(\`optional descriptive message\`, function() {
      // tear down state after all of the tests run
    })
  })
})
```

#### it

This is where your actual assertions come in. If you do not have assertions in these, you’re doing it wrong. Each _it_ statement should be totall isolated from any of the other _it_ statements. Each should be able to run without any other test running.

For assertions, with Mocha, I recommend [Chai](http://chaijs.com/) and personally prefer [the expect assertion style](http://chaijs.com/guide/styles/#expect). Once you’ve set up the state you need for your test, you use that state to perform the actions to get the output you’ll be asserting.

> The best test checks expected output with actual output

This is really easy to do when you’re testing something that’s stateless, but the reality is that many of us (particularly in the Angular community) have a really hard time writing components (especially directives) that are stateless. Hopefully by writing your tests before you implement will help encourage you to write stateless stuff because it’s just easier to test.

Anyway, as you would expect, your _it_ statement will go between the _beforeEach_ and _afterEach_:

```js
import wand from './wand'
````

describe(\`wand\`, function() {  
 describe(\`createUnicorn\`, function() {  
 before(\`optional descriptive message\`, function() {  
 // set up state before any of the tests run  
 })

```
    beforeEach(\`optional descriptive message\`, function() {
      // set up state before each of the tests run
    })
```

    it(\`should create me a new unicorn object\`, function() {
      const actual = wand.createUnicorn()
      const expected = {name: 'Fred'}
      expect(actual).to.deep.equal(expected)
    })

```
    afterEach(\`optional descriptive message\`, function() {
      // tear down state after each of the tests run
    })
```

    after(\`optional descriptive message\`, function() {
      // tear down state after all of the tests run
    })

})  
})

```

```
