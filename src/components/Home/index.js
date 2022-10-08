// Write your code here
import Login from './components/Login'
import Logout from './components/Logout'
import Message from './components/Message'

import {Component} from 'react'
class Home extends Component {
  state = {click: true}
  loginButton = () => {
    this.setState(() => ({click: false}))
  }
  logoutButton = () => {
    this.setState(() => ({click: true}))
  }
  render() {
    const {click} = this.state
    return (
      <div>
        <Message />
        {click ? (
          <Login onClick={this.loginButton} />
        ) : (
          <Logout onClick={this.logoutButton} />
        )}
      </div>
    )
  }
}
export default Home
