---
slug: "common-testing-mistakes""
title: "Common Testing Mistakes""
date: "2018-11-12""
author: "Kent C. Dodds"
description: "_Today let’s talk about some common mistakes that people make when testing JavaScript applications._"
keywords: ["JavaScript","Testing"]
banner: ./images/banner.jpg
bannerCredit: "Photo by [Jeremy Bishop](https://unsplash.com/photos/KputBgWH-Ek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/turtle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)"
---

### Mistake Number 0

One of the biggest mistakes you could make would be missing out on my full
[Testing JS course](https://testingjavascript.com/). (see what I did there?)

### Mistake Number 1: Testing Implementation Details

I harp on this a lot (I even have a more complete blog post about this topic
coming next week). It’s because it’s a huge problem in testing and leads to
tests that don’t give nearly as much confidence as they could. Here’s a very
simple example of a test that’s testing implementation details:

```
// counter.js
import React from 'react'

export class Counter extends React.Component {
  state = {count: 0}
  increment = () => this.setState(({count}) => ({count: count + 1}))
  render() {
    const {count} = this.state
    return <button onClick={this.increment}>{count}</button>
  }
}

// __tests__/counter.js
import React from 'react'
// (it's hard to test implementation details with react-testing-library,
//  so we'll use enzyme in this example 😅)
import {mount} from 'enzyme'
import {Counter} from '../counter'

test(’the increment method increments count’, () => {
  const wrapper = mount(<Counter />)
  // don’t ever do this:
  expect(wrapper.instance().state.count).toBe(0)
  wrapper.instance().increment()
  expect(wrapper.instance().state.count).toBe(1)
})
```

So why is this testing implementation details? Why is it so bad to test
implementation details? Here are two truths about tests that focus on
implementation details like the test above:

1.  I can break the code and not the test (eg: I could make a typo in my
    button’s onClick assignment)
2.  I can refactor the code and break the test (eg: I could rename increment to
    updateCount)

These kinds of tests are the worst to maintain because you’re constantly
updating them (due to point #2), and they don’t even give you solid confidence
(due to point #1).

In [my course](https://testingjavascript.com/) I’ll show you the right way to
write tests and avoid this common mistake.

### Mistake Number 2: 100% code coverage

Trying to go for 100% code coverage for an application is a total mistake and I
see this all the time. Interestingly I’ve normally seen this as a mandate from
management, but wherever it’s coming from it’s coming out of a misunderstanding
of what a code coverage report can and cannot tell you about the confidence you
can have in your codebase.

What code coverage is telling you:

- This code was run when your tests were run.

What code coverage is NOT telling you:

- This code will work according to the business requirements.
- This code works with all the other code in the application.
- The application cannot get into a bad state

Another problem with code coverage reports is that every line of covered code
adds just as much to the overall coverage report as any other line. What this
means is that you can increase your code coverage just as much by adding tests
to your “About us” page as you can by adding tests to your “Checkout” page. One
of those things is more important than the other, and code coverage can’t give
you any insight into that for your codebase…

There’s no one-size-fits-all solution for a good code coverage number to shoot
for. Every application’s needs are different. I concern myself less with the
code coverage number and more with how confident I am that the important parts
of my application are covered. I use the code coverage report to help me _after_
I’ve already identified which parts of my application code are critical. It
helps me to know if I’m missing some edge cases the code is covering but my
tests are not.

> _I should note that for open source modules, going for 100% code coverage is
> totally appropriate because they’re generally a lot easier to keep at 100%
> (because they’re smaller and more isolated) and they’re really important code
> due to the fact that they’re shared in multiple projects._

I talked a bit about this in
[my livestream](https://www.youtube.com/watch?v=O2tsvUJT09U&index=9&list=PLV5CVI1eNcJgCrPH_e6d57KRUTiDZgs0u&t=0s)
the other day, check it out!

### Mistake Number 3: Repeat Testing

One of the biggest complaints people have about end-to-end (E2E) tests is how
slow and brittle they are when compared to integration or unit tests. There’s no
way you’ll ever get a single E2E test as fast or reliable as a single unit test.
It’s just never going to happen. That said a single E2E test will get you WAY
more confidence than a single unit test. In fact, there are some corners of
confidence that are impossible to get out of unit tests that E2E tests are great
at, so it’s definitely worth having them around!

But this doesn’t mean that we can’t make our E2E tests faster and more reliable
than you’ve likely experienced in the past. Repeat testing is a common mistake
that people make when writing E2E tests that contribute to the poor performance
and reliability.

[Tests should always work in isolation](https://blog.kentcdodds.com/test-isolation-with-react-6962d3f13d1f).
So that means every test should be executed as a different user. So every test
will need to register and login as a brand new user right? Right. So you need to
have a few page objects for the registration and login pages because you’ll be
running through those pages in every test right? WRONG! That’s the mistake!

Let’s take a step back. Why are you writing tests? So you can ship your
application with confidence that things wont break! Let’s say you have 100 tests
that need an authenticated user. How many times do you need to run through the
“happy path” registration flow to be confident that flow works? 100 times or 1
time? I think it’s safe to say that if it worked once, it should work every
time. So those 99 extra runs don’t give you any extra confidence. **That’s
wasted effort.**

So what do you do instead? I mean, we already established that your tests should
work in isolation so you shouldn’t be sharing a user between them. Here’s what
you do: make the same HTTP calls in your tests that your application makes when
you register and log in a new user! Those requests will be MUCH faster than
clicking and typing around the page and there’s less of a chance for false
negative failures. And as long as you keep one test around that actually _does_
test the registration/login flow you haven’t lost any confidence that this flow
works.

### Conclusion

Always remember the reason that you’re testing is about confidence. If something
your test is doing isn’t bringing you more confidence, then consider whether you
can stop doing it!

Good luck!

### [Course FAQ](https://testingjavascript.com)

A lot of folks have had questions about buying the course, so I wanted to answer
them here.

**The site is behaving oddly. Do you know what is wrong?**

We had a couple of technical issues around service workers and helped get Gatsby
patched so others won’t experience the same thing. If the site is behaving
poorly in anyway please email
[help@testingjavascript.com](mailto:help@testingjavascript.com) and the team
will help you!

**Are Team Licenses be available?**

Yes! Look below the Pro tier for team pricing. The bulk discount goes up to a
savings of 72%!!

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

**I live in a region that doesn’t have the purchasing power. Do you support
purchase power parity or regional pricing?**

Yes! If it’s supported for your region, then there will be a link for you to
access the regional pricing.

**Can I get more details on this course?**

Yes!! I recorded a detailed walk through of the entire course and what you will
get:

**What font/theme is that?**

**I need more help, what should I do.**

Send an email to [help@testingjavascript.com](mailto:help@testingjavascript.com)

**Things to not miss**:

- [TestingJavaScript spectrum community](https://spectrum.chat/testingjavascript):
  A place where you can chat with other people who want to learn the smart,
  efficient way to test any JavaScript application!
- [React Conf](https://conf.reactjs.org/): Tickets are all sold out, but this is
  going to be a HUGE conference. Even if you’re not a react user, you’ll want to
  watch the livestream.
- [VSCode in Codesandbox](https://twitter.com/CompuIves/status/1052594462768148480):
  This is seriously awesome. You can enable it in the experimental area of your
  preferences. I tried it and it’s AMAZING. Seriously, incredible work by Ives.
  It’s
  [noticeably faster](https://twitter.com/kentcdodds/status/1053635470788190208)
  and just an all around amazing experience.
