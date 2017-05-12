console.log(CarLot);
CarLot.loadInventory();

function activateEvents(target) {
  console.log("hey activate Events");
      var input = document.getElementById("input-field");
      input.focus();
      input.value = "";
      input.addEventListener("keyup", function(event) {
          console.log("keyup event", event);
          var targetdescription = target.childNodes[9];
          console.log("input", this);
          targetdescription.innerHTML = this.value;
        })
      $("#submit").click(function(event){
            input.value = "";
            input.blur();
            target.classList.remove('border');
        })
};

  // The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application. Name the function activateEvents.
