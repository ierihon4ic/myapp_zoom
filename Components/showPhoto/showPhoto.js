import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Modal, TouchableHighlight, Image} from 'react-native';
import FastImage from 'react-native-fast-image';

const ShowPhoto = (props) => {

    const onPhotoHide = () => {
        props.hidePhoto()
    }




    return (
        (props.show) ?
        <Modal
            transparent={true}
            animationType={'fade'}>
            <View style={styles.modelStyle}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.fullImageStyle}
                    onPress={onPhotoHide}>
                <Image
                    style={styles.fullImageStyle}
                    source={{uri: props.url}}
                    resizeMode={FastImage.resizeMode.contain}
                /></TouchableOpacity>
            </View>
        </Modal> : <></>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
    image: {
        height: 120,
        width: '100%',
    },
    fullImageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    modelStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.82)',
    },
    closeButtonStyle: {

    },
});

export default ShowPhoto;

