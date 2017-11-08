import React from 'react';

class FullClass extends React.Component {


  constructor() {
    super();

    this.state = {value: ''};
  }

  render() {
    let {
      img_url, available_seats, class_date, description, end_time,
      id,instructor, price, start_time, title,
    } = this.props.classData
    return (
      <div style={fullClassStyle.container}>
      <div style={fullClassStyle.closeButton} onClick={()=>this.props.toggleShowFullClass(this.props.fullClassIndex)}>
        X
      </div>
      full class
      {title}
      <div onClick={()=>this.props.bookClass(id)}>Book!</div>
      {this.props.booked[id] ? 
      <div className="">booked!</div>
      :
      null
      }
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