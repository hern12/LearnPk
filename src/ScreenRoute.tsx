import React from 'react'
import * as fiery from 'fiery'
import { firebase } from './firebase'
import { match } from 'react-router'
import { ErrorBox } from './ErrorBox';

export class ScreenRoute extends React.Component<{
    match: match<{ screenId: string, userId: string}>
}>{
    render() {
        return (
            <div>
                <fiery.Data
                dataRef={firebase.database().ref('screens')
                .child(this.props.match.params.userId)
                .child(this.props.match.params.screenId)}
                >
                    {dataState => fiery.unwrap(dataState,{
                        error: (e, retry) => <ErrorBox error={e} retry={retry}>Cannot load screen data!</ErrorBox>,
                        loading: () => <div>Loading...</div>,
                        completed: (screenData) => ( <pre>{require('util').inspect(screenData)}</pre>) 
                    })}
                </fiery.Data>
            </div>
        )
    }
}