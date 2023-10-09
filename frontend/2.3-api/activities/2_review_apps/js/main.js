// Your code goes here!
// State:
let oper1 = 0;
let oper2 = 0;
let operands = ["+", "-", "*", "/"];
let options = [0, 1, 2];
let r_operand = operands[Math.floor(Math.random() * operands.length)];

//console.log("Time to shine!");

function render() {
  const array = new Uint32Array(2);
  let nums = self.crypto.getRandomValues(array).map((a) => `${a}`.slice(3, 5));
  //console.log(nums);
  r_operand = operands[Math.floor(Math.random() * operands.length)];
  //let r_ansOption = options[Math.floor(Math.random() * options.length)];
  oper1 = nums[0];
  oper2 = nums[1];

  let container = document.querySelector(".math-container");
  let current_button = document.querySelector("#math-check-answer");
  container.innerHTML = "";
  let oper1_span = document.createElement("span");
  oper1_span.id = "math-operand1";
  oper1_span.textContent = oper1;
  let operand_span = document.createElement("span");
  operand_span.id = "math-operation";
  operand_span.textContent = r_operand;
  let oper2_span = document.createElement("span");

  oper2_span.id = "math-operand2";
  oper2_span.textContent = oper2;
  let eq_span = document.createElement("span");
  eq_span.textContent = "=";
  let inp = document.createElement("input");
  inp.id = "math-ans";
  inp.type = "number";
  let submit_button = document.createElement("button");
  submit_button.id = "math-check-answer";
  submit_button.onclick = check_answer;
  submit_button.textContent = "Check Answer";

  container.appendChild(oper1_span);
  container.appendChild(operand_span);
  container.appendChild(oper2_span);
  container.appendChild(eq_span);
  container.appendChild(inp);
  container.appendChild(submit_button);
}

function check_answer() {
  console.log("this running?");
  if (r_operand === "+") {
    answer = oper1 + oper2;
  } else if (r_operand === "-") {
    answer = oper1 - oper2;
  } else if (r_operand === "*") {
    answer = oper1 * oper2;
  } else {
    answer = oper1 / oper2;
    let remainder = oper1 % oper2;
  }
  let container = document.querySelector(".math-container");
  let button = document.querySelector("#math-check-answer");
  let user_ans = document.querySelector("#math-ans");
  let msg = document.createElement("h2");
  if (user_ans && user_ans.value != answer) {
    msg.textContent = "Incorrect! Try again...";
    container.appendChild(msg);
  } else if (user_ans.value) {
    msg.textContent = "Wow!! That's Correct!";
    container.appendChild(msg);
  }
  button.textContent = "Try Again!";
  button.onclick = render;
  user_ans.setAttribute("disabled", true);
}

render();
