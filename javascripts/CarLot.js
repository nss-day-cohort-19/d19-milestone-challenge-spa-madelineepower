console.log("hi cars");

var CarLot = (function (car) {
  var inventory = [];
        car.loadInventory = function (callback) {

            var inventoryLoader = new XMLHttpRequest();
            inventoryLoader.addEventListener("load", LoadComplete);
            inventoryLoader.addEventListener("error", LoadError);

            function LoadComplete(event){
                console.log("Inventory has loaded");
                inventory = JSON.parse(event.target.responseText);
                console.log("inventory", inventory);
                car.populatePage(inventory);
              };
              function LoadError(event){
              console.log("There was an error whoopsies");
            };
            inventoryLoader.open("GET", "inventory.json");
            inventoryLoader.send();
          };

        car.populatePage = function (data) {
         var outputDiv = document.getElementById("car-cards");
         var carData = data.cars
           carData.forEach(function(item, index) {
             $("#car-cards").append( `<div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                              <div class="thumbnail">
                              <img src="${item.image}" width=100%>
                              <h3>${item.make} ${item.model}</h3>
                              <p>${item.year}</p>
                              <p>${item.price}</p>
                              <p>${item.description}</p>
                            </div>
                            </div>`)

            // newCarDiv.className = "col-md-4 col-sm-4 col-xs-4"
            // newCarDiv.className = "personDiv";
            // newCarDiv.innerHTML = eachCar;
            // outputDiv.appendChild(newCarDiv);
          });
        };

        // car.getInventory = function (inventory) {
        //   return inventory
        // };

return car
})(CarLot || {});


// The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. getInventory).
