// Variable declarations
//// Replacement: let or const
var a = 10, b = 13;
c = 10; // no var, becomes global

// Old for-loop syntaxes

// "for in loop"
//// Replacement: new for loop
for (var i in arr) {
  var item = arr[i];
  console.log(item);
}

// forEach method (still sometimes in use)
//// Replacement: new for loop, and/or map/filter
arr.forEach(function (item) {
  console.log(item);
});


// "C-style for loop"
//// Replacement: new for loop, and/or while loop
for (var i = 0; i < arr.length; i++) {
  var item = arr[i];
  console.log(item);
}

// Function syntaxes
//// Replacement: regular function syntax
var myFunc = function() {
  // ...
}

//// Replacement: regular function syntax
var myFunc = function myFunc() {
  // ...
}


// DOM access
//// Replacement: querySelector and querySelectorAll
var elem = document.getElementById('thing');
var elems = document.getElementsByName('interest-radiooption');
var elems2 = document.getElementsByClassName('cool-paras');
var secondFormOnPage = document.forms[2];



// DOM creation & manipulation
//// Replacement: document.createElement
var a = new Image;
a.src = '/static/myimage.png';
elem.appendChild(a);
document.write('<p>Hello JS world</p>');



// "IFFE"
//// Replacement: modern build systems (next week!)
;(function() {
  var scopedVariable = 10;
  function scopedFunction() {
  }
})();


// Adding to "prototype" of built-in types
//// Replacement: just don't
Array.prototype.sortReverse = function () {
  this.sort();
  this.reverse();
};


// jQuery
//// Replacement: modern frameworks (next week!)
$(document).ready(function () {
  $('button').click(function () {
    var $that = $(this);
    $that.text('Hello world!');
    $that.click(function () {
      $that.text('Hello world 2!');
      $that.ajax('/some/endpoint.json');
    })
  });
});



// XMLHttpRequest aka "AJAX"
//// Replacement: Fetch (will learn later today!)
if (window.XMLHttpRequest) {
    // code for modern browsers
    xmlhttp = new XMLHttpRequest();
 } else {
    // code for old IE browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.addEventListener("progress", updateProgress);
xmlhttp.addEventListener("load", transferComplete);
xmlhttp.addEventListener("error", transferFailed);
xmlhttp.open();

function updateProgress (oEvent) {
  if (oEvent.lengthComputable) {
    var percentComplete = oEvent.loaded / oEvent.total * 100;
  } else {
    // Unable to compute progress information since the total size is unknown
  }
}

function transferComplete(evt) {
  console.log("The transfer is complete.");
}

function transferFailed(evt) {
  console.log("An error occurred.");
}

