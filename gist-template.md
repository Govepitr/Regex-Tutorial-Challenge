# Regex Tutorial 🤓	 | ✉️ Email Matching

(brought to you by: Dan Arbelo, April 9th 2021)

In this tutorial I will be discussing the wonderful world of regular expressions, aka regex. A regex is a set of characters that together make a pattern. They can by used inside of code or algorithms to locate, or even locate and replace if that's what you desire, specific patterns inside of a string. An example of this would be to validate a user's password, identify phone numbers, email addresses, URLs, and so much more.

## Summary :electron:

Moving forward we will be disecting, with consent from the Regex of course, that is being used to locate( as well as verify) an email address. Our volunteer is:</br> 

`\b[a-zA-Z0-9#$_-]+@[a-z0-9]+\.[a-z]{2,3}\b/gi`</br>

## Table of Contents

- [Email Validation Breakdown](#breakdown)
- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Validation JavaScript](#validation-javascript)
- [Author](#author)
- [Validation Image](#validation-image)


## 🐸 Email Validation Breakdown 
The breakdown of our brave regex `\b[a-zA-Z0-9#$_-]+@[a-z0-9]+\.[a-z]{2,3}\b/gi`:

- The Alpha and the Omega(the beginning and the end) of it is of course the `\b`. That portion is called rthe "word boundaries". That states that the expression needs to be matched as a stand-alone word( or string if you're nasty). A good example would be the encolsed parenthesis, without separating spaces, their validation most certainly will fail as it will not match.

- The very 1st group `[a-zA-Z0-9#$_-]+` matches up any upper/lower case letter, any number, as well as the characters `#$_-`. The `-` used between the "a" and "z" provides the requirement of any letter between those two. On that note, the `0-9` means the same regarding numbers. The plus(`+`) sign(AKA a quantifier) after the closing bracket states that any of those characters before it can occur one time or more than one, an example would be `Rowdy_roddy388`. The square brackets are known as a "character class", which I will explain a bit further down. You may wonder how the regex knows to identify both upper and lower case letters, to that I answer with a spotlight on that little `i` flag right at the end of it all. We'll also go into that below.

- After that is the `@`. The `@` is required for emails, nothing fancy needed there.

- The following group is `[a-z0-9]+` which also matches any upper/lower case letter, any number, and let's not forget the lovely `+` flag outside of the brackets. So if they have a username from somewhere like `nada1` it's all good, as the kids say, in the hood.

- Following that would be the `\.`, which is simply the dot before the extension(`com`,`gov`,`ca`, etc) escaped.

- Last, but certainly not least, is the `[a-z]{2,3}` which houses the extension. Which as you may have guessed is a two parter. The first part `[a-z]` you can probably guess what this is for, but let me secure your guess, yes it is the same as the 1st 2 parts. It simply is indicating the characters within the range of `a` to `z` and `A` to `Z`. The `{2,3}`(another quantifier) is a new one for you. This is simply defining the minimum and maximum length for that extension. Some other examples would be `au`(Australia), `edu`(A school!), and `dd`(Germany).

- By their powers combined, they form `Rowdy_roddy388``@``nada1``.``com` or simple `Rowdy_roddy388@nada1.com`!

- I will include an image showing the validation in "action". Not only does the legemndary `Rowdy_roddy388@nada1.com` make an appearance as proof pudding prime, but there are 2 other emails that can be seen passing(all highlighted in blue), plus one that didn't make the cut(It's kinda easy to see which failed). I also provided a JavaScript code that can be used via your browser's dev tool if you want to try it there, I also included a screenshot showing the ones that passed and failed(true = pass, false = fail).

### ⚓	 Anchors

### 📡 Quantifiers

### 🧙‍♀️ Character Classes 🧝

### :puerto_rico: Flags

### 💢 Bracket Expressions 💥

### 💰 Greedy and Lazy Match 🥱

### 🚪 Boundaries

### ☕📜 Validation JavaScript

## 🧙‍♂️ Author
A short section about the author with a link to the author's GitHub profile (replace with your information and a link to your profile)

## Validation Image

![RegexAction](https://user-images.githubusercontent.com/75289900/114236622-bd692380-9936-11eb-976d-f924b44aedb3.JPG)
![RegexTest](https://user-images.githubusercontent.com/75289900/114236623-be01ba00-9936-11eb-8687-c05cfaba3f3d.JPG)