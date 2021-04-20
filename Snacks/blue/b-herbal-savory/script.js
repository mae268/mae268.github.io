var Airtable = require("airtable");

var base = new Airtable({ apiKey: "keyTqGagDYWleceBj" }).base(
  "appouvKrS3Hdh931e"
  );

// get our collection base, select all the records
// specify functions that will receive the data
base("png-snacks")
  .select({})
  .eachPage(gotPageOfSnacks, gotAllSnacks);

let drinks = [{type: ["herbal"], color: ["yellow", "green"]}];

let snacks = [{type: ["herbal"], color: ["yellow", "green"]}];

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
  
  let herbalDrinks = drinkArray.filter(b =>{ 
    if (b.fields){
      console.log('herbal detected')
      return true; 
    } else {
      return false;
    }
  })

  let filter1 = herbalDrinks.filter(b =>{   
  if (b.fields.type.includes('herbal') &&(b.fields.color.includes('blue'))) {
    return true;
  } else {
    return false
  }
})
  filter1.forEach((item,b)=>{
    var drinkImage = document.createElement('img');
    drinkImage.src = item.fields.pics[0].url;
    drinkContainer.append(drinkImage);
    console.log('what')
  })

  let snackArray = Object.values(snacks);
  
  let savorySnacks = snackArray.filter(a =>{
    if (a.fields){
      console.log('savory detected')
      return true; 
    } else {
      return false;
    }
  })
  console.log(savorySnacks);
  let filter2 = savorySnacks.filter(a =>{ 
  if (a.fields.type.includes('savory') &&(a.fields.color.includes('blue'))) {
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
console.log(filter2)
}