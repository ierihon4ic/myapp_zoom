import React from 'react';
import {connect} from 'react-redux';
import ShowPhoto from './showPhoto';
import {hidePhotoAC} from '../../redux/showPhotoReducer';



let mapStateToProps = (state) => {
    return {
        id: state.showPhotoPage.id,
        url:state.showPhotoPage.image_url,
        show: state.showPhotoPage.show
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        hidePhoto: () => dispatch(hidePhotoAC())
    }
}

const ShowPhotoContainer = connect(mapStateToProps, mapDispatchToProps)(ShowPhoto)

export default ShowPhotoContainer
