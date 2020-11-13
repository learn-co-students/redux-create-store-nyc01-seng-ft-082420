function createStore(reducer) {
  let state
  
  
      
      function dispatch(action){
        state = reducer(state, action);
        render();
      };

      function getState(){
        return state
      }
      
      return {
        dispatch,
        getState
      }
    }
      
    
    
    
    function render() {
        let container = document.getElementById('container');
        container.textContent = state.count;
      };
      
      function reducer(state = { count: 0 }, action) {
        switch (action.type) {
          case 'INCREASE_COUNT':
            return { count: state.count + 1 };
       
          default:
            return state;
        }
      }
      
      button.addEventListener('click', function() {
        dispatch({ type: 'INCREASE_COUNT' });
      })
      