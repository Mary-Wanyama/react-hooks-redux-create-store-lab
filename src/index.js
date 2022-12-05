export function createStore(reducer) {
  // write your createStore code here

  let state;

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  return { getState, dispatch }
}

export function candyReducer(state = [], action) {
  switch (action.type) {
    case "candies/add":
      return [...state, action.candy];
    default:
      return state;
  }
}

let store = createStore(candyReducer)
store.dispatch({ type: "@@INIT" })

function render() {
  let container = document.getElementById("container");
  if (store.getState()) {
    container.textContent = store.getState().join(" ");
  } else {
    throw new Error("the store's state has not been defined yet");
  }
}