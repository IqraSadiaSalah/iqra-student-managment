#! /usr/bin/env node
// import chalk from 'chalk';
import inquirer from 'inquirer';
class Student {
    name;
    age;
    grade;
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getGrade() {
        return this.grade;
    }
}
class StudentManagementSystem {
    students = [];
    run() {
        this.mainMenu();
    }
    mainMenu() {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'option',
                message: 'What would you like to do?',
                choices: [
                    'Add student',
                    'View all students',
                    'Exit'
                ]
            }
        ])
            .then(answers => {
            switch (answers.option) {
                case 'Add student':
                    this.addStudent();
                    break;
                case 'View all students':
                    this.viewStudents();
                    break;
                case 'Exit':
                    console.log('Goodbye!');
                    break;
            }
        });
    }
    addStudent() {
        inquirer
            .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the student\'s name?'
            },
            {
                type: 'input',
                name: 'age',
                message: 'What is the student\'s age?'
            },
            {
                type: 'input',
                name: 'grade',
                message: 'What is the student\'s grade?'
            }
        ])
            .then(answers => {
            const student = new Student(answers.name, parseInt(answers.age), parseInt(answers.grade));
            this.students.push(student);
            console.log(`${student.getName()} has been added to the system.`);
            this.mainMenu();
        });
    }
    viewStudents() {
        if (this.students.length === 0) {
            console.log('No students have been added to the system.');
        }
        else {
            console.log('Students:');
            this.students.forEach(student => {
                console.log(` - ${student.getName()} (Age: ${student.getAge()}, Grade: ${student.getGrade()})`);
            });
        }
        this.mainMenu();
    }
}
const studentManagementSystem = new StudentManagementSystem();
studentManagementSystem.run();
