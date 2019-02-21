---
slug: "why-semver-ranges-are-literally-the-worst""
title: "Why semver ranges are literally the worst…""
date: "2015-08-10""
author: "Kent C. Dodds"
description: "_The solution to your “it works on my machine” dependency problems._"
keywords: ["NPM","Dependencies","Semver"]
banner: ./images/banner.jpg
bannerCredit: "[TestingJavaScript.com](https://testingjavascript.com) Learn the smart, efficient way to test any JavaScript application."
---

## Why semver ranges are literally the worst…

I’m sure we’ve all experienced it:

> “But it works on my machine!”

> “Well it’s not working on mine or the build server…”

> “What on earth!?”

> “Try \$ rm -rf node_modules && npm i”

> “No! What if it breaks on mine and then I can’t get any work done!?! … Yup…
> Broken on mine now too…” 😭

Most likely someone in the world published a breaking change to one of your
dependencies. So if you’re like me, you now have to go through all of your 100+
npm dependencies and try to figure out which one it was. To make it even more
fun, you also need to figure out how to fix the problem **and fast** because the
release is in an hour…

### How did this happen?

It’s simple. It’s all about how
[Semantic Versioning](https://docs.npmjs.com/getting-started/semantic-versioning)
([more info](http://semver.org/)) and
[version ranges](https://docs.npmjs.com/misc/semver) work. In your package.json
(where you declare your dependencies), you specify versions for your
dependencies. In those version values, you have a bit of control over the range
of version you’ll accept. You can either be super loose (saying you’ll accept
the latest released version), super strict (saying you’ll only accept a specific
version), or anywhere in between. **My goal in this post is to convince you that
you should almost always use specific versions.**

A common way to install packages in your project is to do:

```
npm install lodash --save
```

This will both install the package in your node_modules directory as well as
save this to your package.json file (if present):

```
{
  "dependencies": {
    "lodash": "^3.10.1"
  }
}
```

The real problem is the caret character there. That says: install this version
or anything above 3.10.1 but below 4.0.0.

The cool thing about this is that when the lodash team pushes out updates to
lodash, we get the updates for free! Without having to update anything at all!
How cool is that!?

Well, it’s cool for libraries from the lodash core team. They’re pretty good
about avoiding hiccups in releases. However, there are other project maintainers
that aren’t quite as into semver (they’re in the
[Sentimental Versioning](http://sentimentalversioning.org/) camp). And even more
common is the fact that we’re all humans and can make mistakes when releasing
bug fixes or new features. So when a new version gets pushed out as a patch
change (the last number), if it has a bug in it, things break.

The other thing that makes this bad is by doing this you, your build server, and
your co-worker could be working with completely different node_module versions
installed. Most of the time this isn’t a problem. But whenever it becomes a
problem, it’s always at the worst time.
