import React, { Component } from "react";
import { View, Image, Text, findNodeHandle, StyleSheet } from "react-native";
import { BlurView } from "@react-native-community/blur";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import UserDetailsItem from "./UserDetailsItem";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { viewRef: null };
  }

  imageLoaded = () => {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  };

  render() {
    const { user } = this.props;
    if (!user) {
      return <View />;
    }
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.imageWrapper}>
          <Image
            ref={img => (this.backgroundImage = img)}
            source={{ uri: user.picture.medium }}
            style={styles.blurredView}
            onLoadEnd={this.imageLoaded}
          />
          <BlurView
            style={styles.blurredView}
            viewRef={this.state.viewRef}
            blurType="light"
            blurAmount={10}
          />
          <Image source={{ uri: user.picture.medium }} style={styles.image} />
        </View>
        <UserDetailsItem title={"First name"} content={user.name.first} />
        <UserDetailsItem title={"Last name"} content={user.name.last} />
        <UserDetailsItem title={"Email"} content={user.email} />
        <UserDetailsItem title={"Description"} content={user.description} />
      </ScrollView>
    );
  }
}
