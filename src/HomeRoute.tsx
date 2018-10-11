import React from 'react'
import * as fiery from 'fiery'
import { ErrorBox } from './ErrorBox';
import { firebase } from './firebase';


export class HomeRoute extends React.Component{
    render() {
        return (
            <div>
                <h1>screen master</h1>
                <fiery.Auth>
                    {authState => fiery.unwrap(authState,{
                        loading: () => <div>Loading authentication state...</div>,
                        error: (error,retry) => <div><ErrorBox error={error} retry={retry} /></div>,
                        completed: (user) => {
                            if(user){
                                console.log(user)
                                return <div>Hello {user.displayName}</div>
                            }else{
                                return <div>Please log in: <button onClick={logIn}>Log in with GitHub</button></div>
                            }
                        }
                    })}
                </fiery.Auth>
            </div>
        )
    }
}

function logIn() {
    firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider())
}