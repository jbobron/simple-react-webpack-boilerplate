import React from 'react';

class FullClass extends React.Component {


  constructor() {
    super();

    this.state = {value: ''};
  }

  render() {

    return (
      <div style={fullClassStyle.container}>
      <div style={fullClassStyle.closeButton} onClick={()=>this.props.toggleShowFullClass(this.props.fullClassIndex)}>
        X
      </div>
      full class
      {this.props.currentClass.title}
      </div>
    );
  }
}

export default FullClass;

var fullClassStyle = {
  container: {
    zIndex: "1",
    boxShadow: "0px 0px 0px 9999px rgba(0, 0, 0, 0.5)",
    color: "green",
    position: "fixed",
    margin: "50px",
    padding: "50px",
    top: "0px",
    bottom:"0px",
    left: "0px",
    right: "0px",
    backgroundColor: "white",
  },
  closeButton:{
    position: "absolute",
    right: "0px",
    margin: "20px",
    top: "0px",
    cursor: "pointer",
  }
  
}