// Feel free to use this code, if you wish, to perform the operations
// themselves.

/*
  Given a left and right operand, and an operation, it actually performs
  the operation requested and returns the result.
*/
function computeValue(operation, leftString, rightString) {
  const left = Number(leftString);
  const right = Number(rightString);
  if (!left) {
    return right;
  }
  if (operation === 'add') {
    return left + right;
  } else if (operation === 'multiply') {
    return left * right;
  } else if (operation === 'subtract') {
    return left - right;
  } else if (operation === 'divide') {
    return left / right;
  } else {
    console.error('Bad operation', operation);
    return NaN;
  }
}
