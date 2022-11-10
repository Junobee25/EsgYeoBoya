var thumbBar = document.getElementsByClassName('thumb-bar');
var btn = document.getElementsByClassName('button');
var overlay = document.getElementsByClassName('overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */

var newImage0 = document.createElement('img');
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
thumbBar[0].appendChild(newImage4);

var DisplayList = [];
var displayed_img = document.getElementsByClassName("displayed-img")
for (var i = 0; i < displayed_img.length; i++) {
  DisplayList.push(displayed_img[i]);
};
// console.log('log : ', displayed_img.addEventListener)
// var t = document.getElementById('t')
// console.log('log'+t.addEventListener)



// console.log(document.getElementsByClassName("displayed-img")[1]);

// console.log(displayed_img)
// console.log(DisplayList)

// function clickImg(index) {
//   DisplayList[0].setAttribute('src', 'images/pic' + index + ".jpg");
// }


function OneClick1() {
  DisplayList[0].setAttribute('src', 'images/pic1.jpg')
}
function OneClick2() {
  DisplayList[0].setAttribute('src', 'images/pic2.jpg')
}
function OneClick3() {
  DisplayList[0].setAttribute('src', 'images/pic3.jpg')
}
function OneClick4() {
  DisplayList[0].setAttribute('src', 'images/pic4.jpg')
}
function OneClick5() {
  DisplayList[0].setAttribute('src', 'images/pic5.jpg')
}
//DisplayList[1].classList.toggle('full-image')

DisplayList[1].addEventListener('click', function () { OneClick1() })
DisplayList[2].addEventListener('click', function () { OneClick2() })
DisplayList[3].addEventListener('click', function () { OneClick3() })
DisplayList[4].addEventListener('click', function () { OneClick4() })
DisplayList[5].addEventListener('click', function () { OneClick5() })


/* Wiring up the Darken/Lighten button */
var btn = document.getElementsByClassName("dark")[0];
var div = document.getElementsByClassName("overlay")[0];



btn.addEventListener("click",function(){
  if(btn.classList=="dark"){
    btn.setAttribute("class","light")
    btn.textContent="Lighten"
    div.style.backgroundColor="rgba(0,0,0,0.5)";
  }
  else{
    btn.setAttribute("class","dark")
    btn.textContent="Darken"
    div.style.backgroundColor="rgba(0,0,0,0)";
  }
})

