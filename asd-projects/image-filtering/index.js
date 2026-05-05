// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}
console.log("applyFilter");

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
function applyFilter(filterFunction) {
  for (var i = 0; 1 = imageArray.length; i++) {
    for (var j = 0; j < image.Array[i].length; j++) {
      var pixel = imageArray[i][j];
      console.log(image[i][j]);
    }
  }
}
  applyFilter(reddify);
filterFunction(pixelArray);
pixels[i] = pixelArray[0];
pixels[i+1] = pixelArray[1];
pixels[i+2] = pixelArray[2];
pixels[i+3] = pixelArray[3];

applyFilter(reddify);
applyFilterNoBackground(decreaseBlue);
applyFilter(increaseGreenByBlue);
applyFilterNoBackground(reddify);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
var pixel = image[i][j];
var pixelArray = rgbStringArray(pixel);
// I'll modify the color values later
var updatedPixel = rgbArrayToString(pixelArray);
image[i][j] = updatedPixel;

function reddify(pixel) {
  pixel[0] = 255;
}
var testArray = [100, 100, 100];
reddify(testArray);
console.log(testArray); // Should show [200, 100, 100]

for (var i = 0; i < pixels.length; i += 4) {
  var pixelArray = pixels[i], pixels[i+1],  pixels[i+2], pixels[i+3];
}

// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(image, filterFunction) {
  var backgroundColor = image[0][0];
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
      if (image[i][j] !== backgroundColor) {
        var pixelArray = rgbStringToArray(image[i][j]);
        var filteredPixelArray = filterFunction(pixelArray);
        image[i][j] = rgbArrayToString(filteredPixelArray);
      }
    }
  }
}

// TODO 6: Create the keepInBounds function
function keepInBounds(num) {
  if (num < 0) {
    return 0;
  } else if (num > 255) {
    return 255;
  } else {
    return num;
  }
}
console.log(keepInBounds(-40));  
console.log(keepInBounds(300)); 
console.log(keepInBounds(150));  
console.log(keepInBounds(0));    
console.log(keepInBounds(255));  

// TODO 4: Create reddify filter function


// TODO 7 & 8: Create more filter functions
 function decreaseBlue(pixel) {
var blueVal = pixel[BLUE];
var safeBlue = keepInBounds(newBlue);
 pixel[BLUE] = safeBlue;
 }
// CHALLENGE code goes below here
function keepInBounds(num) {
  return num > 255 ? 255 : num < 0 ? 0 : num;
}

function applyVintageDream(pixel) {
var newRed = (pixel.getRed() * 0.5) + (128 * 0.5);
var newGreen = (pixel.getGreen() * 0.5) + (128 * 0.5);
var newBlue = (pixel.getBlue() * 0.5) + (128 * 0.5);

newRed = newRed * 2.3;
newGreen = newGreen * 0.9;
newBlue = newBlue * 1.1;

pixel.setRed(keepInBounds(newRed));
pixel.setGreen(keepInBounds(newGreen));
pixel.setBlue(keepInBounds(newBlue));
}
function keepInBounds(colorValue) {
  if (colorValue < 0) {
    if (colorValue > 255) {
      return 255;
    }
  }
  return colorValue;
}
var image = new SimpleImage("image.jpg");
for (var pixel of image.values() {
  applyVintageDream(pixel);
}
print(image);
