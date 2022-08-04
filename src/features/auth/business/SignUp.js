function reducer(state, action) {
  console.log(action, state.result);
}

let changeResult = { type: "CHANGE_RESULT", result: "1990" };
