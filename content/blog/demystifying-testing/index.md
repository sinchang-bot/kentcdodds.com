---
slug: "demystifying-testing""
title: "Demystifying Testing""
date: "2018-10-11""
author: "Kent C. Dodds"
description: "_How to get from aimlessly testing or not testing at all to really understanding how and what to test._"
keywords: ["JavaScript","Testing"]
banner: ./images/banner.jpg
bannerCredit: "Photo by [Paul Gilmore](https://unsplash.com/photos/36plOdZK_uY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)"
---

In the next few weeks, you’re going to get bonus emails from me as I prepare to
launch the biggest undertaking I’ve ever taken. You’ll love it. (Trust me, I’ve
run the tests. 😉)

Many of you have messaged me, confused about where to get started with testing.
Just like everything else in software, we work hard to build abstractions to
make our jobs easier. But that amount of abstraction evolves over time, until
the only ones who _really_ understand it are the ones who built the abstraction
in the first place. Everyone else is left with taking the terms, APIs, and tools
at face value and struggling to make things work.

If there’s one thing I believe about abstraction in code, it’s that the
abstraction is _not_ magic, it’s code. If there’s another I thing I believe
about abstraction in code, it’s that it’s easier to learn by doing.

Here’s an example:

Imagine that a less seasoned engineer approaches you. They’re hungry to learn,
they want to be confident in their code, and they’re ready to start testing. 👍
Ever prepared to learn from you, they’ve written down a list of terms, APIs, and
concepts they’d like you to define for them:

- Assertion
- Testing Framework
- The `describe`/`it`/`beforeEach`/`afterEach`/`test` functions
- Mocks/Stubs/Test Doubles/Spies
- Unit/Integration/End to end/Functional/Accessibility/Acceptance/Manual testing

So………

Could you rattle off definitions for that budding engineer? Can you explain the
difference between an assertion library and a testing framework? Or are they
easier for you to _identify_ than _explain_?

Here’s the point. The better you understand these terms and abstractions, the
more effective you will be at teaching them. And if you can teach them, **you’ll
be more effective at _using_ them, too.**

Enter a teach-an-engineer-to-fish moment. Did you know that you can _write your
own_ assertion library and testing framework? We often think of these
abstractions as beyond our capabilities, but they’re not. Each of the popular
assertion libraries and frameworks started with a single line of code, followed
by another and then another. **You don’t need any tools to write a simple
test.** Here’s an example:

```js
const {sum} = require('../math')

const result = sum(3, 7)
const expected = 10
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}
```

Put that in a module called `test.js` and run it with `node test.js` and poof,
you can start getting confidence that the `sum`function from the `math.js`
module is working as expected. Make that run on CI and you can get the
confidence that it won’t break as changes are made to the codebase. 🏆

Once you understand how the abstractions work at a fundamental level, you’ll
probably want to use them because hey, you just learned to fish and now you can
go fishing. And we have some pretty phenomenal fish, uh, tools available to us.
My favorite is the [Jest](https://jestjs.io/) testing platform. It’s amazingly
capable and fully featured and allows me to write tests that give me the
confidence I need to not break things as I change code.

I’m really looking forward to what I’m creating for you. I think it’ll help
accelerate your understanding of testing tools and abstractions by giving you
the chance to implement parts from scratch. The (hopeful) result? You can start
writing tests that are maintainable and built to instill confidence in your code
day after day.

Stay tuned. 🎣

P.S. Give this a try:
[Tweet](https://twitter.com/intent/tweet?status=%23AssertionLibVsTestingFramework)
what’s the difference between a testing framework and an assertion library? In
my course, I’ll not only explain it, we’ll build our own!

P.P.S. Set your alarms and
[tell your friends](https://twitter.com/intent/tweet?status=%E2%9A%A0%EF%B8%8F%20Hey%20friends!%20%40kentcdodds%20is%20working%20on%20a%20HUGE%20series%20of%20courses%20%28%3E100%20videos%20total!%29%20and%20you%20don%27t%20want%20to%20miss%20it.%20Subscribe%20to%20his%20newsletter%20to%20get%20a%20special%20discount%20when%20it%27s%20launched%3A%20kcd.im/news%20%F0%9F%92%8C)!
On **Friday Oct 19th** my course goes on sale with early-bird pricing! It is
HUGE. Like over 100 dense videos huge. Like ~5 dense hours of testing huge.
Seriously, **let people know.** They don’t want to miss this.
