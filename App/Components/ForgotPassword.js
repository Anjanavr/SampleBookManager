import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

import Button from 'react-native-button';

import AppTheme from '../Styles/AppTheme';

var ForgotPassword = React.createClass({
  signIn: function() {
    console.log("login");
  },

  render: function() {
    return (
      <View>
        <Text style={AppTheme.heading}>Reset your password</Text>
        <TextInput placeholder="password"/>
        <TextInput placeholder="password"/>
        <Button
          onPress={this.signIn}
          style={AppTheme.defaultButton}
        >Confirm</Button>
      </View>
    );
  }
});

export default ForgotPassword;