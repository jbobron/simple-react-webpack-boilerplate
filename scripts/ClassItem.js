import React from 'react';

class ClassItem extends React.Component {


  constructor() {
    super();
  }

  render() {

    return (
      <div style={ClassItemStyle.lineItemContainer} onClick={this.props.handleToggleShowFullClass}>
        <img src={this.props.classData.img_url} style={ClassItemStyle.imgStyle}/>
        <div>
          <div>Title with instructor</div>
          <div>time</div>
        </div>
        <div>
          <div>Price</div>
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
  marginTop: "20px",
},
imgStyle: {
  float: "left",
  height: "80px",
  width: "80px",
}
  
}