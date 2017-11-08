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
        <div style={fullClassStyle.imgContainer}>
          <img style={fullClassStyle.img} src={img_url}/>
        </div>
        <div style={fullClassStyle.contentContainer}>
          <div>{title} with {instructor}</div>
          <div style={fullClassStyle.timeContainer}>{start_time}-{end_time}</div>
          {this.props.booked[id] ? 
          <div style={fullClassStyle.bookGreenButton}>Booked!</div>
          :
          <div style={fullClassStyle.bookRedButton} onClick={()=>this.props.bookClass(id)}>Click to Book</div>
          }
        </div>
      </div>
    );
  }
}

export default FullClass;

var fullClassStyle = {
  container: {
    zIndex: "1",
    boxShadow: "0px 0px 0px 9999px rgba(0, 0, 0, 0.5)",
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
    fontSize: "36px"
  },
  img: {
    width: "50%",
  },
  imgContainer: {
    textAlign: "center"
  },
  contentContainer: {
    textAlign: "center",
    fontSize: "32px",
  },
  bookGreenButton: {
    width: "160px",
    padding: "20px",
    backgroundColor: "green",
    margin: "0 auto",
  },
  bookRedButton: {
    width: "200px",
    padding: "20px",
    backgroundColor: "red",
    margin: "0 auto",
  },
  timeContainer: {
    margin: "20px 0"
  }
  
}