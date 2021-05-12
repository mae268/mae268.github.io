let textInput = document.querySelector('#text-input');
let body = document.querySelector('body');
let howtowrite = document.querySelector('howtowrite');
let one = document.querySelector('#q-one');
let gender = document.querySelector('#gender')

let nameEntered = false;
let pronounsEntered = false;
let explainEntered = false;

let pronounOptions = ['he/him', 'they/them', 'she/her']

let personInfo = {
  'name': '',
  'pronouns': '',
}

one.onmouseover = function () {
	one.innerHTML = "Hi, what's your name?";
};

one.onmouseout = function () {
  one.innerHTML = "你好, 你叫什么名字?";
};


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

      askPronouns.onmouseover = function () {
		askPronouns.innerHTML = "What is your gender identity?";
	};

	askPronouns.onmouseout = function () {
  	askPronouns.innerHTML = "什么是你的性别认同?";
	};

      textInput.value = '';
      textInput.setAttribute('list', 'gender');

    } else if (!pronounsEntered) {
      personInfo.pronouns = textInput.value;
      pronounsEntered = true;

      let answer = document.createElement('div');
      answer.classList.add('answer');
      answer.innerText = textInput.value;
      body.append(answer);

      let response = document.createElement('div');
      response.classList.add('question');
      response.innerText = "好, 知道了!";
      body.append(response);

       response.onmouseover = function () {
		response.innerHTML = "Ok, got it!";
		};

		response.onmouseout = function () {
  		response.innerHTML = "好, 知道了!";
		};

      textInput.value = '';

      let explain = document.createElement('div');
      explain.classList.add('question');
      explain.innerText = "我们说中文的时候不需要担心代词, 因为男女的代词发因是一样的";
      body.append(explain);


       explain.onmouseover = function () {
		explain.innerHTML = "When we speak Chinese you don't have to worry about pronouns, because all pronouns sound the same";
		};

		explain.onmouseout = function () {
  		explain.innerHTML = "我们说中文的时候不需要担心代词, 因为男女的代词发因是一样的";
		};

		let understood = document.createElement('button');
		understood.classList.add('understood');
		understood.innerText = "明白了";
		body.append(understood);

		understood.onmouseover = function () {
			understood.innerHTML = "understood"
		};

		understood.onmouseout = function () {
			understood.innerHTML = "明白了";
		};

		let howtowrite = document.createElement('button');
		howtowrite.classList.add('howtowrite');
		howtowrite.innerText = "写怎么办?";
		body.append(howtowrite);

		howtowrite.onmouseover = function () {
			howtowrite.innerHTML = "what about writing?";
		};

		howtowrite.onmouseout = function () {
			howtowrite.innerHTML = "写怎么办?";
		};

		howtowrite.onclick = function() {
		window.location.replace('../write/index.html')
		}	
	}
}
}


  	


textInput.addEventListener('keyup', textEntry);
	