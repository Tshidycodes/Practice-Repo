/*
Every student receives a grade in the inclusive range from 0 to 100 .
Any grade less than 40 is a failing grade.
Sam is a professor at the university and likes to round each student's grade according to these rules:

If the difference between the grade and the next multiple of 5 is less than 3 , round  up to the next multiple of 5.
If the value of grade is less than 38 , no rounding occurs as the result will still be a failing grade.
*/
//if grade is greater than 38 then round off to nearest multiple of 5;
//if grade minus nextMultipleOfFive < 3 THEN round up to next multiple of five

function gradingStudents(...grade) {
  let nextMultipleOfFive = Math.ceil(grade / 5) * 5;
  if (grade >= 38) {
    if (grade - nextMultipleOfFive < 3) {
      return nextMultipleOfFive;
    }
  }
}
console.log(gradingStudents(4, 73, 67, 38, 33));
