import React, { Component } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator }from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Cat from '../screens/catologue'
import Track from '../screens/track'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dash from '../screens/dashboard'
const Tab = createBottomTabNavigator();
export default class Botnav extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator  screenOptions={({ route }) => ({
          
           tabBarIcon: ({ focused, color, size }) => {
            let iconName;

           if(route.name == 'Search'){
             iconName = 'search'
           }
           else if(route.name == "Track"){
             iconName = 'cube-outline'
           }
           return  <Ionicons name={iconName} size={size} color={color} />;
           }
        })}
        tabBarOptions = {{
          activeTintColor : '#ffffff',
          inactiveTintColor : 'tomato',
          style:{
            height: 130,
            borderTopWidth: 0,
            backgroundColor:'#5653d4'
          },
          labelStyle:{
            fontsize: 20,
            fontfamily:"Rajdhani_600SemiBold"
          },
          labelPosition:'beside-icon',
          tabStyle:{
            marginTop:25,
            marginLeft:10,
            marginRight:10,
            borderRadius:30,
            borderWidth:2,
            alignItems:'center',
            justifyContent: 'center',
            backgroundColor:"#5653d4"
          }
        }}

>
          <Tab.Screen name="Return" component={Ret} />
          <Tab.Screen name="Library" component={Cat} />
          <Tab.Screen name="Track" component={Track} />
          <Tab.Screen name="Dashboard" component={Dash} />

        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
