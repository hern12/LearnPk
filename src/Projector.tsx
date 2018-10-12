import React, { Component } from 'react'
import TestRenderer from 'react-test-renderer';

export class Projector extends Component<{
    screenId: string
},{
    json: any
}> {
  
  static getDerivedStateFromProps(props: any) {
      return {
          
      }
  }
  

  render() {
    const testRenderer = TestRenderer.create(
        <div>{this.props.children}</div>
    );
    const json = testRenderer.toJSON()    
    testRenderer.unmount()  
    return (
      <div style={{ 
          width: 1920, 
          height: 1080, 
          zoom: 0.25, 
          border: '2px solid #333',
          position: 'relative' }}>
       {toElement(json)}
      </div>
    )
  }
}

function toElement(item: any){
    if(!item || typeof item != 'object'){
        return item
    }
    return React.createElement(
        item.type,
        item.props,
        ...item.children.map(toElement)
    )
}