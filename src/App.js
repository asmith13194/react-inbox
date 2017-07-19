import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'


class App extends Component {
  constructor() {
    super()
    this.state = { messages, all:false, checkedMessages:[], compose:false, subject:'', body:'' }
  }

  render() {
    const { messages, all, compose, subject, body } = this.state
    const { checkboxClick, starClick, selectAll, checkSelected, messageBodyClick, markAsRead, markAsUnread, removeMessage, addLabel, removeLabel, composeToggle, newSubject, newBody, newMessage } = this
    return (
      <div>
        <Toolbar
          messages={ messages }
          all={ all }
          selectAll={ selectAll }
          checkSelected={ checkSelected }
          markAsRead={ markAsRead }
          markAsUnread={ markAsUnread }
          removeMessage={ removeMessage }
          addLabel={ addLabel }
          removeLabel={ removeLabel }
          compose={ compose }
          composeToggle={ composeToggle }/>
        <MessageList
          messages={ messages }
          checkboxClick={ checkboxClick }
          starClick={ starClick }
          messageBodyClick={ messageBodyClick }
          compose={ compose }
          composeToggle={ composeToggle }
          subject={ subject }
          body={ body }
          newSubject={ newSubject }
          newBody={ newBody }
          newMessage={ newMessage }/>
      </div>
    );
  }

  newMessage = (x,y,z) => {
    let newMessage = {
      body:x,
      id:z.length+1,
      labels:[],
      read:false,
      starred:false,
      subject:y
    }
    z = z.concat([newMessage])
    this.setState({messages:z})
  }

  newSubject = (value) => {
    this.setState({subject:value})
  }

  newBody = (value) => {
    this.setState({body:value})
  }

  checkboxClick = (message) => {
    message.clicked=!message.clicked;
    this.setState({ message:this.state.message })
  }

  starClick = (message) => {
    message.starred = !message.starred;
    this.setState({ message:this.state.message })
  }

  selectAll = (messages) => {
    if(this.state.all===true){
      messages.forEach(message=>message.clicked = false);
      let all=false
      this.setState({ messages:this.state.messages, all:all })
    }else {
      messages.forEach(message=>message.clicked = true);
      let all=true
      this.setState({ messages:this.state.messages, all:all })
    }
  }

  checkSelected = (messages) => {
    let filtered = messages.filter(message=>message.clicked===true)
    if (filtered.length===messages.length){
      return "fa fa-check-square-o"
    } else if (filtered.length>0){
      return "fa fa-minus-square-o"
    } else {
      return "fa fa-square-o"
    }
  }

  messageBodyClick = (message) => {
    if (message.showBody===true){
      message.showBody=false
    }else{
      messages.forEach(m=>m.showBody=false)
      message.showBody = !message.showBody
      message.read = true
    }
    this.setState({messages:this.state.messages, message:this.state.message})
  }

  markAsRead = (messages) =>  {
    messages.forEach(message=>{
      if(message.clicked===true){
        message.read=true
      }
    })
    this.setState({messages:this.state.messages})
  }

  markAsUnread = (messages) =>  {
    messages.forEach(message=>{
      if(message.clicked===true){
        message.read=false
      }
    })
    this.setState({messages:this.state.messages})
  }

  removeMessage = (messages) => {
    messages.forEach((message,i)=>{
      if(message.clicked===true){
        delete messages[i]
      }
    })
    this.setState({messages:this.state.messages})
  }

  addLabel = (messages,label) => {
    messages.forEach(message=>{
      if(message.clicked === true && message.labels.indexOf(label) === -1){
        message.labels.push(label)
      }
    })
    this.setState({messages:this.state.messages})
  }

  removeLabel = (messages,label) => {
    messages.forEach(message=>{
      if(message.clicked===true && message.labels.indexOf(label) !== -1){
        message.labels.splice(message.labels.indexOf(label),1)
      }
    })
    this.setState({messages:this.state.messages})
  }

  composeToggle = (compose) => {
    if(compose===true){
      this.setState({compose:false})
    }else {
      this.setState({compose:true})
    }
  }
}

const messages = [
{
  "id": 1,
  "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
  "read": false,
  "starred": true,
  "labels": ["dev", "personal"],
  "body": "Lorem ipsum dolor sit amet, has ferri facilis tincidunt an. Quo sumo tempor in. Ne his vitae appareat efficiantur? Eum ne impetus quaeque, ne usu saepe equidem petentium. Ut feugiat."
},
{
  "id": 2,
  "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
  "read": false,
  "starred": false,
  "selected": true,
  "labels": [],
  "body": "Lorem ipsum dolor sit amet, has ferri facilis tincidunt an. Quo sumo tempor in. Ne his vitae appareat efficiantur? Eum ne impetus quaeque, ne usu saepe equidem petentium. Ut feugiat."
},
{
  "id": 3,
  "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
  "read": false,
  "starred": true,
  "labels": ["dev"],
  "body": "Lorem ipsum dolor sit amet, has ferri facilis tincidunt an. Quo sumo tempor in. Ne his vitae appareat efficiantur? Eum ne impetus quaeque, ne usu saepe equidem petentium. Ut feugiat."
},
{
  "id": 4,
  "subject": "We need to program the primary TCP hard drive!",
  "read": true,
  "starred": false,
  "selected": true,
  "labels": [],
  "body": "Lorem ipsum dolor sit amet, has ferri facilis tincidunt an. Quo sumo tempor in. Ne his vitae appareat efficiantur? Eum ne impetus quaeque, ne usu saepe equidem petentium. Ut feugiat."
},
{
  "id": 5,
  "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
  "read": false,
  "starred": false,
  "labels": ["personal"],
  "body": "Lorem ipsum dolor sit amet, has ferri facilis tincidunt an. Quo sumo tempor in. Ne his vitae appareat efficiantur? Eum ne impetus quaeque, ne usu saepe equidem petentium. Ut feugiat."
},
{
  "id": 6,
  "subject": "We need to back up the wireless GB driver!",
  "read": true,
  "starred": true,
  "labels": [],
  "body": "Lorem ipsum dolor sit amet, has ferri facilis tincidunt an. Quo sumo tempor in. Ne his vitae appareat efficiantur? Eum ne impetus quaeque, ne usu saepe equidem petentium. Ut feugiat."
},
{
  "id": 7,
  "subject": "We need to index the mobile PCI bus!",
  "read": true,
  "starred": false,
  "labels": ["dev", "personal"],
  "body": "Lorem ipsum dolor sit amet, has ferri facilis tincidunt an. Quo sumo tempor in. Ne his vitae appareat efficiantur? Eum ne impetus quaeque, ne usu saepe equidem petentium. Ut feugiat."
},
{
  "id": 8,
  "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
  "read": true,
  "starred": true,
  "labels": [],
  "body": "Lorem ipsum dolor sit amet, has ferri facilis tincidunt an. Quo sumo tempor in. Ne his vitae appareat efficiantur? Eum ne impetus quaeque, ne usu saepe equidem petentium. Ut feugiat."
}
]

export default App;
