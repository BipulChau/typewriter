const sentence = "hello there from lighthouse labs";
let timeOut = 1000;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timeOut);
  timeOut += 50;
}

setTimeout(() => {
  process.stdout.write('\n');
}, timeOut);



