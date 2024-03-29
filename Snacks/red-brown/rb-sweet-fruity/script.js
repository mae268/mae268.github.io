var Airtable = require("airtable");

var base = new Airtable({ apiKey: "keyTqGagDYWleceBj" }).base(
  "appouvKrS3Hdh931e"
  );

// get our collection base, select all the records
// specify functions that will receive the data
base("png-snacks")
  .select({})
  .eachPage(gotPageOfSnacks, gotAllSnacks);

let snacks = [];

let drinkContainer = document.querySelector('.drink-container');

let snackContainer = document.querySelector('.food-container');

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
  let drinkArray = Object.values(snacks);
  
  let fruityDrinks = drinkArray.filter(b =>{ 
    if (b.fields){
      return true; 
    } else {
      return false;
    }
  })

  let filter1 = fruityDrinks.filter(b =>{   
  if (b.fields.type.includes('fruity') &&(b.fields.color.includes('red')||b.fields.color.includes('brown'))) {
    return true;
  } else {
    return false
  }
})
  filter1.forEach((item,b)=>{
    var drinkImage = document.createElement('img');
    drinkImage.src = item.fields.pics[0].url;
    drinkContainer.append(drinkImage);
  })

  let snackArray = Object.values(snacks);
  
  let sweetSnacks = snackArray.filter(a =>{
    if (a.fields){
      return true; 
    } else {
      return false;
    }
  })
  console.log(sweetSnacks);
  let filter2 = sweetSnacks.filter(a =>{ 
  if (a.fields.type.includes('sweet') &&(a.fields.color.includes('red')||a.fields.color.includes('brown'))) {
    return true;
  } else {
    return false
  }
})
  filter2.forEach((item,i)=>{
    var snackImage = document.createElement('img');
    snackImage.src = item.fields.pics[0].url;
    snackContainer.append(snackImage);
  })
}