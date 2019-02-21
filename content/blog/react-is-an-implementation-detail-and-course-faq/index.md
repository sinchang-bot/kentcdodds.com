---
slug: "react-is-an-implementation-detail-and-course-faq""
title: "React is an implementation detail (and course FAQ)""
date: "2018-10-20""
author: "Kent C. Dodds"
description: "_…yep, you read that right. Most of the course actually has nothing to do with React specifically._"
keywords: ["JavaScript","Testing","React","Vue","Angular"]
banner: ./images/banner.jpg
bannerCredit: "Photo by [Andrea Natali](https://unsplash.com/photos/3ud_v3x1lZI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/react?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)"
---

I’m **so excited** about the response to my new
[Testing JavaScript](http://testingjavascript.com/) course! I knew the developer
community needed help with testing the right way, but… wow. I’m floored. 🙏

But if you _haven’t_ signed up yet (or even if you have), let’s talk about React
for a minute.

If you’ve been following me for a while, you know I’m pretty excited about
React. I’m most effective with React, and I don’t use any other frameworks to
get work done on the frontend.

But I’m also a big fan of avoiding testing implementation details, and **React
is an implementation detail!!**

Guess what that means? All the stuff we talk about in
[TestingJavaScript.com](https://testingjavascript.com/) is relatively easy to
apply with other frameworks — like whichever framework you’re using right now,
or will use in the future.

In fact, I have an entire course showing you how to get up and running with your
own testing utility and enjoy the same benefits that you’ll see with
react-testing-library. That’s thanks to the fact that react-testing-library
itself is a very small library, and the real brains behind it is
dom-testing-library — which is totally framework-agnostic! Cool right!? 😎

In fact,
[check out this example](https://github.com/kentcdodds/dom-testing-library-with-anything/blob/9361a120bc52334968e94a10363bab9724d5dbd3/jquery.test.js)
from the course for testing a jQuery plugin with dom-testing-library:

```js
import 'jest-dom/extend-expect'
import $ from 'jquery'
import {getQueriesForElement, fireEvent} from 'dom-testing-library'

$.fn.countify = function countify() {
  this.html(`  
    <div>  
      <button>0</button>  
    </div>  
  `)
  const $button = this.find('button')
  $button._count = 0
  $button.click(() => {
    $button._count++
    $button.text($button._count)
  })
}

// tests:
test('counter increments', () => {
  const div = document.createElement('div')
  $(div).countify()
  const {getByText} = getQueriesForElement(div)
  const counter = getByText('0')
  fireEvent.click(counter)
  expect(counter).toHaveTextContent('1')

  fireEvent.click(counter)
  expect(counter).toHaveTextContent('2')
})
```

The other frameworks are even better, considering most modern frameworks are
component-based. What’s so cool is that 99% of the tests you write with these
tools will look basically the same regardless of what framework you use! That’s
a huge win.

The hardest part is figuring out how to get some DOM from your component into
the document. And one of the course modules shows you how to do that with 11
frameworks and libraries! I think you’ll really like this part of the course!

### FAQ

A lot of folks have had questions about buying the course, so I wanted to answer
them here.

**The site is behaving oddly. Do you know what is wrong?**

We had a couple of technical issues around service workers and helped get Gatsby
patched so others won’t experience the same thing. If the site is behaving
poorly in anyway please email
[help@testingjavascript.com](mailto:help@testingjavascript.com) and the team
will help you!

**Will Team Licenses be available?**

Absolutely, we are working on it! Stay tuned!

**Is this content new, or is it the same as your Frontend Masters workshops**

This is new content recorded exclusively for this course. It is very dense, with
a lot more information, and a lot of fantastic bonuses. You’ll like it.

**What if this material doesn’t suit my needs?**

😢 I guarantee it will, but if it doesn’t, send an email to
[help@testingjavascript.com](mailto:help@testingjavascript.com) within 30-days
for a full refund.

**Who is this course for?**

This course is for anybody building web applications with JavaScript. It assumes
that you know how to use modern JavaScript and have some experience building
applications.

If you’ve never tested your apps before, this is a great place to start. If you
are a seasoned pro delivering well tested applications, this should be a solid
review, reference, and will definitely teach you some new patterns and
practices.

This course isn’t for you if you believe shipping well-tested quality JavaScript
apps to your users is a waste of time.

**Are there any discounts available?**

Absolutely, the Pro Testing bundle is currently 40% off. This is the best price
on this incredibly valuable resource. There is no other hidden discount.

**I live in a region that doesn’t have the purchasing power. Do you support
purchase power parity or regional pricing?**

We are working on it! It’s complicated, but it’s an obvious issue and I believe
everybody should have access to quality learning materials at a price they can
afford. We are working on a system to offer regionally appropriate pricing on
the Standard & Basic Testing bundles (the professional bundle will remain full
price, so the current 40% is the best value that will exist on this jam packed
bundle of amazing testing goodness!)

**Can I get more details on this course?**

Yes!! I recorded a detailed walk through of the entire course and what you will
get:
[https://youtube.com/watch?v=hZFgyoImTx0&list=PLV5CVI1eNcJgCrPH_e6d57KRUTiDZgs0u](https://youtube.com/watch?v=hZFgyoImTx0&list=PLV5CVI1eNcJgCrPH_e6d57KRUTiDZgs0u)

**What font/theme is that?**

[http://kcd.im/mft](http://kcd.im/mft)

**I need more help, what should I do.**

Send an email to [help@testingjavascript.com](mailto:help@testingjavascript.com)

-Kent

P.S. You’ve still got time to purchase the full Testing Course at the Early Bird
price, but it won’t be around much longer!

=\> [Get Testing JavaScript now](https://testingjavascript.com/)

[![](./images/0.jpeg)](https://testingjavascript.com)

<figcaption>[TestingJavaScript.com](https://testingjavascript.com) Learn the smart, efficient way to test any JavaScript application.</figcaption>
