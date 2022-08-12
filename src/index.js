const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let codeLists = [];
  let exp = expr.split("");
  let morse = "";
  let decoder = "";

  // collect an array
  for (let i = 0; i < exp.length; i += 10) {
    codeLists.push(exp.slice(i, i + 10));
  }

  // Concatenate each element of the array
  const codeList = codeLists.map((x) => x.join(""));
  // Delete stars
  const noStars = codeList.map((el) => (el === "**********" ? " " : el));
  // Delete zero
  const zeroDelete = codeList.map((x) => Number(x).toString());

  for (let code of zeroDelete) {
    morse = "";
    // Collect morse
    for (let i = 1; i < code.length; i += 2) {
      if (code[i] !== "1" && code[i] !== "0") {
        morse += "*";
      }
      if (code[i] === "1") {
        morse += "-";
      }
      if (code[i] === "0") {
        morse += ".";
      }
    }
    // Delete 'undefined'
    if (morse === "*") {
      decoder += " ";
    } else {
      decoder += MORSE_TABLE[morse];
    }
  }
  return decoder;
}
module.exports = {
  decode,
};
