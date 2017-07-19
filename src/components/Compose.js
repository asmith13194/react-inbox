import React from 'react'

class Compose extends React.Component {
  constructor(props) {
    super(props)
    this.newSubject = this.newSubject.bind(this);
    this.newBody = this.newBody.bind(this);
    this.newMessage = this.newMessage.bind(this);
  }

  newSubject(event) {
    this.props.newSubject(event.target.value)
  }

  newBody(event) {
    this.props.newBody(event.target.value)
  }

  newMessage(event) {
    event.preventDefault()
    this.props.composeToggle(this.props.compose)
    this.props.newMessage(this.props.body,this.props.subject,this.props.messages)
  }

  render() {
    const { messages, checkboxClick, starClick, messageBodyClick, compose, composeToggle, subject, body, newMessage } = this.props;
    return (
      <div>
        { compose?
        <form
          className="form-horizontal well">
          <div
            className="form-group">
            <div
              className="col-sm-8 col-sm-offset-2">
              <h4>Compose Message</h4>
            </div>
          </div>
          <div
            className="form-group">
            <label
              htmlFor="subject"
              className="col-sm-2 control-label">
              Subject
            </label>
            <div
              className="col-sm-8">
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Enter a subject" name="subject"
                onChange={ this.newSubject }/>
            </div>
          </div>
          <div
            className="form-group">
            <label
              htmlFor="body"
              className="col-sm-2 control-label">
              Body
            </label>
            <div
              className="col-sm-8">
              <textarea
                name="body"
                id="body"
                className="form-control"
                onChange={ this.newBody }>
              </textarea>
            </div>
          </div>
          <div
            className="form-group">
            <div
              className="col-sm-8 col-sm-offset-2">
              <input
                type="submit"
                value="Send"
                className="btn btn-primary"
                onClick={ this.newMessage }/>
            </div>
          </div>
        </form>:null}
      </div>
    )
  }
}

export default Compose
