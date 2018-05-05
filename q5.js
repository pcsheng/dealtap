const count = (state) => ({
  count: () => {
    console.log(state.count);
    return state.count;
  }
})

const increment = (state) => ({
  increment: () => state.count ++
})

const decrement = (state) => ({
  decrement: () => state.count --
})

const makeCounter = () => {
  const state = {
    count: 0
  }

  return Object.assign({}, state, count(state), increment(state), decrement(state));
}

let counterInstance = makeCounter();


counterInstance.count();
counterInstance.increment();
counterInstance.count();
counterInstance.increment();
counterInstance.count();
counterInstance.decrement();
counterInstance.count();