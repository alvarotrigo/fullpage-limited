# fullPage Limited
![preview](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/intro.png)
---

A simple and easy to use library that creates fullscreen scrolling websites (also known as single page websites or onepage sites) and adds landscape sliders inside the sections of the site.

## Usage
As you can see in the example files, you will need to include:
 - The JavaScript file `fullpage.limited.js` (or its minified version `fullpage.min.js`)
 - The css file `fullpage.limited.css`

 **Optionally**, when using `css3:false`, you can add the [easings file](https://github.com/alvarotrigo/fullPage.js/tree/master/vendors/easings.min.js) in case you want to use other easing effects apart from the one included in the library (`easeInOutCubic`).


### Including files
```html
<link rel="stylesheet" type="text/css" href="fullpage.limited.css" />

<!-- This following line is optional. Only necessary if you use the option css3:false and you want to use other easing effects rather than "easeInOutCubic". -->
<script src="vendors/easings.min.js"></script>

<script type="text/javascript" src="fullpage.limited.js"></script>
```

### Required HTML structure
Start your HTML document with the compulsory [HTML DOCTYPE declaration](https://www.corelangs.com/html/introduction/doctype.html) on the 1st line of your HTML code. You might have troubles with sections heights otherwise. The examples provided use HTML 5 doctype `<!DOCTYPE html>`.

Each section will be defined with an element containing the `section` class.
The active section by default will be the first section, which is taken as the home page.

Sections should be placed inside a wrapper (`<div id="fullpage">` in this case). The wrapper can not be the `body` element.

```html
<div id="fullpage">
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
</div>
```

If you want to define a different starting point rather than the first section or the first slide of a section, just add the class `active` to the section and slide you want to load first.

```html
<div class="section active">Some section</div>
```

In order to create a landscape slider within a section, each slide will be defined by default with an element containing the `slide` class:

```html
<div class="section">
	<div class="slide"> Slide 1 </div>
	<div class="slide"> Slide 2 </div>
	<div class="slide"> Slide 3 </div>
	<div class="slide"> Slide 4 </div>
</div>
```

### Initialization

#### Initialization with Vanilla Javascript
All you need to do is call fullPage.js before the closing `</body>` tag.

```javascript
new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});
```

#### Initialization with jQuery
You can use fullpage.js as a jQuery plugin if you want to!

```javascript
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	// Example of how to use fullpage.js methods
	$.fn.fullpage.setAllowScrolling(false);
});
```


# Reporting issues
1. Please, look for your issue before asking using the github issues search.
2. Make sure you use the latest fullpage.js version. No support is provided for older versions.
3. Use the [the Github Issues forum](https://github.com/alvarotrigo/fullpage-limited/issues) to create issues.
4. **An isolated reproduction of the issue will be required.** Make use of [jsfiddle](https://jsfiddle.net/alvarotrigo/ea17skjr/) or [codepen](https://codepen.io/alvarotrigo/pen/qqabrp) for it if possible.

# Contributing to fullpage.js
Please see [Contributing to fullpage.js](https://github.com/alvarotrigo/fullPage.js/wiki/Contributing-to-fullpage.js)

# Changelog
To see the list of recent changes, see [Releases section](https://github.com/alvarotrigo/fullPage.js/releases).

# Build tasks
Want to build fullpage.js distribution files? Please see [Build Tasks](https://github.com/alvarotrigo/fullPage.js/wiki/Build-tasks)
