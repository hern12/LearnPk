import React from 'react'

export class ErrorBox extends React.Component<{
     retry: () => void
}>{
    render() {
        return (
            <div style={{border: '1px solid #c77',background: '#fee',padding: '1em'}}>
                <strong>Error!</strong> {this.props.children}
                {!!this.props.retry && (<button onClick={this.props.retry}>Retry</button>)}
            </div>
        )
    }
}