import React from 'react'
import { LoginRequire } from './LoginRequire';
import { Editor } from './Editor';

export class EditorRoute extends React.Component{
    render() {
        return (
            <div>
                <h1>Sceen editor </h1> 
                <LoginRequire>
                    {
                        user => (
                            <Editor/>
                        )
                    }
                </LoginRequire>
            </div>
        )
    }
}