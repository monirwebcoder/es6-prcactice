class Student {
    constructor(sId,sName){
        this.roll = sId;
        this.name = sName;
        this.school = "N K Home & School"
    }

}

const student1 =  new Student(142, "Yousuf Hossain Saadh");
const student2 = new Student(150, "Youbraj");
console.log(student1,student2);