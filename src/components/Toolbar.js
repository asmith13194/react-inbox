import React from 'react'

class Toolbar extends React.Component {

  render() {
    const { messages, selectAll, all, checkSelected, markAsRead, markAsUnread } = this.props;
    let unreadCount = messages.filter(message=>message.read===false).length;
    return (
      <div className="row toolbar">
        <div className="col-md-12">
            { unreadCount>0?
              <p className="pull-right">
                <span className="badge badge">{ unreadCount }
                </span>unread messages
              </p>:null }

          <button
            className="btn btn-default"
            onClick={  ()=>selectAll(messages)}>
            <i className={ checkSelected(messages) } ></i>
          </button>

          { checkSelected(messages)==="fa fa-square-o"?
          <button className="btn btn-default" disabled>
            Mark As Read
          </button>:
          <button className="btn btn-default" onClick={ ()=>markAsRead(messages) }>
            Mark As Read
          </button>
          }

          { checkSelected(messages)==="fa fa-square-o"?
          <button className="btn btn-default" disabled>
            Mark As Unread
          </button>:
          <button className="btn btn-default" onClick={ ()=>markAsUnread(messages) }>
            Mark As Unread
          </button>
          }

          <select className="form-control label-select" disabled="disabled">
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select" disabled="disabled">
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default" disabled="disabled">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    )
  }
}

export default Toolbar
