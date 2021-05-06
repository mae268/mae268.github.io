let textInput = document.querySelector('#text-input');
let messageBin = document.querySelector('#message-bin');
let body = document.querySelector('body');


let nameEntered = false;
let pronounsEntered = false;
let explainEntered = false;

let pronounOptions = ['he/him', 'they/them', 'she/her']

let personInfo = {
  'name': '',
  'pronouns': '',
}


function textEntry(event) {
  if (event.key == 'Enter') {
    if (!nameEntered) {
      personInfo.name = textInput.value;
      nameEntered = true;

      // add their answer
      let answer = document.createElement('div');
      answer.classList.add('answer');
      answer.innerText = textInput.value;
      body.append(answer);

      console.log('name was entered');

      // add next step question
      let askPronouns = document.createElement('div');
      askPronouns.classList.add('question');
      askPronouns.innerText = "很高兴认识你，什么是你的代词？";
      body.append(askPronouns);

      textInput.value = '';

    } else if (!pronounsEntered) {
      personInfo.pronouns = textInput.value;
      pronounsEntered = true;
      console.log('pronouns were entered')

      let answer = document.createElement('div');
      answer.classList.add('answer');
      answer.innerText = textInput.value;
      body.append(answer);

      let response = document.createElement('div');
      response.classList.add('question');
      response.innerText = "写中文的时候，用代词：";
      body.append(response);

      textInput.value = '';

      let explain = document.createElement('div');
      explain.classList.add('question');
      explain.innerText = "她/她的";
      body.append(explain);
    }
