const car = {
  wheels : 4,
  drive(){
    console.log("drive..")
  }
}


const bmw = {
  color : "red",
  // wheels : 4,
  navigation :1,
  // drive(){
  //   console.log("drive..")
  // },
};

const benz = {
  color : "black",
  // wheels : 4,
  // drive(){
  //   console.log("drive..")
  // },
}

const audi = {
  color : "blue",
  // wheels : 4,
  // drive(){
  //   console.log("drive..")
  // },
}

bmw.__proto__ = bmw;
benz.__proto__ = benz;
audi.__proto__ = audi;

console.log(bmw.color);