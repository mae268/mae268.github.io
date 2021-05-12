let textInput = document.querySelector('#text-input');
let body = document.querySelector('body');
let paper = document.querySelector('.paper');
let one = document.querySelector('#one');
let pronouns = document.querySelector('#pronouns');


let nameEntered = false;
let pronounsEntered = false;
let explainEntered = false;

let pronounOptions = ['he/him', 'they/them', 'she/her']

let personInfo = {
  'name': '',
}

one.onmouseover = function () {
	one.innerHTML = "Hi, how do you write your name?";
};

one.onmouseout = function () {
  one.innerHTML = "你好, 你怎么写你的名字?";
};


function textEntry(event) {
  if (event.key == 'Enter') {
    if (!nameEntered) {
      personInfo.name = textInput.value;
      nameEntered = true;

      //add their answer
      let answer = document.createElement('div');
      answer.classList.add('answer');
      answer.innerText = textInput.value;
      paper.append(answer);

      // add next step question
      let askPronouns = document.createElement('div');
      askPronouns.classList.add('question');
      askPronouns.innerText = "很高兴认识你，什么是你的代词";
      paper.append(askPronouns);

      askPronouns.onmouseover = function () {
		askPronouns.innerHTML = "It's nice to meet you, what are your pronouns?";
		};

	askPronouns.onmouseout = function () {
  		askPronouns.innerHTML = "很高兴认识你，什么是你的代词?";
	};

	//selectbox options responding with pronoun options

      textInput.value = '';
      // textInput.setAttribute('list', 'gender');
      // textInput.setAttribute.selectBox.options;

     

    } else if (!pronounsEntered) {
      personInfo.pronouns = textInput.value;
      pronounsEntered = true;
      console.log('pronouns were entered')

      let answer = document.createElement('div');
      answer.classList.add('answer');
      answer.innerText = textInput.value;
      paper.append(answer);

      let response = document.createElement('div');
      response.classList.add('question');
      response.innerText = "写中文的时候，用代词:";
      paper.append(response);

      response.onmouseover = function () {
		response.innerHTML = "When writing Chinese, use the pronouns:";
		};

	response.onmouseout = function () {
  		response.innerHTML = "写中文的时候，用代词:";
	};

      textInput.value = '';

      let explain = document.createElement('div');
      explain.classList.add('question');
      explain.innerText = "她/她的";
      paper.append(explain);
    }
   } 
 }

 textInput.addEventListener('keyup', textEntry);
