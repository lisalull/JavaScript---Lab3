"use strict";

const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-24",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};

// addSubmission(submissions, "Lisa", 100, "2020-10-20");
// console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// deleteSubmissionByIndex(submissions, 0);
// console.log(submissions);

const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((submission) => {
    return submission.name === name;
  });
  array.splice(index, 1);
};

// deleteSubmissionByName(submissions, "Jack");
// console.log(submissions);

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

//example of splice method
//   array.splice(index, 1, {
//     ...array[index],
//     score: score,
//     passed: score >= 60,
//   });
// };

// editSubmission(submissions, 2, 95);
// console.log(submissions);

const findSubmissionByName = (array, name) =>
  array.find((submission) => submission.name === name);

// code below uses a for loop to accomplish same function - more cumbersome than find method

// const findSubmissionByName = (array, name) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].name === name) {
//       return array[i];
//     }
//   }
// };

// console.log(findSubmissionByName(submissions, "Jill"));

const findLowestScore = (array) => {
  let lowest = array[0];
  array.forEach((submission) => {
    if (submission.score < lowest.score) {
      lowest = submission;
    }
  });
  return lowest;
};

// using reduce method for same function
// const findLowestScore = (array) => {
//   return array.reduce((acc, cv) => {
//     return cv.score < acc.score ? cv : acc;
//   });
// };

console.log(findLowestScore(submissions));

const findAverageScore = (array) => {
  let sum = 0;
  for (const item of array) {
    sum += item.score;
  }
  return sum / array.length;
};

//using reduce method for the same function

// const findAverageScore = (array) => {
//   return (
//     array.reduce((acc, cv) => {
//       return acc + cv.score;
//     }, 0) / array.length
//   );
// };

console.log(findAverageScore(submissions));

const filterPassing = (array) => {
  return array.filter((submission) => {
    return submission.passed;
  });
};

console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
  return array.filter((submission) => {
    return submission.score >= 90;
  });
};

console.log(filter90AndAbove(submissions));
