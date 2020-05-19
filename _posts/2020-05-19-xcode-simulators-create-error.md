---
layout: post
title: "Error when creating simulators in Xcode"
---

I was trying to create additional simulators in Xcode today and it kept failing with a weird error.

From Xcode:

<img class="s t u ii ai" src="/assets/images/2020-05-19-xcode-simulators-create-error/1.png" role="presentation"/>

And even from the terminal:

<img class="s t u ii ai" src="/assets/images/2020-05-19-xcode-simulators-create-error/2.png" role="presentation"/>

After searching for a while, there where some options suggesting I should reinstall Xcode from scratch but I really didn't want to wait until Xcode finished installing again (it always takes a while). So I came across [this post in the Apple Developer Forums](https://forums.developer.apple.com/thread/119290) that suggested killing the `CoreSimulatorService` and everything should work again. Some people there said that worked for them, so I tried it and it worked!

This is the command you should run to fix this error:

```
sudo killall -9 com.apple.CoreSimulator.CoreSimulatorService
```

I never had this issue before but fortunately the solution was simple.
