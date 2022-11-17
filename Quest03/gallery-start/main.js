var thumbBar = document.getElementsByClassName('thumb-bar');
var btn = document.getElementsByClassName('button');
var overlay = document.getElementsByClassName('overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */

for (var i = 1; i <= 5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  newImage.setAttribute('class', 'displayed-img');
  thumbBar[0].appendChild(newImage);

};
/*var newImage0 = document.createElement('img');
newImage0.setAttribute('src', 'images/pic1.jpg');
newImage0.setAttribute('alt', 'eyes');
newImage0.setAttribute('class', "displayed-img");
thumbBar[0].appendChild(newImage0);
var newImage1 = document.createElement('img');
newImage1.setAttribute('src', 'images/pic2.jpg');
newImage1.setAttribute('alt', 'windy');
newImage1.setAttribute('class', "displayed-img");
thumbBar[0].appendChild(newImage1);
var newImage2 = document.createElement('img');
newImage2.setAttribute('src', 'images/pic3.jpg');
newImage2.setAttribute('alt', 'flower');
newImage2.setAttribute('class', 'displayed-img');
thumbBar[0].appendChild(newImage2);
var newImage3 = document.createElement('img');
newImage3.setAttribute('src', 'images/pic4.jpg');
newImage3.setAttribute('alt', 'Old');
newImage3.setAttribute('class', 'displayed-img');
thumbBar[0].appendChild(newImage3);
var newImage4 = document.createElement('img');
newImage4.setAttribute('src', 'images/pic5.jpg');
newImage4.setAttribute('alt', 'Old');
newImage4.setAttribute('class', 'displayed-img');
thumbBar[0].appendChild(newImage4);*/

var DisplayList = [];
var displayed_img = document.getElementsByClassName("displayed-img");
/*for (var i = 0; i < displayed_img.length; i++) {
  DisplayList.push(displayed_img[i]);
};
console.log(displayed_img);
console.log(DisplayList);
console.log('log : ', displayed_img.addEventListener)
var t = document.getElementById('t')
console.log('log'+t.addEventListener)*/



/*console.log(document.getElementsByClassName("displayed-img")[1]);

console.log(displayed_img)
console.log(DisplayList)

function clickImg(index) {
  DisplayList[0].setAttribute('src', 'images/pic' + index + ".jpg");
}


function OneClick1() {
  displayed_img[0].setAttribute('src', 'images/pic1.jpg')
};
function OneClick2() {
  displayed_img[0].setAttribute('src', 'images/pic2.jpg')
};
function OneClick3() {
  displayed_img[0].setAttribute('src', 'images/pic3.jpg')
};
function OneClick4() {
  displayed_img[0].setAttribute('src', 'images/pic4.jpg');
};
function OneClick5() {
  displayed_img[0].setAttribute('src', 'images/pic5.jpg');
};
DisplayList[1].classList.toggle('full-image') */


/*
  for(var i = 1; i<=5; i++){
  displayed_img[i].addEventListener('click', function () {displayed_img[0].setAttribute('src', 'images/pic' + (i) + '.jpg'
  https://blog.outsider.ne.kr/506

  첫번째 예제는 클로저의 생성으로 인한 부작용
원래 의도는 각 버튼마다 alert시에 1,2,3,4,5를 결과로 보여주려는 의도이나 이벤트 핸들러 함수의 i값이 바깥쪽 변수인 i값에 대한 참조를 유지하고 있어, 즉 클로저의 생성으로 인해 최종값인 5를 모두 가리키게 되는 예제입니다.
사실 두번째 예제는 클로저의 부작용을 막기위한 처리로 제시한 예제인데, 이 예제도 클로저가 생성되긴 합니다만 익명함수의 인자로 값을 넘겨버림으로써 바깥쪽 변수인 i에 대한 변수스코프를 끊어버리고, 이벤트 핸들러에서는 익명함수의 인자값에 접근함으로써 의도한 대로 처리가 되게 됩니다.
괄호로 둘러싼 함수표현식 안에서는 바깥쪽 변수에 접근하지 못한다는 것을 여기서 아실 수 있습니다.
}*/

for (var i = 1; i <= 5; i++) {
  (function (m) {displayed_img[m].addEventListener('click', function () {displayed_img[0].setAttribute('src', 'images/pic' + (m) + '.jpg')});})(i);

};



// displayed_img[1].addEventListener('click', function () { displayed_img[0].setAttribute('src', 'images/pic1.jpg') });
// displayed_img[2].addEventListener('click', function () { displayed_img[0].setAttribute('src', 'images/pic2.jpg') });
// displayed_img[3].addEventListener('click', function () { displayed_img[0].setAttribute('src', 'images/pic3.jpg') });
// displayed_img[4].addEventListener('click', function () { displayed_img[0].setAttribute('src', 'images/pic4.jpg'); });
// displayed_img[5].addEventListener('click', function () { displayed_img[0].setAttribute('src', 'images/pic5.jpg'); });






/* Wiring up the Darken/Lighten button */
var btn = document.getElementsByClassName("dark")[0];
var div = document.getElementsByClassName("overlay")[0];



btn.addEventListener("click", function () {
  if (btn.classList == "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    div.style.backgroundColor = "rgba(0,0,0,0.5)";
  }
  else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    div.style.backgroundColor = "rgba(0,0,0,0)";
  }
});

