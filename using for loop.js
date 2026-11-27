// 1 to 10 on one line
let line = "";
for (let i = 1; i <= 10; i += 1) {
  line += i + " ";
}
console.log(line);   // 1 2 3 4 5 6 7 8 9 10

// Even numbers 2 to 20: only the start (2) and step (+= 2) change
let evens = "";
for (let i = 2; i <= 20; i += 2) {
  evens += i + " ";
}
console.log(evens);  // 2 4 6 8 10 12 14 16 18 20