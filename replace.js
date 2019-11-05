//Load the library and specify options
const replace = require('replace-in-file');
const options = {
  files: '_codeDist/markup/templates_email/**/*.html',
  from: '<!doctype html>',
  to: '<!--templateType: email isAvailableForNewContent: true--> <!doctype html>' ,
};