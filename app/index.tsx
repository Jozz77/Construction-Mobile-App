import { Link } from "expo-router";
import { Image, ScrollView } from "react-native";
import { Text, View } from "react-native";

export default function TabOneScreen() {
  return (
    <ScrollView>
      <View className=" w-full bg-white pt-24 pb-16 px-[5%] text-black flex-1   ">
      <View className=" h-[21rem] ">
        <Image
          source={require("../assets/images/Image.png")}
          className="  h-full  w-full"
        />
      </View>
      <View className=" mt-14  ">
        <Text
          style={{ fontFamily: "Gilroy" }}
          className="text-[2rem] leading-[40px]  "
        >
          Your partner in construction project management.
        </Text>
        <Text
          style={{ fontFamily: "Gilroy-Regular" }}
          className=" mt-4 text-[1.1rem] leading-[20px] "
        >
          From planning to execution, manage all your construction projects
          seamlessly with <Text  style={{ fontFamily: "Gilroy" }} className=" text-Red ">Sitesync</Text>.
        </Text>
      </View>
      <View  className=" mt-20 flex text-[1.7rem] flex-row justify-between ">
        <Link href="/login" className=" text-[1.1rem] " style={{ fontFamily: "Gilroy" }}>Login</Link>
        <Link href="/home" className=" text-[1.1rem] " style={{ fontFamily: "Gilroy" }}>Sign Up</Link>
        
      </View>
    </View>
    </ScrollView>
  );
}
