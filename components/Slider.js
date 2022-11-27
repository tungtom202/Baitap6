import React from "react";
import { View, Image, Text, ScrollView, Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');
const height = width * 0.5; //60%


export default class Slider extends React.Component {
    state = {
        active: 0
    }

    change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== this.state.active) {
            this.setState({ active: slide });
        }
    }
    render() {
        return (
            <View style={style.containerslide}>
                <ScrollView
                    pagingEnabled
                    horizontal
                    onScroll={this.change}
                    showsHorizontalScrollIndicator={false}
                    style={style.containerslide}>
                    {
                        this.props.images.map((image, index) => (
                            <Image
                                key={index}
                                source={{ uri: image }}
                                style={style.imageslide} />

                        ))
                    }

                </ScrollView>
                <View style={style.paganition}>
                    {
                        this.props.images.map((i, k) => (
                            <Text
                                key={k}
                                style={k == this.state.active ? style.pagingActiveText : style.pagingText}>⬤</Text>

                        ))
                    }
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    containerslide: {
        width, height
    },

    imageslide: { width, height, resizeMode: 'cover' },
    paganition: { flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' },
    pagingText: { fontSize: width / 30, color: '#888', margin: 3 },
    pagingActiveText: { fontSize: width / 30, color: '#fff', margin: 3 }
})