import React, { Component } from "react";
import { connect } from "react-redux";
import UserDetails from "../../components/User/UserDetails";

class User extends Component {
  render() {
    return <UserDetails user={this.props.selectedUser} />;
  }
}

const mapStateToProps = ({ users: { selectedUser } }) => ({ selectedUser });

export default connect(mapStateToProps)(User);
