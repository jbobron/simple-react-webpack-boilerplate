import React from 'react';

class ClassItem extends React.Component {
  constructor() {
    super();
  }
  render() {
    let {
      img_url, available_seats, class_date, description, end_time,
      id,instructor, price, start_time, title,
    } = this.props.classData
    return (
      <div style={ClassItemStyle.lineItemContainer} onClick={this.props.handleToggleShowFullClass}>
        <img src={img_url} style={ClassItemStyle.imgStyle}/>
        <div style={ClassItemStyle.textContainer}>
          <div style={ClassItemStyle.text}>{title} with {instructor}</div>
          <div>{start_time}-{end_time}</div>
        </div>
        <div style={ClassItemStyle.priceContainer}>
          {this.props.booked[id] ? 
            <div style={ClassItemStyle.priceNumberBooked}>Booked!</div>
            :
            <div style={ClassItemStyle.priceNumber}>${price}</div>
          }
        </div>
      </div>
    );
  }
}

export default ClassItem;

var ClassItemStyle = {
lineItemContainer: {
  cursor: "pointer",
  display: "block",
  height:"80px",
  width: "100%",
  margin: "0 auto",
  marginTop: "20px",
  maxWidth: "800px",
  boxShadow: "rgba(0, 0, 0, 0.23) 0px 1px 1px 1px, rgba(0, 0, 0, 0.16) 0px 0px 0px 0px",
},
imgStyle: {
  float: "left",
  height: "80px",
  width: "80px",
},
textContainer: {
  float: "left",
  lineHeight: "24px",
  padding: "16px",
  color: "#8f99b0",
  fontFamily: "sans-serif",
},
text: {
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "50vw",
  whiteSpace: "nowrap",
},
priceContainer: {
  float: "right",
  padding: "26px 0px",
  marginRight: "20px",
},
priceNumber: {
  backgroundColor: "#ff6260",
  color: "white",
  borderRadius: "16px",
  padding:"5px 11px",
},
priceNumberBooked:{
  backgroundColor: "green",
  color: "white",
  borderRadius: "16px",
  padding:"5px 11px",
}
  
}