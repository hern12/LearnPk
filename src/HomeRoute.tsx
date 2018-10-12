import React from 'react'
import { LoginRequire } from './LoginRequire';
import { firebase } from './firebase';
import { Link } from 'react-router-dom';


export class HomeRoute extends React.Component{
    render() {
        return (
            <div>
                <h1>screen master</h1>
                <LoginRequire>
                    { user => <Home/>}
                </LoginRequire>
            </div>
        )
    }
}

class Home extends React.Component{
    render() {
        const currentUser = firebase.auth().currentUser!;
        return(
            <div>
                Hello, {currentUser.email}
                You can now enter the <Link to="/editor">editor</Link>.
                <p><button onClick={() => firebase.auth().signOut()}>Log out</button></p>
            </div>
        )
    }
}

