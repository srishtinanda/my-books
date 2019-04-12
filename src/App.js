import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './application/redux-framework/reducers';
import { Application } from './application';

const App = () => {
    return (
        <Provider store = {createStore(reducers)}> 
           <Application />
       </Provider>
    );
}

export default App;