const initialState = {
  selectedKey: 1
};



const TestReducer = (state = initialState, action) => {
    if(action.type != null)
        return {selectedKey:action.type};
    else return state
}

export default TestReducer