class Student{
    constructor(name,email){
        this.name = name;
        this.email = email;
        this.courses = []
    }
    enroll(course){
        this.courses.push(course);
        console.log(`${this.name} has enrolled in ${course} `);
    }
    showCourses(){
        console.log(`${this.name}'s enrolled courses: ${this.courses.join("")}`);
    }
}

class Admission{
    constructor(){
        this.student = [];
    }
    enrollStudent(inputObject){
        this.student.push(inputObject);
        console.log(`${inputObject.name} has been enrolled.`);
    }
    assignCourse(inputObject,courseName){
        if (inputObject instanceof Student) {
            inputObject.enroll(courseName);
        } else {
            console.log(`Invalid Student or course information.`);
        }
    }
    showEnrolledStudents(){
        console.log(`Enrolled Students:`);
        this.student.forEach((element)=>{
            console.log(`- ${element.name} (${element.email})`) ;
        })
    }
}

const admissionOffice = new Admission();

const student1 = new Student("Mithun", "mithun@pw.live");
const student2 = new Student("Farman", "farman@pw.live");

admissionOffice.enrollStudent(student1);
admissionOffice.enrollStudent(student2);

admissionOffice.assignCourse(student1, 'Full Stack Web Development');
admissionOffice.assignCourse(student2, 'Data Science Masters');

student1.showCourses();
student2.showCourses();

admissionOffice.showEnrolledStudents();

