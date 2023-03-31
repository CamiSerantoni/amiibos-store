const saveStateMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    localStorage.setItem('myApp', JSON.stringify(store.getState()));
    return result;
  };

export default saveStateMiddleware