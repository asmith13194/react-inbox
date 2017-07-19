import React from 'react'
import Message from './Message'
import Compose from './Compose'

class MessageList extends React.Component {

  render() {
    const { messages, checkboxClick, starClick, messageBodyClick, compose, composeToggle, newSubject, newBody, subject, body, newMessage } = this.props;
    return (
      <div>
        { messages.map(message => <Message
            key={ message.id }
            message={ message }
            checkboxClick={ checkboxClick }
            starClick={ starClick }
            messageBodyClick={ messageBodyClick }/>) }
        <Compose
          compose={ compose }
          composeToggle={ composeToggle }
          messages={ messages }
          subject={ subject }
          body={ body }
          newSubject={ newSubject }
          newBody={ newBody }
          newMessage={ newMessage }/>
      </div>
    )
  }
}

export default MessageList
