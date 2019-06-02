import React, { Component } from "react";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { FlatList, SafeAreaView } from "react-native";
import UsersListItem from "../../components/Users/UsersListItem";
import {
  selectUser,
  fetchUsers,
  setUsers
} from "../../redux/modules/users/actions";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  _onUserListItemPress = user => {
    this.props.selectUser({ user });
    this.props.navigation.openDrawer();
  };
  _renderItem = ({ item }) => {
    return <UsersListItem onPress={this._onUserListItemPress} user={item} />;
  };
  _handleEndReached = () => {
    this.props.fetchUsers();
  };
  render() {
    const { users } = this.props;
    return (
      <SafeAreaView style={{ backgroundColor: "#F6F5FD" }}>
        <FlatList
          renderItem={this._renderItem}
          style={{ paddingHorizontal: 15 }}
          data={users}
          keyExtractor={(_, index) => index.toString()}
          onEndReached={this._handleEndReached}
          onEndReachedThreshold={0.5}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ users: { users } }) => ({ users });

export default withNavigation(
  connect(
    mapStateToProps,
    {
      selectUser,
      fetchUsers,
      setUsers
    }
  )(UsersList)
);
