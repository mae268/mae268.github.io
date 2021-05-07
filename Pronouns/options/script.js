let talk = document.querySelector('#talk');
let write = document.querySelector('#write');

talk.onmouseover = function () {
	talk.innerHTML = "talk";
};

write.onmouseover = function () {
	write.innerHTML = "write";
};

talk.onmouseout = function () {
  talk.innerHTML = "说";
};

write.onmouseout = function () {
  write.innerHTML = "写";
};

