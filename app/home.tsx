import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const servicesData = [
  {
    text: "Building Construction",
    img: require("../assets/images/service1.png"),
  },
  {
    text: "Project Planning",
    img: require("../assets/images/service2.png"),
  },
  {
    text: "Assembly Work",
    img: require("../assets/images/service3.png"),
  },
];

const projectsData = [
  {
    text: "Residential",
    img: require("../assets/images/project1.png"),
  },
  {
    text: "Renovation",
    img: require("../assets/images/project2.png"),
  },
  {
    text: "Remodeling",
    img: require("../assets/images/project3.png"),
  },
  {
    text: "Residential",
    img: require("../assets/images/project1.png"),
  },
  {
    text: "Renovation",
    img: require("../assets/images/project2.png"),
  },
  {
    text: "Remodeling",
    img: require("../assets/images/project3.png"),
  },
];

export default function home() {
  return (
    <ScrollView className=" bg-white  text-black flex-1 ">
      <View className=" flex flex-row items-center px-[5%] py-4 border-b-[1.5px] border-b-black justify-between ">
        <Text
          style={{ fontFamily: "Gilroy" }}
          className=" leading-none text-[#1E1E1E] text-[1.3rem] "
        >
          SiteSync
        </Text>
        <Image
          source={require("../assets/images/menu.png")}
          className="w-8 h-8 "
        />
      </View>

      <View className="flex flex-col gap-8 px-[5%] py-8">
        <View>
          <Text
            style={{ fontFamily: "Gilroy" }}
            className=" mb-4 text-[#1E1E1E] text-[2rem] leading-[40px] "
          >
            Building Your Vision,{"\n"}One Project at a Time
          </Text>
          <Image
            source={require("../assets/images/build.png")}
            className="w-full h-[196px] object-contain "
          />
        </View>
        <View>
          <Text
            style={{ fontFamily: "Gilroy" }}
            className=" mb-4 text-[#1E1E1E] text-[1.2rem] leading-[40px] "
          >
            Our Services
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false} // Hides the scrollbar for a cleaner look
            contentContainerStyle={{ paddingHorizontal: 0 }} // Add horizontal padding
          >
            {servicesData.map((service, index) => (
              <View
                key={index}
                className="flex flex-col gap-1 items-center w-auto flex-1 mr-4" // Add right margin for spacing
              >
                <View>
                  <Image source={service.img} className="w-8 h-8" />
                </View>
                <Text
                  style={{ fontFamily: "Gilroy-Medium" }}
                  className=" text-[#1E1E1E] text-center text-[0.9rem] leading-[40px]"
                >
                  {service.text}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View>
          <Text
            style={{ fontFamily: "Gilroy" }}
            className=" mb-4 text-[#1E1E1E] text-[1.2rem] leading-[40px] "
          >
            Completed Projects
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false} // Hides the scrollbar for a cleaner look
            contentContainerStyle={{ paddingHorizontal: 0 }} // Add horizontal padding
          > 
            {projectsData.map((project, index) => (
              <View
                key={index}
                className="flex  flex-col gap-1 items-center w-[30%] flex-1 mr-4" // Add right margin for spacing
              >
                <View>
                  <Image source={project.img} className="w-[109px] rounded-[4px] h-[70px] "  />
                </View>
                <Text
                  style={{ fontFamily: "Gilroy-Medium" }}
                  className=" text-[#1E1E1E] text-center text-[0.9rem] leading-[40px]"
                >
                  {project.text}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
