let setFolder = prompt("몇개의 폴더를 만드시겠나요?");
let setIcon = prompt("몇개의 아이콘을 만드시겠나요?");
let desktop = document.querySelector('.desktop') // section 클래스 이용
let getImage = document.createElement('img'); // img 태그 요소 만듦
let getIcon = document.createElement('img'); // icon 태그 요소
let getNew = document.createElement('div'); // 클릭시 폴더 창
let modalArea = document.querySelector('.modalArea');
let setPaths = ['/Picture/folder.png', '/Picture/Tictok.png']; // 사진 경로
let setInputFolder = document.querySelector('.setInputFolder'); // 폴더 추가 요소 선택
let setInputIcon = document.querySelector('.setInputIcon'); // 아이콘 추가 요소 선택
let folderButton = document.querySelector('.folderButton'); // 폴더 추가 버튼
let iconButton = document.querySelector('.iconButton'); // 아이콘 추가 버튼
let menu1 = document.querySelector('.menu1'); // 새로운 탭
let menu2 = document.querySelector('.menu2'); // 새로운 탭
let menu3 = document.querySelector('.menu3'); // 새로운 탭
let menuList = ['./desktop', './menu2', './menu3']; // 메뉴 경로
let folderArr = []; // 폴더 리스트
let newFolder = []; // 새로운 창 리스트



let result;

class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(myclass) {
		this.myclass = myclass;
	}
	openFolder() {
		folderArr.forEach(eachFolder => {			
			eachFolder.addEventListener('click', function () {
				console.log(1)
				this.myclass = document.createElement('div'); // div 태그 만듦
				this.myclass.setAttribute('class', 'newWindow');
				eachFolder.after(this.myclass);
				newFolder.push(this.myclass);
				console.log(newFolder)
				
				
		},{once : true});
		
		
	
		
			
		})
	}


};

class Delete {
	constructor(){
		
	}
	deleteFolder(){
		newFolder.forEach(eachFolder=>{
		eachFolder.addEventListener('click',function(){
			eachFolder.removeChild();
		})
	})
	}
	

}

class Icon {
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(myclass, Index, number) {
		this.myclass = myclass;
		this.Index = Index;
		this.number = number;

	}

	makeIcon() { // 처음 Icon 생성 함수
		
		for (let i = 0; i < Number(this.number); i++) {

			this.myclass = document.createElement('img'); // img 태그 요소 만듦
			this.myclass.setAttribute('src', setPaths[this.Index]); // img 태그 속성부여
			this.myclass.setAttribute('class', 'getIcon'); // img 태그 속성부여	
			desktop.appendChild(this.myclass); // 요소 삽입
		}
	}
	addIcon() { // icon 추가 함수
		iconButton.addEventListener('click', function () {
			for (let i = 0; i < Number(setInputIcon.value); i++) {
				this.myclass = document.createElement('img');
				this.myclass.setAttribute('src', '/Picture/Tictok.png'); // img 태그 속성부여
				this.myclass.setAttribute('class', 'getIcon'); // img 태그 속성부여	
				desktop.appendChild(this.myclass); // 요소 삽입
			}


		}

		)
	}
};

class Folder {
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(myclass, Index, number) {
		this.myclass = myclass;
		this.Index = Index;
		this.number = number;

	}

	makeFolder() { // 처음 folder 생성 함수
		for (let i = 0; i < Number(this.number); i++) {

			this.myclass = document.createElement('img'); // img 태그 요소 만듦
			this.myclass.setAttribute('src', setPaths[this.Index]); // img 태그 속성부여
			this.myclass.setAttribute('class', 'getImage'); // img 태그 속성부여	
			desktop.appendChild(this.myclass); // 요소 삽입
			
			folderArr.push(this.myclass)
			console.log(folderArr)
		}




	}
	addFolder() { // folder 추가 함수
		folderButton.addEventListener('click', function () {
			for (let i = 0; i < Number(setInputFolder.value); i++) {
				this.myclass = document.createElement('img');
				this.myclass.setAttribute('src', '/Picture/folder.png'); // img 태그 속성부여
				this.myclass.setAttribute('class', 'getImage'); // img 태그 속성부여	
				desktop.appendChild(this.myclass); // 요소 삽입
				
			}


		}

		)
	}


};

const folder = new Folder(getImage, 0, setFolder);
const icon = new Icon(getImage, 1, setIcon);
folder.makeFolder();
icon.makeIcon();
folder.addFolder();
icon.addIcon();
const newwindow = new Desktop(getNew)
newwindow.openFolder();
const deletefolder = new Delete()
deletefolder.deleteFolder();






class Window { // 탭 기능
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(name, Index) {  // name => 버튼 클래스 명, Index => html 문서 이름 open에서 경로에 사용
		// window.open('desktop.html','_self')
		this.name = name;
		this.Index = Index;
	}
	setOpen(number) {
		this.name.addEventListener('click', function () {
			window.open(menuList[number] + '.html', '_blank')
		})
	}
};

const openFirstMenu = new Window(menu1)
const openSecondMenu = new Window(menu2)
const openThirdMenu = new Window(menu3)
openFirstMenu.setOpen(0);
openSecondMenu.setOpen(1);
openThirdMenu.setOpen(2);






// let dragging = false;
// let offset = { x: 0, y: 0 };
// desktop.onmousedown = function (e) {
// 	if (e.target === getImage) // 이벤트가 발생한 객체가 getImage이면
// 		dragging = true; // 드래그 허용

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
// console.log(offset)

