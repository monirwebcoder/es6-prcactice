class Parent {
    constructor(){
        this.fatherName = "Monir Hossain";
        this.motherName = "Sumi Akter"
    }
}

class Child extends Parent {
    constructor(CName){
        super();
        this.name = CName;
    }
    
    childDetails(){
       
        return `Father Name: ${this.fatherName} Mother Name: ${this.motherName} Child Name: ${this.name}`;
    }
}

const baby1 =  new Child("Taiba");
const baby2 =  new Child("Saadh");
const baby3 =  new Child("Tuba");

console.log(baby1.childDetails());
console.log(baby2.childDetails());
console.log(baby3.childDetails());
