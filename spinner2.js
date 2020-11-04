let arr = ["|", "/", "-", "\\", "|"];
let delay = 100;
for (const char of arr) {
  setTimeout(() => {
    process.stdout.write('\r' + char + '     ');
  }, delay += 200);
}

setTimeout(() => {
  console.log();
}, arr.length * 250);
