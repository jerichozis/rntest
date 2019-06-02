import React, { PureComponent } from "react";
import { TouchableOpacity, Text, Image, View, Dimensions } from "react-native";
import styles from "./styles";
import { DateTime } from "luxon";

class UsersListItem extends PureComponent {
  render() {
    const { user, onPress } = this.props;
    return (
      <TouchableOpacity onPress={() => onPress(user)}>
        <View style={styles.item}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={{
                uri: user.picture.medium
              }}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.infoName}>
              {user.name.first} {user.name.last}
            </Text>
            <Text style={styles.infoLocation}>{user.location.state}</Text>
            <Text>{user.description.substr(1, 45)}...</Text>
            <Text style={styles.infoDate}>
              {DateTime.fromISO(user.registered.date).toRelative()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default UsersListItem;
