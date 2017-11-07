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
    };
    this.toggleShowFullClass = this.toggleShowFullClass.bind(this)
    this.handleToggleShowFullClass = this.handleToggleShowFullClass.bind(this)
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
  render() {
    return (
      <div>
        {this.state.hasLoaded ? 
        <div>
          {this.state.classes.map((classData,i)=>{
            console.log(classData)
            return (
              <ClassItem
                key={i}
                handleToggleShowFullClass={()=>this.handleToggleShowFullClass(i)}
                classData={classData}
              />
            )
          })}
        </div>
        :
        <div>Loading...</div>
        }
        {this.state.isFullClassVisible ? 
          <FullClass 
            {...this.state}
            currentClass={this.state.classes[this.state.fullClassIndex]}
            fullClassIndex={this.state.fullClassIndex}
            toggleShowFullClass={this.toggleShowFullClass}
          />
        :
        null
        }
      </div>
    );
  }
}

var classContainerStyle = {
}

export default ClassesContainer;
