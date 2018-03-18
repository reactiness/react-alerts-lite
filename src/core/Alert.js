import React, { Component } from 'react';
// import { actions } from './actions';
import { defaultStyles } from "../css/defaultAlert"


export class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderChild: true
    }
    this.interval = null;
  }
  
  componentDidMount() {
    this.interval = setTimeout(() => this.props.remove(this.props.id), this.props.timeout);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }   
  
  render() {
    const { content, type, pos } = this.props;
    return (<div style={defaultStyles(pos)}>
        {content}
        {type}
    </div>)
  }
}