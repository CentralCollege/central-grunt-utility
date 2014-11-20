Central Grunt Utility
===================

Helper utility for developing and optimizing components for the Central College website.

Requirements
------------------
* Node.js (http://nodejs.org)

Initial setup
------------------

* Install nodeJS if you haven't already.
* Make sure the grunt CLI is intstalled. If not run `npm install -g grunt-cli`
* Win7 x64 users should run `npm install jpegtran-bin@0.2.0`
* Run `npm install`
* Create the following directories:
	* build
	* css
	* images
		* sprites
	* js

Usage
------------------

Navigate to the directory you cloned this repo to. Run `grunt` at the command line to watch the images, css, and js directories. Adding and removing files will trigger an action that gets exported to the build folder.

Use `grunt clean` to clear out the build directory.

Results
------------------

* Adding javascripts to the js folder will concatenate and minify all the javascripts in the folder and create a production.js file and production.min.js file.
* Adding images (.jpg, .png, .gif) to the images folder will optimize the images and dump them in build/images.
* Adding CSS files to the css folder will result in the files being minified and saved in build/css/production.min.css.

