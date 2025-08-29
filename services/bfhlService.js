const { buildConcatString } = require("../utils/concatHelper");

const FULL_NAME = "mayank_gera";
const DOB = "01012000"; // apna dob ddmmyyyy me
const EMAIL = "mayank80812@gmail.com";
const ROLL_NUMBER = "VIT1234"; // apna roll number daalna

exports.processInput = (data) => {
  let odd_numbers = [];
  let even_numbers = [];
  let alphabets = [];
  let special_characters = [];
  let sum = 0;

  data.forEach((item) => {
    if (!isNaN(item)) {
      let num = parseInt(item);
      sum += num;
      if (num % 2 === 0) even_numbers.push(item.toString());
      else odd_numbers.push(item.toString());
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
    } else {
      special_characters.push(item);
    }
  });

  return {
    is_success: true,
    user_id: `${FULL_NAME}_${DOB}`,
    email: EMAIL,
    roll_number: ROLL_NUMBER,
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string: buildConcatString(alphabets),
  };
};
