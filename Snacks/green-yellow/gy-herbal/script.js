console.log("Snacks");

var Airtable = require("airtable");

var base = new Airtable({ apiKey: "keyTqGagDYWleceBj" }).base(
  "appouvKrS3Hdh931e"
  );

// get our collection base, select all the records
// specify functions that will receive the data
base("png-snacks")
  .select({})
  .eachPage(gotPageOfSnacks, gotAllSnacks);

// an empty array to hold our data
let snacks = [{type: ["herbal"], color: ["yellow", "green"]}];

let drinkContainer = document.querySelector('.drink-container');

// callback function that receives our data
function gotPageOfSnacks(records, fetchNextPage) {
  console.log("gotPageOfSnacks()");
  // add the records from this page to our array
  snacks.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllSnacks(err) {
  console.log("gotAllSnacks()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogSnacks();
  showSnacks();
}

// just loop through the books and console.log them
function consoleLogSnacks() {
  console.log("consoleLogSnacks()");
  snacks.forEach(snack => {
    console.log("Snack:", snack);
  });
}

function showSnacks() {
  console.log(Object.values(snacks));
  console.log(snacks[1].fields.type.includes('herbal'))
  let snackArray = Object.values(snacks);
  
  let herbalDrinks = snackArray.filter(a =>{
   console.log(a)
    if (a.fields){
      console.log('herbal detected')
      return true; 
    } else {
      return false;
    }
  })
  console.log(herbalDrinks);
  let filter2 = herbalDrinks.filter(a =>{
    console.log(a)
  if (a.fields.type.includes('herbal') &&(a.fields.color.includes('yellow')||a.fields.color.includes('green'))) {
    return true;
  } else {
    return false
  }
})
  filter2.forEach((item,i)=>{
    var snackImage = document.createElement('img');
    snackImage.src = item.fields.pics[0].url;
    drinkContainer.append(snackImage);
  })
console.log(filter2)
}



// look through our airtable data, create elements
// function showSnacks() {
//   console.log("showSnacks()");
//   snacks.forEach((snack) => {
//     var snackImage = document.createElement("img");
//     snackImage.src = snack.fields.pics[0].url;
//     document.body.append(snackImage);
//   });
// }

// let snacks = [{type: ["herbal"], color: ["yellow", "green"]};

// let drinkContainer = document.querySelector('.snack-container');

// let herbalDrinks = snacks.filter(function (snack) {
//   if (snack.type.includes('sweet') {
//     return true; 
//     herbalDrinks.forEach((snack))=> {
//       let snackImage = document.createElement("img");
//       snackImage.src = snack.fields.pics[0].url;
//       drinkContainer.append(snackImage);
//   }
// });

// console.log(herbalDrinks)


//mark reference

// let snacks = [{ name: "chips", type: ["creamy", "crunchy"], color: ["yellow"]},{ name: "soda", type: ["fizzy", "sweet"], color: ["red"]}, { name: "choco", type: ["tasy", "sweet"], color: ["yellow"]}];

// let sweetSnacks = snacks.filter(function (snack) {
//   if (snack.type.includes('sweet')) {
//     return true;
//   }
// });
// console.log(sweetSnacks)

// then sweetSnacks.forEach
