import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

import AppTheme from '../Styles/AppTheme';

var LoginScreen = React.createClass({
  signIn: function() {
    console.log("dfd");
  },

  render: function() {
    return (
      <View>
        <TextInput autoFocus={true}
          placeholder="username"
        />
        <TextInput placeholder="password"/>
        <Text style={AppTheme.alignCenter}>Forgot your password</Text>
        <Button onPress={this.signIn} title="Sign In" />
      </View>
    );
  }
});



export default LoginScreen;
