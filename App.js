import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
} from 'react-native';

import {
    Header,
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import PhotosViewerContainer from './Components/photosViewer/photosViewerContainer';
import {Provider} from 'react-redux';
import store from './redux/redux-store';
import ShowPhotoContainer from './Components/showPhoto/showPhotoContainer';

const App = () => {
    return (
        <Provider store={store}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>

                    <PhotosViewerContainer/>
                    <ShowPhotoContainer/>
                </ScrollView>
        </Provider>
    );
};
//
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
});

export default App; ///dfgdfgdfg
