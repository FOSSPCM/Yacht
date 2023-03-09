# Yacht

## Overview

**Yacht** is a public domain dice game that dates back to 1938. It is very similar to Yhatzee(TM) which came out some time later.
This is a version of the game written in JavaScript with a simple frontend made in HTML 4.01 Transitional, and CSS.

[The rules of the game.](https://en.wikipedia.org/wiki/Yacht_(dice_game)#Gameplay)

I wrote this program a couple years ago, but never really finished it. Now, I got the time, so I figured: "Why not finish it up?" To be honest, I don't really like to use JavaScript, as some of the conventions of the language are really strange compared to other languages I use, and also for security reasons. So, when I put together simple website, I try to just stick to HTML and CSS.
That said, I do know it is a fairly popular language these days (The web browser is pretty much the primary application everyone uses regularly), so I figured I would have to learn it eventually.
Also, I wanted to do something graphically instead of text-based, and I collected rolling dice as a kid; so I decided to put together this simple game.

[Software Demo Video]()

## Development Environment

This program was made using Notepad++ and tested on Firefox. I also used the W3C Validation Services to ensure I am using valid HTML 4.01 Transitional and CSS.

The program itself is written in JavaScript, which is a widely used scripting language primarily for websites served to end users. It's essentially a programming langauge for the web, and 98% of websites use it for their clients as of 2022. This is actually kind of scary.
In any case, all major web browsers have a dedicated JavaScript engine. Firefox uses one called SpiderMonkey, for example. However, because JavaScript has been a vector for a ton of malicious behavior, some people filter the scripts they are willing to allow on their machines (often through an extension like NoScript), or they outright disable JavaScript altogether (which can break compatibility with certain websites).
It is because of this, that I prefer not to use JavaScript unless I absolutely have to.

Also included is the font SILKSCREEN, which is an open-source, old-school pixel font made by Jason Kottke. It was popular for web badges on the internet for some time.

By the way, the reason I was using HTML 4.01 Transitional instead of HTML5, is for browser compatibility reasons. **There is no excuse for your browser not to support HTML4.** When it comes to HTML5, there are a couple issues, mainly some browsers support some functions while others do not, and the W3C decided to make Digital Restrictions Management a reccommended standard, which is just so cruel and unfair towards developers and users alike.
So, why didn't I use HTML 4.01 Strict? Because I wanted to use `target _blank`, and I use that when I _don't_ want to use JavaScript to open a link in a new tab. 

## License

Yacht is Free and Open Source software under the terms of the Zero-clause BSD License.

SILKSCREEN is a Free and Open Source font by Jason Kottke and is licensed under the SIL OpenFont License (OFL).

## How to Run

Download the whole directory. Inside the directory, there is an HTML file called `yacht.html`. Open that file in your favorite web browser. I prefer Firefox. A good friend of mine likes Opera GX. It should work in any web browser worth its weight in salt.

## Useful Websites

- [w3schools](https://www.w3schools.com/)
- [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
- [W3C Markup Validation Service](https://validator.w3.org/)
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
- [SLIKSCREEN on Kottke's website](http://www.kottke.org/plus/type/silkscreen/)

## Future Work

- During testing, an interesting warning showed up in Firefox saying something about how InstallTrigger is being depricated and will be removed in the future, and it always points to line 111:16. I have never used InstallTrigger in my life, and I wasn't even using it here. Not sure what is up with that, so I just disabled the warning.
- Maybe make it more idiot-proof involving when the buttons will be disabled?
- If SILKSCREEN isn't present, it should default to the browser's default monospace typeface.
