function stringCalculator(s) {
  let addition = 0;
  console.log(s);
  if (s.length == 0 || s == null) {
    addition = 0;
    return addition;
  } else {
    for (let i = 0; i < s.size; i++) {
      if ((i = 0)) {
        let firstno = Number(s[i]);
        addition = addition + firstno;
      } else {
        if (s[i] == ",") {
          let no = Number(s[i + 1]);
          addition = addition + no;
        }
      }
    }
  }
  return addition;
}
 let s = "1,2,3,4";
console.log(stringCalculator(s));

