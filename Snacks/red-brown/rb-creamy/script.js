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
let snacks = [];

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

// look through our airtable data, create elements
function showSnacks() {
  let snackArray = Object.values(snacks);
  
  let creamyDrinks = snackArray.filter(a =>{
   console.log(a)
    if (a.fields){
      return true; 
    } else {
      return false;
    }
  })
  console.log(creamyDrinks);
  let filter2 = creamyDrinks.filter(a =>{
  if (a.fields.type.includes('creamy') &&(a.fields.color.includes('red')||a.fields.color.includes('brown'))) {
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
}
