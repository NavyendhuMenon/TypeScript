import * as readlineSync from 'readline-sync';

function calculateGrade(writtenTest: number, labExams: number, assignments: number): number {
  const writtenWeight = 0.7;
  const labWeight = 0.2;
  const assignmentWeight = 0.1;

  const grade = (writtenTest * writtenWeight) + (labExams * labWeight) + (assignments * assignmentWeight);
  return grade;
}

const writtenTest: number = parseFloat(readlineSync.question('Enter the marks scored by the student for Written test: '));
const labExams: number = parseFloat(readlineSync.question('Enter the marks scored by the student for Lab exams: '));
const assignments: number = parseFloat(readlineSync.question('Enter the marks scored by the student for Assignments: '));

const grade: number = calculateGrade(writtenTest, labExams, assignments);

console.log(`Grade of the student is ${grade.toFixed(1)}`);
