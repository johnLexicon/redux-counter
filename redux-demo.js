const redux = require('redux');

// Reducer
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1
    };
  }
  if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);

// Subscription 1
const counterSubscriber_1 = () => {
  const latestState = store.getState();
  console.log('Suscriber 1', latestState);
};

// Subscription 2
const counterSubscriber_2 = () => {
  console.log('Subscriber 2', store.getState());
};

// Subscriptions: The subscribers are called whenever the state changes.
store.subscribe(counterSubscriber_1);
store.subscribe(counterSubscriber_2);

//Dispatches
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
