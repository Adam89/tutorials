console.log('adam');


// var test = {
//   adamHopkins: 100,
//   tomL: 75
// }

// var house = new Object({ door: 5});
// console.log(house);


// function Person(name, height) { // create inital template
//   this.name = name
//   this.height = height
//   this.getName = function(){
//     return this.name
//   }
// }

// var newPerson = new Person('jose', 8); // create instance of person template
// console.log(newPerson.getName()); // call person instance function


class Es6Person {
  constructor(name, height, age, surname = 'simple') { // default values
    this.name = name
    this.height = height
    this.age = age
    this.surname = surname;
  }
  calculateBirth() { // not part of constructor but part parent scope
    return this.age - 2018;
  }
  setName(name) {
    this.name = name;
  }
}

const personOne = new Es6Person('adam', 8, 45);

const copyPerson = {...personOne};
copyPerson.name = 'newName';
// console.log(personOne.name);
// console.log(copyPerson.name);
// const personTwo = new Es6Person('jose', 9, 29)
// console.log(personOne.calculateBirth(), personOne.name);
// console.log(personTwo.calculateBirth(), personTwo.name, personTwo.surname);

// class Es6PersonTwo extends Es6Person {
//   constructor(name, address) {
//     super(name);
//     this.address = address;
//   }
// }
// const personThree = new Es6PersonTwo('tom', 'arcadia');
// // personThree.setName('hello')
// console.log(personThree);


var house = {
  doors: 3,
  people: 10,
  area: 'stratford',
  fullAddress: {
    st: 'whatever',
    flat: {
      floor: 1,
      windows: 2
    }
  }
}

var secondHouse = {
  ...house,
  fullAddress: {
    ...house.fullAddress,
    flat: {...house.fullAddress.flat }
  },
};
console.log(secondHouse);

secondHouse.fullAddress.flat.windows = 100;

console.log(house);
console.log(secondHouse);

function multiply(a) {
  a.name = 'newName'
  console.log(a)
}


var testObj = {
  name: 'adam'
}
console.log(testObj);
var newTestObj = {...testObj}

multiply(newTestObj);


