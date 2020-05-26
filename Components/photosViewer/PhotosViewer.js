import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Modal, Image, Button
} from 'react-native';
import FastImage from 'react-native-fast-image';



const MiniImage = (props) => {

    const onPhotoPress = () => {
        props.showPhoto(props.id, props.url)
    }

    return (
        <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
            <TouchableOpacity
                key={props.id}
                style={{flex: 1}}
                onPress={onPhotoPress}
            >
                <FastImage source={{uri:props.url}} style={styles.image}/>
            </TouchableOpacity>
        </View>
    )
}

const PhotosViewer = (props) => {

    let onLoadMorePhotos = () => {
        props.loadMorePhotos()
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={props.photos}
                renderItem={({item}) => (<MiniImage id={item.id} url={item.image_url} showPhoto={props.showPhoto}/>)}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
            />
            {(props.total_pages !== props.pagesCount-2) &&
            <Button
                onPress={onLoadMorePhotos}
                title="Загрузить ещё"
                color="#841584"
            />}
        </View>
    );
};

export default PhotosViewer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 200,
        width: '100%',
    },
    fullImageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '98%',
        resizeMode: 'contain',
    },
    modelStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    closeButtonStyle: {
        width: 25,
        height: 25,
        top: 9,
        right: 9,
        position: 'absolute',
    },
});
