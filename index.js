function getAverage(arr) {
  let average = 0

  for (let i = 0; i < arr.length; i++) {
    average += arr[i]
  }

  return average / arr.length
}

function getGrade(score) {
  let studentScore = ""
  switch(true) {
    case score === 100: 
      studentScore = "A+"
      break;
    case (score >= 90 && score <= 99):
      studentScore = "A"
      break;
    case (score >= 80 && score <= 89):
      studentScore = "B"
      break;
    case (score >= 70 && score <= 79):
      studentScore = "C"
      break;
    case (score >= 60 && score <= 69): 
      studentScore = "D"
      break;
    case (score >= 0 && score <= 59): 
      studentScore = "F"
      break;
    default:
      console.log("error")
  }

  return studentScore
}

console.log(getGrade(100))


function hasPassingGrade (score) {
  let studentGrade = getGrade(score)

  if (studentGrade === "F") {
    return false 
  } else {
    return true 
  }

}

function studentMsg(arr, score) {
  let hasStudentPassed = hasPassingGrade(score)
  let courseAverage = getAverage(arr)
  let studentGrade = getGrade(score)

  if (hasStudentPassed) {
    return `Class average: ${courseAverage}. Your grade: ${studentGrade}. You passed the course.`
  } else {
    return `Class average: ${courseAverage}. Your grade: ${studentGrade}. You failed the course.`
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37))