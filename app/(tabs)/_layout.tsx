import { Tabs, useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import TabBottomBarIcon from '@/components/TabBottomBarIcon';
import Header, { HeaderMenuItem } from '@/components/Header';
import { CALLS, CHATS, COMMUNITIES, UPDATES } from '@/models/route';
import Chats from './chats';

export default function TabLayout() {

  const createMenuItems = (routeName: string): HeaderMenuItem[] => {
    switch(routeName) {
      case CHATS: return [{ icon: <MaterialIcons name="qr-code-scanner" size={22} color={"#FFFFFF"} />, onClick: () => {} }, { icon: <Feather name="camera" size={22} color={"#FFFFFF"} />, onClick: () => {} }, { icon: <MaterialCommunityIcons name="dots-vertical" size={22} color="#FFFFFF" />, onClick: () => {}}];
      case UPDATES:
      case CALLS: return  [{ icon: <MaterialIcons name="qr-code-scanner" size={22} color={"#FFFFFF"} />, onClick: () => {} }, { icon: <Ionicons name="search" size={22} color="#FFFFFF" />, onClick: () => {}}, { icon: <MaterialCommunityIcons name="dots-vertical" size={22} color="#FFFFFF" />, onClick: () => {}}];
      case COMMUNITIES: return [ { icon: <MaterialIcons name="qr-code-scanner" size={22} color={"#FFFFFF"} />, onClick: () => {}}, { icon: <MaterialCommunityIcons name="dots-vertical" size={22} color="#FFFFFF" />, onClick: () => {}}]
      default: return []
    }
  }
 
  return (
   <Tabs
          screenOptions={{
            headerShown: true,
            tabBarStyle: {
              backgroundColor: '#121212',
              borderColor: '#121212',
              padding: 0,
              paddingTop: 12
            },
            tabBarHideOnKeyboard: true,
            headerStyle: {
              height: 80
            },
            tabBarInactiveTintColor: '#FFFFFF',      
            tabBarLabel: (({focused, color, children}) => <Text className={`mt-1.5 text-base text-text-primary ${focused ? 'font-bold font-spaceMono-bold' : 'font-medium font-spaceMono-medium'}`} selectionColor={color}>{children}</Text>),
            tabBarActiveTintColor: '#FFFFFF'
          }}>
          <Tabs.Screen
            name="chats/index"
            options={{
              title: 'Chats',
              header: (({ route }) => <Header title={"Whispr"} menuItems={createMenuItems(CHATS)} />),
              tabBarIcon: ({ focused, color, size }) => <TabBottomBarIcon focused={focused}> <Ionicons name={`chatbox-ellipses${focused ? '' : '-outline'}`} color={color} size={size}></Ionicons></TabBottomBarIcon>
            }}
          />
          <Tabs.Screen
            name={`updates/index`}
            options={{
              title: 'Updates',
              header: (({ route }) => <Header title={"Updates"} menuItems={createMenuItems(UPDATES)} />),
              tabBarIcon: ({focused, color, size}) => <TabBottomBarIcon focused={focused}><MaterialIcons name="wifi-tethering" size={22} color={color} /></TabBottomBarIcon>
            }}
          />
          <Tabs.Screen
           name="communities/index"
           options={{
             title: 'Communities',
             header: (({ route }) => <Header title={"Communities"} menuItems={createMenuItems(COMMUNITIES)} />),
             tabBarIcon: (({focused, color, size}) => <TabBottomBarIcon focused={focused}><FontAwesome5 name="users" size={22} color={color} /></TabBottomBarIcon>)
           }}
         />
          <Tabs.Screen
          name="calls/index"
          options={{
            title: 'Calls',
            header: (({ route }) => <Header title={"Calls"} menuItems={createMenuItems(CALLS)} />),
            tabBarIcon: (({focused, color, size}) => <TabBottomBarIcon focused={focused}><Ionicons name={`call${focused ? '' : '-outline'}`} color={color} size={size}/></TabBottomBarIcon>)
          }}
        />
        </Tabs>
  );
}
