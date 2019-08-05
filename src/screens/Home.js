import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Icon } from 'react-native-elements'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createMaterialBottomTabNavigator({
  Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: "Home",
            tabBarIcon: () => (
                <Icon
                    name="home"
                    type='material'
                    size={20}
                    color='#fff'
                />
            )
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            title: "Profile",
            tabBarIcon: () => (
                <Icon
                    name="user"
                    type='font-awesome'
                    size={20}
                    color='#fff'
                />
            )
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            title: "Settings",
            tabBarIcon: () => (
                <Icon
                    name="settings"
                    type='material'
                    size={20}
                    color='#fff'
                />
            )
        }
    },

}, {
  initialRouteName: 'Home',
  shifting: true,
  activeColor: '#f0edf6',
  inactiveColor: '#3F51B5',
  barStyle: { backgroundColor: '#3F51B5' },
});

export default TabNavigator;