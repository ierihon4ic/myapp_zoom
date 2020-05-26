import {combineReducers, createStore} from 'redux';
import photosViewerReducer from './photosViewerReducer';
import showPhotoReducer from './showPhotoReducer';


let reducers = combineReducers({
    photosViewerPage:photosViewerReducer,
    showPhotoPage:showPhotoReducer
});

let store = createStore(reducers)

export default store;
