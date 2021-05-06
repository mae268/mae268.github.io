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
      askPronouns.innerText = "什么是你的性别认同?";
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
      response.innerText = "好, 知道了!";
      body.append(response);

      textInput.value = '';

      let explain = document.createElement('div');
      explain.classList.add('question');
      explain.innerText = "我们说中文的时候不需要担心代词, 因为男女的代词发因是一样的";
      body.append(explain);
    }

	}else if (!explainEntered) {
	explainEntered = true;

	let understood = document.createElement('div');
	understood.classList.add('understood');
	understood.innerText = "明白了";
	body.append(understood);

	let howtowrite = document.createElement('div');
	understood.classList.add('howtowrite');
	understood.innerText = "写怎么办？";
	body.append(howtowrite);
	}
}


  	
 
 



textInput.addEventListener('keyup', textEntry);
	