import { useState } from "react";
import { Text, TextInput, Pressable, View, Alert } from "react-native";
import { Link, router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleLogin = () => {
    const newErrors: typeof errors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Simulate login success or failure
      Alert.alert("Login Successful", "Welcome back!");
      router.push("/home")
    }
  };

  return (
    <View className="flex-1 flex flex-col  justify-center bg-white px-[5%] py-10">
      <Text className="text-[2rem] font-bold mb-6" style={{ fontFamily: "Gilroy" }}>
        Login
      </Text>

      {/* Email Input */}
      <View className="mb-6">
        <Text className="text-[1rem] mb-2" style={{ fontFamily: "Gilroy-Regular" }}>
          Email Address
        </Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          className={`border rounded-md px-4 py-2 text-black ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <Text className="text-red-500 mt-1" style={{ fontFamily: "Gilroy-Regular" }}>
            {errors.email}
          </Text>
        )}
      </View>

      {/* Password Input */}
      <View className="mb-6">
        <Text className="text-[1rem] mb-2" style={{ fontFamily: "Gilroy-Regular" }}>
          Password
        </Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
          className={`border rounded-md px-4 py-2 text-black ${
            errors.password ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.password && (
          <Text className="text-red-500 mt-1" style={{ fontFamily: "Gilroy-Regular" }}>
            {errors.password}
          </Text>
        )}
      </View>

      {/* Login Button */}
      <Pressable
        onPress={handleLogin}
        className="bg-blue-500 py-3 rounded-md"
      >
        <Text className="text-center text-white text-[1rem]" style={{ fontFamily: "Gilroy" }}>
          Login
        </Text>
      </Pressable>

      {/* Navigation to Signup */}
      <View className="mt-6 flex flex-row justify-center">
        <Text
          className="text-gray-500 text-[1rem]"
          style={{ fontFamily: "Gilroy-Regular" }}
        >
          Don’t have an account?{" "}
        </Text>
        <Link href="/" className="text-blue-500 text-[1rem]" style={{ fontFamily: "Gilroy" }}>
          Sign Up
        </Link>
      </View>
    </View>
  );
}
