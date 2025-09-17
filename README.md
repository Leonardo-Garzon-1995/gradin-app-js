# Student Grade Evaluator

This project is a simple **JavaScript grade evaluation tool** that calculates class averages, assigns letter grades to students based on their scores, and provides feedback on whether the student passed or failed the course.

## 📌 Features

- **Calculate Class Average**: Computes the average score from a list of student grades.
- **Determine Letter Grade**: Converts numeric scores into letter grades (A+, A, B, C, D, F).
- **Pass/Fail Evaluation**: Checks whether a student has passed the course based on their grade.
- **Student Report Message**: Generates a detailed message including:
  - The class average
  - The student’s grade
  - Whether the student passed or failed

## 🛠️ Functions Overview

### `getAverage(arr)`
Calculates the average score from an array of numbers.

```js
getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]); 
// ➝ 71.7
```

### `getGrade(score)`
Returns a letter grade based on the given score.

| Score Range | Grade |
|-------------|-------|
| 100         | A+    |
| 90–99       | A     |
| 80–89       | B     |
| 70–79       | C     |
| 60–69       | D     |
| 0–59        | F     |

```js
getGrade(85); 
// ➝ "B"
```

### `hasPassingGrade(score)`
Checks if the student’s grade is a passing grade (not "F").

```js
hasPassingGrade(55); 
// ➝ false
```

### `studentMsg(arr, score)`
Generates a message for the student including class average, grade, and pass/fail status.

```js
studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37);
// ➝ "Class average: 71.7. Your grade: F. You failed the course."
```

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/student-grade-evaluator.git
cd student-grade-evaluator
```

### 2. Run the program
Make sure you have **Node.js** installed, then run:

```bash
node index.js
```

### 3. Modify and Test
You can modify `index.js` with different inputs to test various scenarios.

## 📂 Project Structure

```
student-grade-evaluator/
│── index.js   # Main script containing all functions
│── README.md  # Project documentation
```

## ✅ Example Output

```
A+
Class average: 71.7. Your grade: F. You failed the course.
```

## 📜 License

This project is licensed under the MIT License. You are free to use, modify, and distribute it as you wish.

---
👨‍💻 Developed as a practice project for learning **JavaScript functions** and **conditional logic**.
