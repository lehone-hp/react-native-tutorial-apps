import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm.component';

class App extends Component {
    state = {  }

    componentDidMount() {
        firebase.initializeApp(
            {
                apiKey: " AIzaSyC-2f_9m8aRSc8nfKt4N66GSXbxBWT8aqo",
                authDomain: "react-auth-ff906.firebaseapp.com",
                databaseURL: "https://react-auth-ff906.firebaseio.com",
                projectId: "react-auth-ff906",
                storageBucket: "react-auth-ff906.appspot.com",
                messagingSenderId: "538813304884",
              }
        );
    }

    render() {
        return (
            <View>
                <Header headerText={"Authentication"} />
                <LoginForm />
            </View>
        );
    }
}

export default App;