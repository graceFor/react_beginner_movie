class Human {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

const nico = new Human("Kim", "Hyunkyung");
console.log(nico);

class Baby extends Human {
  cry() {
    console.log("으앙");
  }
  sayName() {
    console.log(`My name is ${this.name} ${this.lastName}`);
  }
}

const myBaby = new Baby("Kim", "kyung");
console.log(myBaby.cry(), myBaby.sayName());
