    let setFolder = prompt("몇개의 폴더를 만드시겠나요?");
		let setIcon = prompt("몇개의 아이콘을 만드시겠나요?");
		let desktop = document.querySelector('.desktop') // section 클래스 이용
		let getImage = document.createElement('img'); // img 태그 요소 만듦
		let getIcon = document.createElement('img');
		let setPaths = ['/Picture/folder.png', '/Picture/Tictok.png'];

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
	
	makeIcon(){
		for (let i = 0; i < Number(this.number); i++) {
			
			this.myclass = document.createElement('img'); // img 태그 요소 만듦
			this.myclass.setAttribute('src', setPaths[this.Index]); // img 태그 속성부여
			this.myclass.setAttribute('class', 'getImage'); // img 태그 속성부여	
			desktop.appendChild(this.myclass); // 요소 삽입
		}
	}
};

class Folder {
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(myclass,Index,number){
		this.myclass = myclass;
		this.Index = Index;
		this.number = number;
		
	}
	
	makeFolder(){
		for (let i = 0; i < Number(this.number); i++) {
			
			this.myclass = document.createElement('img'); // img 태그 요소 만듦
			this.myclass.setAttribute('src', setPaths[this.Index]); // img 태그 속성부여
			this.myclass.setAttribute('class', 'getImage'); // img 태그 속성부여	
			desktop.appendChild(this.myclass); // 요소 삽입
		}
	

	}
	
};

const folder = new Folder(getImage,0,setFolder);
const icon = new Icon(getImage,1,setIcon);
folder.makeFolder();
icon.makeIcon();




class Window {
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};

		

		
		// makeFolder(getImage,0,setFolder);
		// makeFolder(getIcon,1,setIcon);


		// function makeFolder(myClass, Index, number) {
		// 	for (let i = 0; i < Number(number); i++) {
		// 		myClass = document.createElement('img'); // img 태그 요소 만듦
		// 		myClass.setAttribute('src', setPaths[Index]); // img 태그 속성부여
		// 		myClass.setAttribute('class', 'getImage'); // img 태그 속성부여	
		// 		desktop.appendChild(myClass); // 요소 삽입
		// 	}
		// }


		// getImage.addEventListener('click',function(){
		// 	let getFolder = document.createElement('div');
		// 	getFolder.setAttribute('class','getFolder')
		// 	desktop.append(getFolder);

		// })


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

