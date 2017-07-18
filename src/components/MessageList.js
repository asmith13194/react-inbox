import React from 'react'
import Message from './Message'

class MessageList extends React.Component {

  render() {
    const { messages, checkboxClick, starClick, messageBodyClick } = this.props;
    // console.log(messages);
    return (
      <div>
      { messages.map(message => <Message
          key={ message.id }
          message={ message }
          checkboxClick={ checkboxClick }
          starClick={ starClick }
          messageBodyClick={ messageBodyClick }/>) }
      </div>
    )
  }
}

export default MessageList
