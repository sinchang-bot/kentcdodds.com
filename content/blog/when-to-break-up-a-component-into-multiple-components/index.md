---
slug: "when-to-break-up-a-component-into-multiple-components""
title: "When to break up a component into multiple components""
date: "2018-07-16""
author: "Kent C. Dodds"
description: "_At what point does it make sense to break a single component into multiple components?_"
keywords: ["JavaScript","React"]
banner: ./images/banner.jpg
bannerCredit: "Photo by [Samuel Scrimshaw](https://unsplash.com/photos/kp_87tExCwI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/broken?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)"
---

Did you know that you could write any React Application as a single React
Component? There’s absolutely nothing technically stopping React from putting
your entire application into one giant component. You’d have a HUGE `render`
method, a TON of instance methods, a LOT of state, and you’d probably need every
lifecycle hook (with the exception of `shouldComponentUpdate` (it should always
update!) and `componentWillUnmount` (it will never unmount!)).

If you tried this though you’d face a few problems:

1.  Performance would probably suffer: Every state change results in a re-render
    of the entire application.
2.  Code sharing/reusability would be… not easy.
3.  State would be a challenge: Knowing which pieces of state and event handlers
    went with what parts of JSX would make your head hurt 😬 and lead to some
    hard to track down bugs 🐜 (This is one benefit of the separation of
    concerns).
4.  Testing would be 100% integration:
    [Not necessarily an altogether bad thing](http://kcd.im/write-tests), but it
    would be pretty tough to test edge cases and keep things isolated to the
    parts that you’re trying to test, so maintaining those tests would be a
    challenge.
5.  Working together on the codebase with multiple engineers would just be
    terrible. Can you imagine the git diffs and merge conflicts?!
6.  Using third party component libraries would be… ummm… impossible? If we’re
    writing everything as a single component third party libraries is at odds
    with that goal! And even if we allowed using third party components, what
    about HOCs like [react-emotion](https://emotion.sh/)? Not allowed!
7.  Encapsulating imperative abstractions/APIs in a more declarative component
    API wouldn’t be allowed either meaning that the imperative API would be
    littered throughout the lifecycle hooks of our one giant component, leading
    to harder to follow code.

These are the reasons that we write custom components. It allows us to solve
these problems.

I’ve had a question on my AMA for a while:
[Best ways/patterns to split app into components](https://github.com/kentcdodds/ama/issues/399).
And this is my answer: “When you experience one of the problems above, that’s
when you break your component into multiple smaller components. NOT BEFORE.”
Breaking a single component into multiple components is what’s called
“abstraction.” Abstraction is awesome, but
[every abstraction comes with a cost](http://kcd.im/how-to-react), and you have
to be aware of that cost and the benefits before you take the plunge

> [_“Duplication is far cheaper than the wrong abstraction.”_](https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction)_ — _[_Sandi Metz_](https://twitter.com/sandimetz)_._

So I don’t mind if my component’s render method gets really long. Remember that
JSX is just a bunch of JavaScript expressions using the declarative APIs given
by components. Not a whole lot can go wrong with code like that and it’s much
easier to keep that render method as it is than breaking out things into a bunch
of smaller components and start [Prop Drilling](http://kcd.im/prop-drilling)
everywhere.

### Conclusion

So feel free to break up your components into smaller ones, but don’t be afraid
of a growing component until you start experiencing real problems. It’s WAY
easier to maintain it until it needs to be broken up than maintain a pre-mature
abstraction. Good luck!

**Looking for a job? Looking for a developer? Check out my job board:**

[**KCD Job Board**  
\_Find developers and find jobs.\_kcd.im](http://kcd.im/jobs 'http://kcd.im/jobs')[](http://kcd.im/jobs)

**Learn more about React from me**:

- [egghead.io (beginners)](http://kcd.im/beginner-react) — My Beginner’s Guide
  to React absolutely _free_ on [egghead.io](http://egghead.io/).
- [egghead.io (advanced)](http://kcd.im/advanced-react) — My Advanced React
  Component Patterns course available on [egghead.io](http://egghead.io/)!
- [Frontend Masters](https://frontendmasters.com/courses/advanced-react-patterns/) — My
  Advanced React Patterns course in the form of a Workshop.
- [Workshop.me](https://workshop.me/2018-08-react-intro?a=kent) — I’m giving my
  Intro to React workshop in person in Salt Lake City in August!

**Things to not miss**:

- [DevTipsWithKent](http://kcd.im/devtips) — I have a daily livestream where I
  show off one thing that I learned recently or something people have been
  asking me about. The videos are live, brief, unscripted, and full of valuable
  info and tips. [Subscribe to my YouTube channel](http://kcd.im/youtube) and
  click the notification bell to be notified when I’m streaming :)
- [Learn React with Kent C. Dodds](https://www.youtube.com/watch?v=zthIUs2w_c8) — My
  livestream on
  [freeCodeCamp’s YouTube channel](https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ).
