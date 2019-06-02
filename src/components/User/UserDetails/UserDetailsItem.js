import React, { Component } from "react";
import { View, Text } from "react-native";
import mainStyles from "./styles";

const styles = mainStyles.DetailsItem;

export default class UserDetailsItem extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    );
  }
}
