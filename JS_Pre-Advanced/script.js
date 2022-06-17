function max() {
  let result = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > result) result = arguments[i];
  }
  return result;
}
