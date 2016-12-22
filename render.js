"use strict";
var page = require('webpage').create(),
    system = require('system'),
    args = system.args,
    address, filename, imageWidth, imageHeight, imageFormat, delay;

if(args.length < 3) {
  console.log('Usage: render.js URL filename [viewPortWidth=(in px),viewPortHeight=(in px),imageFormat=(jpg|png),delay=(in ms)]');
  phantom.exit();
}

address = args[1];
filename = args[2];
imageWidth = args[3];
imageHeight = args[4];
imageFormat = args[5] || 'png';
delay = args[6] || 0;

if(imageWidth || imageHeight) {
  page.viewportSize = { width: imageWidth, height: imageHeight };
}

page.open(address, function start(status) {
  window.setTimeout(function () {
      page.render(filename, {format: imageFormat});
      phantom.exit();
  }, delay);
});
