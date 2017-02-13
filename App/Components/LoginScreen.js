import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import ButtonComponent from 'react-native-button-component';

import AppTheme from '../Styles/AppTheme';

var LoginScreen = React.createClass({
  signIn: function() {
    console.log("dfd");
  },

  render: function() {
    return (
      <View>
        <Text style={AppTheme.heading}>Sign In</Text>
        <TextInput autoFocus={true}
          placeholder="username"
        />
        <TextInput placeholder="password"/>
        <Text style={AppTheme.alignCenter}>Forgot your password</Text>
        <ButtonComponent
          onPress={() => {}}
          text="Button"
        >
        </ButtonComponent>
      </View>
    );
  }
});

export default LoginScreen;
