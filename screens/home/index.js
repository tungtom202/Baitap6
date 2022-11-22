import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StatusBar, Text, View, Image } from 'react-native';
import DrinkItem from '../../components/DrinkItem';
import data from '../../data/drinks.json';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import TextTicker from 'react-native-text-ticker';

export default function HomeScreen({ navigation }) {
  const [user, setuser] = useState(null);
  const renderItem = ({ item, index }) => {
    return <DrinkItem item={item} index={index} navigation={navigation} />;
  };
  const getUserData = async () => {
    let curUser = await AsyncStorage.getItem('curUser');
    curUser = JSON.parse(curUser);
    setuser(curUser);
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <ScrollView
      style={{
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        marginTop: StatusBar.currentHeight + 10,
        backgroundColor: '#f4f4f4'
      }}
    >

      <View style={{}}>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Image
              style={{
                height: 60,
                resizeMode: 'contain',
                width: 60,
              }}
              source={require('../../assets/logocar1.png')} />
          </View>
          <View>
            <Text style={{ fontSize: 20, color: '#444', fontWeight: '700', marginTop: 12, fontStyle: 'italic' }}>Auto car classical </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#bbb', padding: 10, borderRadius: 8 }}>
          <Text style={{ fontSize: 16, color: '#fff' }}>{`Hi, ${user && user.name
            }`}</Text>

          <FontAwesome5 name="bell" size={24} color="black"
            style={{ color: 'yellow' }} />
        </View>
      </View>
      <View>
        <Image
          style={{
            width: '100%',
            height: 150,
            marginTop: 15,
            borderRadius: 10
          }}
          source={{
            uri: 'https://fordmienbac.net/wp-content/uploads/2022/03/banner-raptor-ford-long-bien.jpg',
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: '#61dafb',
          padding: 10,
          borderRadius: 12,
          marginTop: 15,

        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
            Sale
          </Text>
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              fontSize: 22,
              fontStyle: 'italic'
            }}
          >
            {' 20% '}
          </Text>
          <View>
            <TextTicker
              style={{ fontSize: 18, width: '100%', color: '#fff' }}
              duration={2000}
              loop
              bounce
              repeatSpacer={50}
              marqueeDelay={1000}
            >

              Hurry up to receive the offer for the first customer
            </TextTicker>
          </View>

        </View>
        {/* <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 10,
            marginTop: 30,
          }}
        >
          SỰ DỤNG CODE NÀY
        </Text>
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 24,
          }}
        >
          NEW50
        </Text> */}
      </View>

      <View style={styles.sectionContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.title}>New car </Text>
          <Text> View All</Text>
        </View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={true}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={true}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Có thể bạn sẽ thích</Text>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 45, height: 45 }}>
            <Image
              style={{
                width: '100%',
                height: '100%',

              }}
              source={{
                uri: 'data:image/png;base64,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',
              }}
            />
          </View>
          <Text style={{ marginTop: 10, marginLeft: 4 }}>Toyota</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 40, height: 40 }}>
            <Image
              style={{
                width: '100%',
                height: '100%',

              }}
              source={{
                uri: 'https://cdn.iconscout.com/icon/free/png-256/bmw-4-202746.png',
              }}
            />
          </View>
          <Text style={{ marginTop: 10, marginLeft: 4 }}>BMW</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 40, height: 40 }}>
            <Image
              style={{
                width: '100%',
                height: '100%',

              }}
              source={{
                uri: 'https://banner2.cleanpng.com/20180802/jfw/kisspng-mercedes-benz-c-class-car-mercedes-benz-slr-mclare-mercedes-benz-icon-logo-v-1989-opiwiki-the-ency-5b63082ff3a0d8.5515818315332168159979.jpg',
              }}
            />
          </View>
          <Text style={{ marginTop: 10, marginLeft: 4 }}>Mercedes-Benz</Text>
        </View>
      </View>
      <View>
        <Image
          style={{
            width: '100%',
            height: 160,
            marginTop: 15,
            borderRadius: 10
          }}
          source={{
            uri: 'https://di-uploads-pod31.dealerinspire.com/ferrarioffortlauderdale/uploads/2021/12/6910-Slider-Roma-v02-1800x800.png',
          }}
        />
      </View>
    </ScrollView>
  );
}
