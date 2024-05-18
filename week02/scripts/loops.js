myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
//   let favoriteFood1 = document.createElement("li");
//   favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
//   let favoriteFood2 = document.createElement("li");
//   favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
//   let favoriteFood3 = document.createElement("li");
//   favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
//   let favoriteFood4 = document.createElement("li");
//   favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
//   document.querySelector("#favorite-foods").appendChild(favoriteFood1);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood2);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood3);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood4);


// Using .forEach and .map to loop through the array to get what we want.

// // .forEach
//   // First we locate where we will be pushing our list items too
//   const foodsElement = document.querySelector('#favorite-foods');

//   // Now we make a function that when used on the list, will take the food item and make an element header that we will push 
//   // with it to our document as a child of the element we took from above.
//   function createAndAppendFoodItem(food) {
//     let favoriteFood = document.createElement('li');
//     favoriteFood.textContent = food;
//     foodsElement.appendChild(favoriteFood);
//   }

//   // Now all that's left is to call the function on every piece of the array we desire.
//   myInfo.favoriteFoods.forEach(createAndAppendFoodItem);


// // .map
//   function mapFoodItem(food) {
//     let favoriteFood = document.createElement('li');
//     favoriteFood.textContent = food;
//     return favoriteFood;
//   }
//   const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
 
//   foodsElement.innerHTML = foodListElements.join('');

//     //   Simplified further...
//     document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
//     .map((food) => `<li>${food}</li>`)
//     .join("");



//   Outputing the contents of mutliple arrays

    // Grab the source location where we will be pusing our lists. 
    const foodsElement = document.querySelector("#favorite-foods");
    const placesElement = document.querySelector("#places-lived");

    // Creat a function that takes a list and applies a given loop function to it
    function generateListMarkup(list, templateCallback) {
        const htmlList = list.map(templateCallback);
        return htmlList.join("");
      }

    // Create a function that accepts a food item from the food list and returns it wrapped around in tag marks
    function foodsTemplate(food) {
        return `<li>${food}</li>`;
      }

    //  Do the same for the places list but that gets two different attributes from that list
    function placesTemplate(place) {
        return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
      }

    // Now you may assign the InnerHTML values of the locations we wish to add using our created function on each of the lists
    foodsElement.innerHTML = generateListMarkup(
        myInfo.favoriteFoods,
        foodsTemplate
      );
      placesElement.innerHTML = generateListMarkup(
        myInfo.placesLived,
        placesTemplate
      );



// -------------------------------------------------------------
//  Loops and Iteration Assignment

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, , 42, 33, 64, 29, 37, 44]

// for loop iteration through studentReport
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}


// while loop iteration through studentReport
let i = 0
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

// forEach loop iteration through the studentReport
function sortandConsoleLog(listItem) {
    if (listItem < LIMIT) {
        console.log(listItem);
    }
}
studentReport.forEach(sortandConsoleLog);

// or
studentReport.forEach(function (item) {
    if (item < LIMIT) {
      console.log(item);
    }
  });

// for...in loop iteration through the student report
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}