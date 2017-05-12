var CarLot = (function (car2) {

      car2.highlight = function(target) {
        console.log("hey highlight function");

              var carCards = document.getElementsByClassName("border");
              if (carCards.length > 0) {
              for (var i = 0; i < carCards.length; i++ ) {
                $(carCards[i]).removeClass("border");
                  }
              }
              target.classList.add("border");
            }

return car2
})(CarLot || {});

// The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
// A car DOM element that was clicked on.
// A color name of your choice (see behavior requirement 5 above).
