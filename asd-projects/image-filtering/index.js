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

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here


applyFilterNoBackground(reddify);



  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      let pixel = image[i][j];
        var pixelArray = rgbStringToArray(pixel);
        // This is where I’ll modify the color values later
        filterFunction(pixelArray)
          let updatedPixel = rgbArrayToString(pixelArray);
            image[i][j] = updatedPixel;
        console.log(image[i][j]);
              
    }
  }
}
  


// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0];
    for (var i = 0; i < image.length; i++) {
        for (var j = 0; j < image[i].length; j++) {
            if (image[i][j] !== backgroundColor) {
                var pixelArray = rgbStringToArray(image[i][j]);
                filterFunction(pixelArray);
                var updatedPixel = rgbArrayToString(pixelArray);
                image[i][j] = updatedPixel;
            }
        }
    }
}


// TODO 6: Create the keepInBounds function
function keepInBounds(value){
  if (value < 0) {
    return 0;
  }
  else if (value > 255) {
    return 255;
  }
  else {
    return value;
  }
}

// TODO 4: Create reddify filter function
function reddify(pixel) {
  pixel[RED] = 200;
}
// TODO 7 & 8: Create more filter functions

function decreaseBlue(pixel) {
    var newBlue = pixel[BLUE] - 50;
    pixel[BLUE] = keepInBounds(newBlue);
}
function increaseGreenByBlue(pixelArray) {
  let currentGreen = pixelArray[GREEN];
  let currentBlue = pixelArray[BLUE];
  let newGreen = currentGreen + currentBlue;
  newGreen = keepInBounds(newGreen);
  pixelArray[GREEN] = newGreen;
}
// CHALLENGE code goes below here

