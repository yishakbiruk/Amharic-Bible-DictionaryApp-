import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Tabs } from "expo-router"
import { View,Text,Image } from 'react-native';


const TabIcon = ({color,focused,name,im}) =>{
   return(
    <View className="flex flex-row">
        <Octicons className="w-9 h-3 " name="home" size={24} color="black" />
        <Text className="">hello</Text>
    </View>
   )
}

export default () => {
  return(
    <Tabs >
        <Tabs.Screen 
        name="home" 
        options={{
            title: 'Home',
            tabBarIcon: ({ color,focused,name }) => (
              <TabIcon 
                color={color}
                name={name}
                focused={focused}
              />
            ),
            headerShown:false,
            
          }}
          
        />
        <Tabs.Screen 
        name="favorite" 
        options={{
            title: 'favorite',
            tabBarIcon: ({ color }) => <MaterialIcons name="favorite-outline" size={28} color="black" />,
            headerShown:false
          }}
        />
        <Tabs.Screen 
        name="setting" 
        options={{
            title: 'setting',
            tabBarIcon: ({ color }) => <Feather name="settings" size={24} color="black" />,
            headerShown:false
          }}
        />
        <Tabs.Screen 
        name="about" 
        options={{
            title: 'about',
            tabBarIcon: ({ color }) => <Feather name="info" size={26} color="black" />,
            headerShown:false
          }}
        />
    </Tabs>
  )
}