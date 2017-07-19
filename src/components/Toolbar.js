import React from 'react'

class Toolbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 'Apply Label', remove: 'Remove Label' }
    this.addLabel = this.addLabel.bind(this);
    this.removeLabel = this.removeLabel.bind(this);
  }

  addLabel(event) {
    this.props.addLabel(this.props.messages,event.target.value)
  }

  removeLabel(event) {
    this.props.removeLabel(this.props.messages,event.target.value)
  }

  render() {
    const { messages, selectAll, all, checkSelected, markAsRead, markAsUnread, removeMessage, addLabel, removeLabel, compose, composeToggle } = this.props;
    let unreadCount = messages.filter(message=>message.read===false).length;
    return (
      <div
        className="row toolbar">
        <div
          className="col-md-12">{ unreadCount>0?
          <p
            className="pull-right">
            <span
              className="badge badge">
              { unreadCount }</span>unread messages
          </p>:null }

          <a
            className="btn btn-danger"
            onClick={ ()=>composeToggle(compose) }>
            <i className="fa fa-plus"></i>
          </a>

          <button
            className="btn btn-default"
            onClick={  ()=>selectAll(messages)}>
            <i className={ checkSelected(messages) } ></i>
          </button>


            <button
              className="btn btn-default"
              disabled={checkSelected(messages)==="fa fa-square-o"}
              onClick={ ()=>markAsRead(messages) }>
              Mark As Read
            </button>
            <button
              className="btn btn-default"
              disabled={checkSelected(messages)==="fa fa-square-o"}
              onClick={ ()=>markAsUnread(messages) }>
              Mark As Unread
            </button>
            <select
              className="form-control label-select"
              disabled={checkSelected(messages)==="fa fa-square-o"}
              value={ this.state.value }
              onChange={ this.addLabel }>
              <option>Apply label</option>
              <option
                value="dev">dev</option>
              <option
                value="personal">personal</option>
              <option
                value="gschool">gschool</option>
            </select>
            <select
              className="form-control label-select"
              disabled={checkSelected(messages)==="fa fa-square-o"}
              value={ this.state.remove }
              onChange={ this.removeLabel }>
              <option>Remove label</option>
              <option
                value="dev">dev</option>
              <option
                value="personal">personal</option>
              <option
                value="gschool">gschool</option>
            </select>
            <button
              className="btn btn-default"
              disabled={checkSelected(messages)==="fa fa-square-o"}
              onClick={ ()=>removeMessage(messages) }>
              <i className="fa fa-trash-o"></i>
            </button>
        </div>
      </div>
    )
  }
}

export default Toolbar
