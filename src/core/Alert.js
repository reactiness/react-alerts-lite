import React, { Component } from 'react';
import { actions } from './actions';
import { defaultStyles } from "../css/defaultAlert"

export class Alert extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      renderChild: true
    }
    this.interval = null;
  }
  
  componentDidMount() {
    this.interval = setTimeout(() => this.setState({renderChild: false}), this.props.timeout);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }   
  
  render() {
    console.log('aleasdr!!t', this.props._store.state.alerts);
    const { content, type, remove, pos } = this.props;
    return (
      <div>
        {this.state.renderChild 
          ? <div style={defaultStyles(pos)}>
            {content}
            {type}
            </div> 
          : remove(this.props.id)}
      </div>
      
    )
  }
}