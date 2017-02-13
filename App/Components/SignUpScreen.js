import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native'; 

import Button from 'react-native-button';

import AppTheme from '../Styles/AppTheme';

var SignUpScreen = React.createClass({
  join: function() {
    console.log("join");
  },

  render: function() {
    return (
      <View>
        <Text style={AppTheme.heading}>Join</Text>
        <TextInput
          autoFocus={true} 
          placeholder="name"
        />
        <TextInput placeholder="username" />
        <TextInput placeholder="password"/>

        <Button
          onPress={this.join}
          style={AppTheme.defaultButton}>Create Account
        </Button>
      </View>
    );
  }
});

export default SignUpScreen;
