import { StatusBar } from "expo-status-bar";
import { Switch, Text, View, Image, TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from "@expo/vector-icons";

export default function Home() {
  return (
    <View className="w-full px-2">
      <View className="justify-between items-center flex-row pt-12 pb-6 px-4 my-6">
        <Text className=" font-semibold text-3xl">Name</Text>
        {/* <Switch value={true} /> */}
        <View className="w-6 h-6 bg-black rounded-lg"></View>
      </View>
    <View className="flex flex-row justify-center">
      <View className="bg-gray-100 flex flex-row items-center justify-between w-11/12 rounded-3xl p-2 h-12">
      <AntDesign name="search1" size={20} className="w-1/12" />
        <TextInput placeholder="search" className=" h-full p-1 text-lg w-10/12 overflow-hidden text-gray-400 leading-tight bg-yellow-200"/>
        <Feather name="x" size={24}  className="w-1/12 invisible text-gray-400 font-thin " />
      </View>
    </View>
    
    </View>
  );
}
