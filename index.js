var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: /.*\.js\?l=.*/,
  contentScriptFile: data.url("my-script.js")
});