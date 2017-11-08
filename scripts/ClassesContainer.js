import React from 'react';

import FullClass from './FullClass';
import ClassItem from './ClassItem';

class ClassesContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      classes: [],
      hasLoaded: false,
      isFullClassVisible: false,
      fullClassIndex: -1,
      booked:{}
    };
    this.toggleShowFullClass = this.toggleShowFullClass.bind(this)
    this.handleToggleShowFullClass = this.handleToggleShowFullClass.bind(this)
    this.bookClass = this.bookClass.bind(this)
  }
  componentDidMount() {
    let URI = "https://zenrez-interview.herokuapp.com/classes"
    fetch(URI)
    .then(resp => resp.json())
    .then(data => {
      this.setState({classes:data.classes, hasLoaded: true})
    })
    
  }
  toggleShowFullClass(i){
    this.setState({isFullClassVisible: !this.state.isFullClassVisible, fullClassIndex:i})
  }
  handleToggleShowFullClass(i){
    !this.state.isFullClassVisible ? this.toggleShowFullClass(i): null
  }
  bookClass(classId){
    let URI = "https://zenrez-interview.herokuapp.com/book-class"
    let body = {
    	"classId" :"1"
    }
    let options = {
      method: "put",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }
    fetch(URI, options)
    .then(resp => {
      if(resp.statusText === "Created"){
        this.state.booked[classId] = true
        this.setState({
          booked: this.state.booked
        })
      }
    })

  }
  render() {
    return (
      <div>
        {this.state.hasLoaded ? 
        <div>
          {this.state.classes.map((classData,i)=>{
            return (
              <ClassItem
                key={i}
                handleToggleShowFullClass={()=>this.handleToggleShowFullClass(i)}
                classData={classData}
                booked={this.state.booked}
              />
            )
          })}
        </div>
        :
        <div style={classContainerStyle.loading}>Loading...</div>
        }
        {this.state.isFullClassVisible ? 
          <FullClass 
            classData={this.state.classes[this.state.fullClassIndex]}
            fullClassIndex={this.state.fullClassIndex}
            toggleShowFullClass={this.toggleShowFullClass}
            bookClass={this.bookClass}
            booked={this.state.booked}
          />
        :
        null
        }
      </div>
    );
  }
}

var classContainerStyle = {
  loading: {
    margin: "0 auto",
    fontSize: "36px",
    textAlign:"center",
    paddingTop: "50px"
  }
}

export default ClassesContainer;
