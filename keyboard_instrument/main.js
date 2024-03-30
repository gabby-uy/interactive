
var addedImages = []; // Array to store references to all added images


/*ADD A VALENTINE WITH KEY PRESS*/
document.body.onkeydown = function(keypress_event) {
  var key = keypress_event.key;

  // Remove the last added image if the backspace key is pressed
  if (key == "Backspace" && addedImages.length > 0) {
    var lastImg = addedImages.pop(); // Remove the last element from the array
    document.body.removeChild(lastImg); // Remove the last added image from the document
    return; // Exit the function to prevent adding a new image
  }

  // Create a new image element
  var newImg = document.createElement('img');
  newImg.classList.add("added-image"); // Add a class to the new image
  
  if (key == "q") {
    newImg.src = "png/valentine_1.png"; // Set the src attribute for the image element
  } else if (key == "w") {
    newImg.src = "png/valentine_2.png"; // Set the src attribute for the image element
  } else if (key == "e") {
    newImg.src = "png/valentine_3.png"; // Set the src attribute for the image element
  } else if (key == "r") {
    newImg.src = "png/valentine_4.png"; // Set the src attribute for the image element
  } else if (key == "t") {
    newImg.src = "png/valentine_5.png"; // Set the src attribute for the image element
  } else if (key == "y") {
    newImg.src = "png/valentine_6.png"; // Set the src attribute for the image element
  } else if (key == "u") {
    newImg.src = "png/valentine_7.png"; // Set the src attribute for the image element
  } else if (key == "i") {
    newImg.src = "png/valentine_8.png"; // Set the src attribute for the image element
  } else if (key == "o") {
    newImg.src = "png/valentine_9.png"; // Set the src attribute for the image element
  } else if (key == "p") {
    newImg.src = "png/valentine_10.png"; // Set the src attribute for the image element
  } else if (key == "a") {
    newImg.src = "png/valentine_11.png"; // Set the src attribute for the image element
  } else if (key == "s") {
    newImg.src = "png/valentine_12.png"; // Set the src attribute for the image element
  } else if (key == "d") {
    newImg.src = "png/valentine_13.png"; // Set the src attribute for the image element
  } else if (key == "f") {
    newImg.src = "png/valentine_14.png"; // Set the src attribute for the image element
  } else if (key == "g") {
    newImg.src = "png/valentine_15.png"; // Set the src attribute for the image element
  } else if (key == "h") {
    newImg.src = "png/valentine_16.png"; // Set the src attribute for the image element
  } else if (key == "j") {
    newImg.src = "png/valentine_17.png"; // Set the src attribute for the image element
  } else if (key == "k") {
    newImg.src = "png/valentine_18.png"; // Set the src attribute for the image element
  } else if (key == "l") {
    newImg.src = "png/valentine_19.png"; // Set the src attribute for the image element
  } else if (key == "z") {
    newImg.src = "png/valentine_20.png"; // Set the src attribute for the image element
  } else if (key == "x") {
    newImg.src = "png/valentine_21.png"; // Set the src attribute for the image element
  } else if (key == "c") {
    newImg.src = "png/valentine_22.png"; // Set the src attribute for the image element
  } else if (key == "v") {
    newImg.src = "png/valentine_23.png"; // Set the src attribute for the image element
  } else if (key == "b") {
    newImg.src = "png/valentine_24.png"; // Set the src attribute for the image element
  } else if (key == "n") {
    newImg.src = "png/valentine_25.png"; // Set the src attribute for the image element
  } else if (key == "m") {
    newImg.src = "png/valentine_26.png"; // Set the src attribute for the image element
  } else if (key == " ") {
    newImg.src = "png/valentine_27.png"; // Set the src attribute for the image element
  } else if (key == "1") {
    newImg.src = "png/valentine_28.png"; // Set the src attribute for the image element
  } else if (key == "2") {
    newImg.src = "png/valentine_29.png"; // Set the src attribute for the image element
  } else if (key == "3") {
    newImg.src = "png/valentine_30.png"; // Set the src attribute for the image element
  } else if (key == "1") {
    newImg.src = "png/valentine_31.png"; // Set the src attribute for the image element
  } else if (key == "2") {
    newImg.src = "png/valentine_32.png"; // Set the src attribute for the image element
  } else if (key == "3") {
    newImg.src = "png/valentine_33.png"; // Set the src attribute for the image element
  } else if (key == "4") {
    newImg.src = "png/valentine_34.png"; // Set the src attribute for the image element
  } else if (key == "5") {
    newImg.src = "png/valentine_35.png"; // Set the src attribute for the image element
  } else if (key == "6") {
    newImg.src = "png/valentine_36.png"; // Set the src attribute for the image element
  } else if (key == "7") {
    newImg.src = "png/valentine_37.png"; // Set the src attribute for the image element
  } else if (key == "8") {
    newImg.src = "png/valentine_38.png"; // Set the src attribute for the image element
  } else if (key == "9") {
    newImg.src = "png/valentine_39.png"; // Set the src attribute for the image element
  } else if (key == "0") {
    newImg.src = "png/valentine_40.png"; // Set the src attribute for the image element
  }

  
  document.body.appendChild(newImg); // Append the image element to the body
  addedImages.push(newImg); // Add the new image reference to the array
};
   