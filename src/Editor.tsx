import React, { Component } from 'react'
import { Projector } from './Projector';

type EditorState = {
    counter: number
}

type EditorProps = {
}

export class Editor extends Component<EditorProps,EditorState> {
    state = {
        counter: 0
    }
    
    render() {
        return (
            <div>
                Couter = {this.state.counter}
                <br/>
                <button
                    onClick={ () => this.setState(s => ({counter: s.counter - 1}))}
                > 
                - 
                </button>
                <button
                    onClick={ () => this.setState(s => ({counter: s.counter + 1}))}
                > 
                + 
                </button>
                <Projector screenId='screen1'>
                    <div style=
                    {{ fontSize:'240px', 
                       position:'absolute',
                       top: '20%',
                       left: 0,
                       right: 0,
                       textAlign: 'center'
                    }}>
                        {this.state.counter}
                    </div>
                </Projector>
            </div>
        );
    }
}
