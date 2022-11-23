let setFolder = prompt("몇개의 폴더를 만드시겠나요?");
let setIcon = prompt("몇개의 아이콘을 만드시겠나요?");
let desktop = document.querySelector('.desktop') // section 클래스 이용
let getImage = document.createElement('img'); // img 태그 요소 만듦
let getIcon = document.createElement('img');
let setPaths = ['/Picture/folder.png', '/Picture/Tictok.png'];
let setInputFolder = document.querySelector('.setInputFolder');
let setInputIcon = document.querySelector('.setInputIcon');
let folderButton = document.querySelector('.folderButton');
let iconButton = document.querySelector('.iconButton');
let menu1 = document.querySelector('.menu1');
let menu2 = document.querySelector('.menu2');
let menu3 = document.querySelector('.menu3');
console.log(menu);
class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	
};

class Icon {
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(myclass,Index,number){
		this.myclass = myclass;
		this.Index = Index;
		this.number = number;
		
	}
	
	makeIcon(){ // 처음 Icon 생성 함수
		for (let i = 0; i < Number(this.number); i++) {
			
			this.myclass = document.createElement('img'); // img 태그 요소 만듦
			this.myclass.setAttribute('src', setPaths[this.Index]); // img 태그 속성부여
			this.myclass.setAttribute('class', 'getImage'); // img 태그 속성부여	
			desktop.appendChild(this.myclass); // 요소 삽입
		}
	}
	addIcon(){ // icon 추가 함수
		iconButton.addEventListener('click',function(){
			for(let i = 0; i<Number(setInputIcon.value); i++){
			this.myclass = document.createElement('img');
			this.myclass.setAttribute('src', '/Picture/Tictok.png'); // img 태그 속성부여
			this.myclass.setAttribute('class', 'getImage'); // img 태그 속성부여	
			desktop.appendChild(this.myclass); // 요소 삽입
			}


		}

	)}
};

class Folder {
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(myclass,Index,number){
		this.myclass = myclass;
		this.Index = Index;
		this.number = number;
		
	}
	
	makeFolder(){ // 처음 folder 생성 함수
		for (let i = 0; i < Number(this.number); i++) {
			
			this.myclass = document.createElement('img'); // img 태그 요소 만듦
			this.myclass.setAttribute('src', setPaths[this.Index]); // img 태그 속성부여
			this.myclass.setAttribute('class', 'getImage'); // img 태그 속성부여	
			desktop.appendChild(this.myclass); // 요소 삽입
		}
	
		
	

	}
	addFolder(){ // folder 추가 함수
		folderButton.addEventListener('click',function(){
			for(let i = 0; i<Number(setInputFolder.value); i++){
			this.myclass = document.createElement('img');
			this.myclass.setAttribute('src', '/Picture/folder.png'); // img 태그 속성부여
			this.myclass.setAttribute('class', 'getImage'); // img 태그 속성부여	
			desktop.appendChild(this.myclass); // 요소 삽입
			}


		}

	)}
	
	
};

const folder = new Folder(getImage,0,setFolder);
const icon = new Icon(getImage,1,setIcon);
folder.makeFolder();
icon.makeIcon();
folder.addFolder();
icon.addIcon();






class Window {
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(name){
	// window.open('desktop.html','_self')
	this.name = name;
	}
	open1(){
		menu1.addEventListener('click',function(){
			window.open('desktop.html','_self')
		})
		
	}
	open2(){
		menu2.addEventListener('click',function(){
			window.open('menu2.html','_self')
		})
	}
	open3(){
		menu3.addEventListener('click',function(){
			window.open('menu3.html','_self')
		})
	}

};

const openWindow = new Window()






		// let dragging = false;
		// let offset = { x: 0, y: 0 };
		// desktop.onmousedown = function (e) {
		// 	// if(e.target === getImage)
		// 	dragging = true;

		// };

		// desktop.onmousemove = function (e) {
		// 	if (!dragging) return;
		// 	getImage.style.left = e.x - offset.x + "px";
		// 	getImage.style.top = e.y - offset.y + "px";

		// };
		// desktop.onmouseup = function (e) {

		// 	dragging = false;


		// };
		// getImage.onmousedown = function (e) {
		// 	offset.x = e.offsetX;
		// 	offset.y = e.offsetY;
		// }

