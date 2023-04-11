import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import thunk from 'redux-thunk';
import App from './components/App';
import { configureStore } from '@reduxjs/toolkit';
import { movieSlice, searchSlice }  from './store/slices';
import { Provider } from 'react-redux';
 function logger({dispatch,getState}){
  return function(next)
  {
    return function (action)
    {
      console.log("Action_type =",action.type );
      next(action);
    }
  }
 }

const store=configureStore({
  reducer:{
    movies:movieSlice.reducer,
    search:searchSlice.reducer
  },
  middleware: [thunk,logger]
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);


