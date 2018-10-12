import React, { ReactNode } from 'react'
import * as fiery from 'fiery'
import { ErrorBox } from './ErrorBox';
import { firebase } from './firebase';

export class LoginRequire extends React.Component<{
    children: (user: firebase.User) => ReactNode
}>{
    render(){
        return(
            <fiery.Auth>
                {authState => fiery.unwrap(authState,{
                    loading: () => <div>Loading authentication state...</div>,
                    error: (error,retry) => <div><ErrorBox error={error} retry={retry} /></div>,
                    completed: (user) => {
                        if(user){
                            return this.props.children(user)
                        }else{
                            return <div>Please log in: <button onClick={logIn}>Log in with GitHub</button></div>
                        }
                    }
                })}
            </fiery.Auth>
        )
    }
}


function logIn() {
    firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider())
}