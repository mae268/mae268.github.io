let poemFragments = {
  noun: [],
  verb: [],
  adjective: [],
  emotion: [],
};

let Airtable = require('airtable');

console.log(Airtable);

var base = new Airtable({apiKey: 'keyzwwUOzmCKuXxbq'}).base('appIQorANZvYFOqnN');

base('Poem fragments').select({}).eachPage(gotPageOfFragments, gotAllFragments);

function gotPageOfFragments(records, fetchNextPage) {
  records.forEach(function (record) {
    poemFragments.noun.push(record.fields.noun);
    poemFragments.verb.push(record.fields.verb);
    poemFragments.adjective.push(record.fields.adjective);
    poemFragments.emotion.push(record.fields.emotion);
  });
  // fetch any more pages if they exist
  fetchNextPage();
}

function gotAllFragments(err) {
  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading fragments");
    console.error(err);
    return;
  }
}

  function swapText(event) {
    let itemClass = event.target.className;
    let fragmentTypes = ['noun', 'verb', 'adjective', 'emotion'];

    if (fragmentTypes.includes(itemClass)) {
      event.target.innerText = poemFragments[itemClass][Math.floor(Math.random() * poemFragments[itemClass].length)];
      document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 50%, 70%)`;
    }
  }

  let Poem = document.querySelector('#poem');
  Poem.addEventListener('mouseover', swapText);


