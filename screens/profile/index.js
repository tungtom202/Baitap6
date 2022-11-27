import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, Image, TextInput } from "react-native";
import MainButton from "../../components/MainButton";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function ProfileScreen({ navigation }) {
  const [user, setuser] = useState(null);
  const getUserData = async () => {
    let curUser = await AsyncStorage.getItem("curUser");
    curUser = JSON.parse(curUser);
    setuser(curUser);
  };
  const logOut = async () => {
    await AsyncStorage.removeItem("curUser");
    navigation.reset({
      index: 0,
      routes: [{ name: "LoginScreen" }],
    });
  };
  useEffect(() => {
    getUserData(user);
  }, []);


  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        width: "100%",
        paddingTop: StatusBar.currentHeight + 10,
        paddingHorizontal: 12,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 8 }}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <View style={{ flexDirection: 'row', backgroundColor: '#dedede', borderRadius: 20, paddingLeft: 10 }}>
          <View style={{ position: 'absolute', alignSelf: 'center', paddingLeft: 10 }}>
            <Ionicons name="ios-search-outline" size={20} color="#666" />

          </View>
          <TextInput
            style={{
              paddingLeft: 25,
              padding: 6,
              width: '85%',
            }}
            placeholder={'Tìm kiếm…'}
          />
        </View>
      </View>
      <View style={{ width: '100%', height: 1, backgroundColor: '#000', marginBottom: 10 }}></View>
      <View style={{ flex: 1, alignItems: "center", backgroundColor: '#fff' }}>
        <View style={{ backgroundColor: '#FCE2DB', width: '100%', alignItems: 'center', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>

          <View style={{ position: 'absolute', right: 124, zIndex: 3, marginTop: 20, backgroundColor: '#7FBCD2', padding: 8, borderRadius: 100 }}>
            <FontAwesome5 name="camera" size={18} color="black" />

          </View>
          <View style={{ marginTop: 20 }}>
            <View style={{
              height: 128,
              width: 128,
              borderRadius: 100,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',

            }}>

              <Image
                style={{
                  height: 120,
                  width: 120,
                  borderRadius: 100,
                }}
                source={{ uri: "https://i.pravatar.cc/300" }}
              />
            </View>
            <Text
              style={{
                fontSize: 24,
                textAlign: 'center',
                fontWeight: "bold",
              }}
            >
              {user && user.name}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 12,
          }}
        >
          {user && user.email}
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            paddingBottom: 12,
          }}
        >

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              flex: 1,
              textAlign: "center",
              color: '#666'
            }}
          >
            {"Đang Giao"}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              flex: 1,
              textAlign: "center",
              color: '#666'
            }}
          >
            {"Đã Giao"}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              flex: 1,
              textAlign: "center",
              color: '#666'
            }}
          >
            {"Đã Hủy"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "#000",
              fontSize: 20,
              fontWeight: 'bold',
              flex: 1,
              textAlign: "center",
            }}
          >
            {"01"}
          </Text>
          <Text
            style={{
              color: "#000",
              fontSize: 20,
              fontWeight: 'bold',
              flex: 1,
              textAlign: "center",
            }}
          >
            {"02"}
          </Text>
          <Text
            style={{
              color: "#000",
              fontSize: 20,
              fontWeight: 'bold',
              flex: 1,
              textAlign: "center",
            }}
          >
            {"00"}
          </Text>
        </View>

        <View style={{ backgroundColor: '#fff', width: '100%', marginTop: 40 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, backgroundColor: '#F9F9F9', padding: 10, borderRadius: 15 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ padding: 6, backgroundColor: '#FF8FB1', borderRadius: 10 }}>
                <MaterialIcons name="support-agent" size={24} color="#fff" />
              </View>
              <Text style={{ padding: 6, fontWeight: 'bold' }}>Auto Car Support</Text>
            </View>
            <View style={{ padding: 6 }}>
              <AntDesign name="right" size={20} color="black" />
            </View>
          </View>
          {/* 2 */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, backgroundColor: '#F9F9F9', padding: 10, borderRadius: 15 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ padding: 6, backgroundColor: '#FFF89C', borderRadius: 10 }}>
                <Ionicons name="md-help-outline" size={20} color="#000" />
              </View>
              <Text style={{ padding: 6, fontWeight: 'bold' }}>Help</Text>
            </View>
            <View style={{ padding: 6 }}>
              <AntDesign name="right" size={20} color="black" />
            </View>
          </View>
          {/* 3 */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F9F9F9', padding: 10, borderRadius: 15 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ padding: 6, backgroundColor: '#C8B6E2', borderRadius: 10 }}>
                <Entypo name="heart-outlined" size={20} color="black" />
              </View>
              <Text style={{ padding: 6, fontWeight: 'bold' }}>The Health App</Text>
            </View>
            <View style={{ padding: 6 }}>
              <AntDesign name="right" size={20} color="black" />
            </View>
          </View>
        </View>
      </View>
      <MainButton
        onPress={logOut}
        style={{ backgroundColor: "red", marginBottom: 50, with: '100%' }}
        title={"Đăng Xuất"}
      />
    </View>
  );
}
