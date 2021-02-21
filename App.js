import React, {Component} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeIcon from './src/assets/home-solid.svg';
import CalendarIcon from './src/assets/calendar-alt-solid (1).svg';
import CasesIcon from './src/assets/clipboard-list-solid.svg';
import MapIcon from './src/assets/map-marked-alt-solid (1).svg';
import Home from "./src/screens/Home";
import Calendar from './src/screens/Calendar';
import Cases from "./src/screens/Cases";
import Map from "./src/screens/Map";

const Tab = createBottomTabNavigator();

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    sceneContainerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}

                screenOptions={({route}) => ({
                    tabBarIcon: () => {
                        let Icon;
                        // cases here for all screens
                        if(route.name === 'Home') {
                            Icon = HomeIcon;
                        } else if(route.name === 'Calendar') {
                            Icon = CalendarIcon;
                        } else if(route.name === 'Cases') {
                            Icon = CasesIcon;
                        } else if(route.name === 'Map') {
                            Icon = MapIcon;
                        }
                        return <Icon width={24} height={24} />;
                    }
                })}>
                    <Tab.Screen name='Home' component={Home}/>
                    <Tab.Screen name='Calendar' component={Calendar}/>
                    <Tab.Screen name='Cases' component={Cases}/>
                    <Tab.Screen name='Map' component={Map}/>
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}