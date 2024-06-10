import { StatusBar } from 'expo-status-bar';
import { Switch, Text, View,Image,TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function App() {
  return (
    <View className="w-full">
        <View className="justify-between items-center flex-row pt-6 px-4">
            {/* <Text className=" font-semibold text-3xl">መዝገበ ቃላት</Text> */}
            <Switch
            value={true}
        />
        </View>
        <View className="bg-gray-300 flex flex-row items-center w-full rounded-3xl">
        <EvilIcons name="search" size={30} color="black" />
            <TextInput 
                placeholder="search"
                className=" text-base"
            />
            <Feather name="x" size={24} color="black" />
        </View>
    </View>
  );
  
}
