import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDxjfia0nY9o6cUGMOsY-rX7N45ttDaTXc',
            authDomain: 'manager-81a18.firebaseapp.com',
            databaseURL: 'https://manager-81a18.firebaseio.com',
            projectId: 'manager-81a18',
            storageBucket: 'manager-81a18.appspot.com',
            messagingSenderId: '1052152877421'
        };
        firebase.initializeApp(config);
    }


    render() {
      return ( 
 	    	<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          	 <LoginForm />
            </Provider>
      );
    }
}

export default App;
