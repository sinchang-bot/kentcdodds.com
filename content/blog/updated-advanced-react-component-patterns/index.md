---
slug: "updated-advanced-react-component-patterns""
title: "💯 UPDATED: Advanced React Component Patterns ⚛️""
date: "2018-06-01""
author: "Kent C. Dodds"
description: "_Now featuring the latest React APIs (like context) and entirely new patterns (like state reducer props)._"
keywords: ["JavaScript","React"]
banner: ./images/banner.jpg
bannerCredit: "[Advanced React Component Patterns](http://kcd.im/advanced-react) with [Kent C. Dodds](https://twitter.com/kentcdodds) (art by [Maggie Appleton](https://twitter.com/Mappletons))"
---

#### TL;DR

My highly popular course has been updated (completely re-recorded) and you can
find it here:

> 👇👇👇👇👇👇👇👇👇

> [kcd.im/advanced-react](http://kcd.im/advanced-react)

> 👆👆👆👆👆👆👆👆👆

Here’s the intro:

ALSO! You can
[follow along in codesandbox](https://codesandbox.io/s/github/kentcdodds/advanced-react-patterns-v2/tree/egghead)
right here:

### So what’s new?

This course was originally published in December 2017. A few months after it was
published,
[React 16.3.0 was released](https://reactjs.org/blog/2018/03/29/react-v-16-3.html)
with some new APIs that really improved the usability of React for some of these
patterns.

#### Compound Components + Context API = ❤️

In particular, [the Context API](https://reactjs.org/docs/context.html) makes
compound components much easier to make more flexible:

[**Make Compound React Components Flexible**  
\_Our current compound component implementation is great, but it's limited in that users cannot render the structure they…\_egghead.io](https://egghead.io/lessons/react-make-compound-react-components-flexible-ba049f22 'https://egghead.io/lessons/react-make-compound-react-components-flexible-ba049f22')[](https://egghead.io/lessons/react-make-compound-react-components-flexible-ba049f22)

I also have a few extra lessons to show you how you can validate that your
Context Consumers are used properly:

[**Validate Compound Component Context Consumers**  
\_If someone uses one of our compound components outside the React.createContext `, they will experience a confusing…\_egghead.io](https://egghead.io/lessons/react-validate-compound-component-context-consumers 'https://egghead.io/lessons/react-validate-compound-component-context-consumers')[](https://egghead.io/lessons/react-validate-compound-component-context-consumers)

And here’s another that shows you how to properly use the Context Provider to
avoid unnecessary re-renders of your consumers:

[**Prevent Unnecessary Rerenders of Compound Components using React Context**  
\_Due to the way that React Context Providers work, our current implementation re-renders all our compound component…\_egghead.io](https://egghead.io/lessons/react-prevent-unnecessary-rerenders-of-compound-components-using-react-context 'https://egghead.io/lessons/react-prevent-unnecessary-rerenders-of-compound-components-using-react-context')[](https://egghead.io/lessons/react-prevent-unnecessary-rerenders-of-compound-components-using-react-context)

#### Render Props

The render prop lessons have also been re-recorded, though no new React APIs
were needed to make it remain an awesome pattern 😉 People have told me that
they really appreciate the way I teach render props:

[**Use Render Props with React**  
\_In this lesson, we'll take a step back and re-examine the problem of sharing Component logic by iterating our way to…\_egghead.io](https://egghead.io/lessons/react-use-render-props-with-react-5ce29321 'https://egghead.io/lessons/react-use-render-props-with-react-5ce29321')[](https://egghead.io/lessons/react-use-render-props-with-react-5ce29321)

We also still have the
[prop collections](https://egghead.io/lessons/react-use-prop-collections-with-render-props-ea6ca5c2)
and
[prop getters](https://egghead.io/lessons/react-use-prop-getters-with-render-props-b18543b7)
patterns because those are still very awesome.

#### State Reducers

We have a few lessons that feature a completely **new pattern that wasn’t in the
original course** that I implemented a while ago in
[downshift](https://github.com/paypal/downshift) called
[**the state reducer pattern**](https://blog.kentcdodds.com/the-state-reducer-pattern--b40316cfac57):

[**Implement Component State Reducers**  
\_Often with reusable components, the logic needs to be adjusted to handle various use cases. Rather than filling our…\_egghead.io](https://egghead.io/lessons/react-implement-component-state-reducers 'https://egghead.io/lessons/react-implement-component-state-reducers')[](https://egghead.io/lessons/react-implement-component-state-reducers)

[**Improve the usability of Component State Reducers with state change types**  
\_Users of our component can make custom modifications to the state whenever it changes, but in more complex components…\_egghead.io](https://egghead.io/lessons/react-improve-the-usability-of-component-state-reducers-with-state-change-types 'https://egghead.io/lessons/react-improve-the-usability-of-component-state-reducers-with-state-change-types')[](https://egghead.io/lessons/react-improve-the-usability-of-component-state-reducers-with-state-change-types)

#### Control Props

In the last course we had control props, but I’ve taken it further in this
update to have more lessons about this subject and simplified the examples while
making the implementation more real-world as well so you can focus on learning
how to effectively use the pattern:

[**Make Controlled React Components with Control Props**  
\_While the state reducer pattern gives users total control over how the state is updated internally to a component, it…\_egghead.io](https://egghead.io/lessons/react-make-controlled-react-components-with-control-props-97f6aaa1 'https://egghead.io/lessons/react-make-controlled-react-components-with-control-props-97f6aaa1')[](https://egghead.io/lessons/react-make-controlled-react-components-with-control-props-97f6aaa1)

[**Support Control Props for all state**  
\_Our current implementation of control props only supports controlling the state of a single item of state. Let's make…\_egghead.io](https://egghead.io/lessons/react-support-control-props-for-all-state 'https://egghead.io/lessons/react-support-control-props-for-all-state')[](https://egghead.io/lessons/react-support-control-props-for-all-state)

[**Support a state change handler for all control props**  
\_In our simple situation, having an onToggleChange handler is sufficient because the on state is the only state we have…\_egghead.io](https://egghead.io/lessons/react-support-a-state-change-handler-for-all-control-props 'https://egghead.io/lessons/react-support-a-state-change-handler-for-all-control-props')[](https://egghead.io/lessons/react-support-a-state-change-handler-for-all-control-props)

[**Improve the usability of Control Props with state change types**  
\_Our onStateChange handler is great, but it's limited in capacity because we don't know why certain state is changing…\_egghead.io](https://egghead.io/lessons/react-improve-the-usability-of-control-props-with-state-change-types 'https://egghead.io/lessons/react-improve-the-usability-of-control-props-with-state-change-types')[](https://egghead.io/lessons/react-improve-the-usability-of-control-props-with-state-change-types)

#### The Provider Pattern

Last time, we had quite a few lessons about the provider pattern. With the new
Context API, I was able to show everything in a single lesson because the
Context API is a built-in implementation of the provider pattern! In this lesson
I give a demonstration of what
[Prop Drilling](https://blog.kentcdodds.com/prop-drilling-bb62e02cb691) is and
how the Provider Pattern can simplify things considerably making your React
codebase much more manageable.

[**Implement the Provider Pattern with React Context**  
\_The prop drilling problem can be frustrating for data that changes over time and is needed throughout the application…\_egghead.io](https://egghead.io/lessons/react-implement-the-provider-pattern-with-react-context 'https://egghead.io/lessons/react-implement-the-provider-pattern-with-react-context')[](https://egghead.io/lessons/react-implement-the-provider-pattern-with-react-context)

#### Higher Order Components

React 16.3.0 published a new API called
[React.forwardRef](https://reactjs.org/docs/forwarding-refs.html) that
simplified creating Higher Order Components (HOCs) in a big way. In this lesson
you’ll learn how to use that effectively. While everyone out there is all hyped
up on render props (your’s truly included), higher components do still have a
place and value in the discussion of react patterns. This lesson is built on top
of the provider pattern lesson so you can see how to turn a Context Consumer
into a Higher Order Component.

[**Implement a Higher Order Component**  
\_Sometimes you have some boilerplate for components that would be nice to abstract away slightly with a simple helper…\_egghead.io](https://egghead.io/lessons/react-implement-a-higher-order-component 'https://egghead.io/lessons/react-implement-a-higher-order-component')[](https://egghead.io/lessons/react-implement-a-higher-order-component)

### Now go watch it!

Thanks so much for all the support with all this content. This time around it’s
20 minutes shorter than last time (despite having a few extra lessons for an
entirely new pattern) because React keeps getting better at enabling these
patterns. I hope you love it!

> 👇👇👇👇👇👇👇👇👇

> [kcd.im/advanced-react](http://kcd.im/advanced-react)

> 👆👆👆👆👆👆👆👆👆

Please share this blog post and the course link with your friends!
