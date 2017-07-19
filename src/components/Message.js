import React from 'react'
import Label from './Label'

class Message extends React.Component {

  render() {
    const { message, checkboxClick, starClick, messageBodyClick } = this.props;
    return (
      <div>
        <div
          className={`row message ${message.read?'read':'unread'} ${message.clicked?'selected':''}`}>
          <div
            className="col-xs-1">
            <div
              className="row">
              <div
                className="col-xs-2">
                <input
                  type="checkbox"
                  onClick={ ()=>checkboxClick(message) } checked={ message.clicked || false }/>
              </div>
              <div
                className="col-xs-2">
                <i className={`star fa ${message.starred?'fa-star':'fa-star-o'}`} onClick={ ()=>starClick(message) }></i>
              </div>
            </div>
          </div>
          <div
            className="col-xs-11">
            { message.labels.map((label,i) => <Label
            key={ i }
            label={ label }/>) }
            <a
              href="#"
              onClick={ ()=>messageBodyClick(message)}>
              { message.subject }
            </a>
          </div>
        </div>
        {message.showBody?
        <div
          className="row message-body">
          <div
            className="col-xs-11 col-xs-offset-1">
            {message.body}
          </div>
        </div>:null}
      </div>
    )
  }
}

export default Message
