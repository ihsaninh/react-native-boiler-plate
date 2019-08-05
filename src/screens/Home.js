import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <StatusBar
            barStyle="light-content"
            backgroundColor="#21349e"
          />
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

const BottomTabs = createMaterialTopTabNavigator({
  Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: "Home",
            tabBarIcon: () => (
                <Icon
                    name="home"
                    type='material'
                    size={18}
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
                    size={18}
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
                    size={18}
                    color='#fff'
                />
            )
        }
    },

}, {
      initialRouteName: 'Home',
      lazy: true,
      tabBarOptions: {
        activeColor: '#f0edf6',
        inactiveColor: '#3F51B5',
        tabStyle: { backgroundColor: '#3F51B5' },
        showIcon: true,
        showLabel: false
      }

});

export default BottomTabs;