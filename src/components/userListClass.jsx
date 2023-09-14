import { Component } from "react";
import PropTypes from 'prop-types';

class UserListClass extends Component {
  propTypes = {
    users: PropTypes.object.isRequired
  }

  render(){
    const users = this.props.users;
    const userItems = users.map( i => <li key="">{i.name} - {i.age}</li>) ;
    return (<ul>
      {userItems}
    </ul>);
  }
}

export default UserListClass;
