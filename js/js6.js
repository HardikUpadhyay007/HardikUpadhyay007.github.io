//array methods
const points = [2, 5, 3, 2, 1, 8];
const score = [10, 20, 50, 20];
console.log(score);
console.log(score[0]);
score.push(70);
console.log(score);
console.log(score.length);
for (let i = 0; i < score.length; i++) {
    console.log(score[i]);
}
// points.forEach((value) => {
//   console.log(value);
// });
// points.forEach((value, index) => {
//   console.log(value,index);
// });
// points.forEach((value, index, arr) => {
//   console.log(value, index, arr);
// });
points.forEach((a, b, c) => {
    //   console.log(c[b]);
    console.log(a);
});
