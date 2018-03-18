function withStore(WrappedComponent) {
  return class Alerts extends React.Component {
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
}
