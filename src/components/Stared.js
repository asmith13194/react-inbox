import React from 'react'

class Stared extends React.Component {

  render() {
    const { message } = this.props;
    if (message.stared===true){
      return (
       <input type="checkbox" checked="checked"/>
      )
    }else {
      return (
        <input type="checkbox"/>
      )
    }
  }
}

export default Stared
