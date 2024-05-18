let scores = [100, 72, 83, 94, 88, 87];

let new_score = scores.length - 1;
// let new_score = scores.length;
// let new_score = scores.lastIndex;
// let new_score = scores.lastIndex();
console.log(new_score);

let accumulator = 0;
let count = 0;
scores.forEach(score => {
  if (score > 87) {
    accumulator += score;
    count ++;
  }
});
if ( count > 0 ) {
  console.log(accumulator/count); 
} else {
  console.log("No scores reported.");
}
