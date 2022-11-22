import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import MainButton from "../../components/MainButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DrinkDetailScreen({ navigation, route }) {
  const params = route.params;
  const { item } = params;
  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState(item.size[0]);
  const [ice, setIce] = useState(item.ice[0]);
  const onGoBack = () => {
    navigation.goBack();
  };
  const addToCart = async () => {
    console.log(1)
    let cartData = await AsyncStorage.getItem("cartData");
    if (cartData) {
      cartData = JSON.parse(cartData);
      cartData.push({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        amount: amount,
        size: size,
        ice: ice,
        owner: item.owner,
      });
    } else {
      cartData = [];
      cartData.push({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        amount: amount,
        size: size,
        ice: ice,
        owner: item.owner,
      });
    }
    AsyncStorage.setItem("cartData", JSON.stringify(cartData));
    navigation.navigate("CartScreen");
  };
  return (
    <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ position: "relative" }}>
        <View style={{ width: "100%", height: 420 }}>
          <Image
            style={{ width: "100%", height: '100%' }}
            source={{ uri: item.image }}
          />
        </View>
        <TouchableOpacity
          onPress={onGoBack}
          style={{
            backgroundColor: "#ffffff60",
            position: "absolute",
            top: 30,
            left: 12,
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <Ionicons name="chevron-back-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: 12, marginTop: 12 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>{item.name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: "#F99928", fontSize: 16 }}>{item.owner}</Text>

          <Text style={{ textAlign: 'right' }}>  👍  👎</Text>
        </View>
        <Text
          style={{
            color: "#000",
            fontSize: 12,
            fontWeight: "bold",
            marginTop: 24,
          }}
        >
          MÔ TẢ
        </Text>
        <Text
          style={{
            color: "gray",
          }}
        >
          {item.description}
        </Text>
        <View style={{ marginTop: 20 }}>
          <View>
            <Text
              style={{
                color: "#61dafb",
                fontSize: 10,
                fontWeight: "bold",
                marginLeft: 12,
                marginBottom: 5
              }}
            >

              Version
            </Text>
            <View
              style={{
                backgroundColor: "#f4f4f4",
                borderRadius: 8,
                paddingHorizontal: 8,
              }}
            >
              <Picker
                style={{ width: '100%', }}
                selectedValue={size}
                onValueChange={(itemValue, itemIndex) => setSize(itemValue)}
              >
                {item.size.map((value, index) => (
                  <Picker.Item key={index} label={value} value={value} />
                ))}
              </Picker>
            </View>
            {/* <View
              style={{
                backgroundColor: "#F4F4F4",
                paddingHorizontal: 16,
                borderRadius: 100,
                marginTop: 4,
                width: 150,
                paddingVertical: 8,
                flexDirection: "row",
              }}
            >
              <Text style={{ color: "#000", flex: 1 }}>{number}</Text>
            </View> */}
          </View>
          <View style={{ flex: 1 }} />
          <View>
            <Text
              style={{
                color: "#61dafb",
                fontSize: 10,
                fontWeight: "bold",
                marginLeft: 12,
                marginTop: 10,
                marginBottom: 5
              }}
            >
              Lựa chọn gói trả góp
            </Text>
            <View
              style={{
                backgroundColor: "#f4f4f4",
                borderRadius: 8,
                paddingHorizontal: 8,
              }}
            >
              <Picker
                style={{ width: '100%' }}
                selectedValue={ice}
                onValueChange={(itemValue, itemIndex) => setIce(itemValue)}
              >
                {item.ice.map((value, index) => (
                  <Picker.Item key={index} label={value} value={value} />
                ))}
              </Picker>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <View>
            <Text
              style={{
                color: "#61dafb",
                fontSize: 10,
                fontWeight: "bold",
                marginLeft: 12,
              }}
            >
              SỐ LƯỢNG
            </Text>
            <View
              style={{
                backgroundColor: "#F4F4F4",
                paddingHorizontal: 16,
                borderRadius: 100,
                marginTop: 4,
                width: 150,
                paddingVertical: 8,
                flexDirection: "row",
              }}
            >
              <Text style={{ color: "#000", flex: 1 }}>{amount}</Text>
              <TouchableOpacity
                onPress={() => {
                  if (amount > 1) setAmount((val) => val - 1);
                }}
              >
                <Ionicons name="remove" size={24} color="red" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAmount((val) => val + 1);
                }}
              >
                <Ionicons name="add" size={24} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', borderBottomWidth: 1 }}>
            <Text
              style={{
                color: "#000",
                fontSize: 20,
                textAlign: "left",
                fontWeight: "bold",
                marginTop: 5
              }}
            >
              TỔNG
            </Text>
            <Text
              style={{
                color: "red",
                fontSize: 26,
                textAlign: "right",
                fontWeight: "bold",
              }}
            >
              {item.price * amount} VND
            </Text>
          </View>
        </View>
        <MainButton
          onPress={addToCart}
          style={{ marginTop: 30 }}
          title={"THÊM VÀO GIỎ"}
        />
      </View>
      <View style={{ backgroundColor: '#f4f4f4', marginTop: 30 }}>

        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{
              height: 60,
              resizeMode: 'contain',
              width: 60,
            }}
            source={require('../../assets/logocar1.png')} />
          <View>
            <Text style={{ fontSize: 20, color: '#444', fontWeight: '700', marginTop: 12, fontStyle: 'italic', }}>Auto car classical </Text>
          </View>
        </View>
        <View><Text style={{ textAlign: 'center' }}>Luôn đồng hành bạn trên mọi nẻo đường</Text></View>
      </View>
    </ScrollView>
  );
}
