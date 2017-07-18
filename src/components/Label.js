import React from 'react'

class Label extends React.Component {

  render() {
    const { label } = this.props;
    return (
      <span className="label label-warning">{ label }</span>
    )
  }
}

export default Label
