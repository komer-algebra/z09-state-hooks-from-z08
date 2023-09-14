import PropTypes from 'prop-types';

const UserListFunction = ({users, children}) => {
  const userItems = users.map( i => <li key="">{i.name} - {i.age}</li> );
  return (
  <>
    <ul> {userItems}</ul>
    {children}
  </>
  );
}

UserListFunction.propTypes = {
  users: PropTypes.object.isRequired,
  children: PropTypes.string
}

export default UserListFunction;
