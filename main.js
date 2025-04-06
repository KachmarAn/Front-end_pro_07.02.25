'use strict';

function Student(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
}

Student.prototype.getAge = function() {
    return new Date().getFullYear() - this.birthYear;
};

Student.prototype.getAverageGrade = function() {
    if (this.grades.length === 0) return 0;
    return this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
};

Student.prototype.present = function() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
        this.attendance[index] = true;
    } else {
        console.log("Всі заняття вже заповнені.");
    }
};

Student.prototype.absent = function() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
        this.attendance[index] = false;
    } else {
        console.log("Всі заняття вже заповнені.");
    }
};

Student.prototype.getAttendanceRate = function() {
    const lessons = this.attendance.filter(item => item !== null);
    if (lessons.length === 0) return 0;
    const present = lessons.filter(item => item === true).length;
    return present / lessons.length;
};

Student.prototype.summary = function() {
    const avgGrade = this.getAverageGrade();
    const attendanceRate = this.getAttendanceRate();
    if (avgGrade > 90 && attendanceRate > 0.9) {
        return "Молодець!";
    } else if (avgGrade > 90 || attendanceRate > 0.9) {
        return "Добре, але можна краще";
    } else {
        return "Редиска!";
    }
};

const studentC = new Student("Василь", "Петренко", 2000);
studentC.grades.push(98, 95, 92);
studentC.present();
studentC.present();
studentC.present();

console.log(studentC.summary()); // Молодець!