import React from 'react';
import {connect} from 'react-redux';
import PhotosViewer from './PhotosViewer';
import {increasePageCountAC, setPhotosAC} from '../../redux/photosViewerReducer';
import {showPhotoAC} from '../../redux/showPhotoReducer';
import axios from "axios";

class PhotosViewerAPI extends React.Component {

    constructor(props) {
        super(props);
        this.loadMorePhotos = this.loadMorePhotos.bind(this)
    }

    componentDidMount() {
        this.loadMorePhotos()
    }

    loadMorePhotos () {
        console.log('пытаюсь загрузить ещё со страницы' )
        console.log(this.props.pagesCount)
        axios.get(`https://api.500px.com/v1/photos?page=${this.props.pagesCount}`).then(response => {
            let photos = response.data.photos.map(photo => (
                {id:photo.id, image_url:photo.image_url[0]})
            );
            let total_pages = response.data.total_pages
            console.log(total_pages)
            this.props.setPhotos(photos, total_pages)

            console.log("Получил ответ!")
        })
    }

    render() {
        return <PhotosViewer
            pagesCount={this.props.pagesCount}
            total_pages={this.props.total_pages}
            photos={this.props.photos}
            showPhoto={this.props.showPhoto}
            loadMorePhotos={this.loadMorePhotos}
            />
    }
}

let mapStateToProps = (state) => {
    return {
        photos: state.photosViewerPage.photos,
        total_pages: state.photosViewerPage.total_pages,
        pagesCount: state.photosViewerPage.pagesCount
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setPhotos: (photos, total_pages) => dispatch(setPhotosAC(photos, total_pages)),
        increasePageCount: () => dispatch(increasePageCountAC()),
        showPhoto: (id, image_url) => dispatch(showPhotoAC(id, image_url))
    }
}

const PhotosViewerContainer = connect(mapStateToProps, mapDispatchToProps)(PhotosViewerAPI)

export default PhotosViewerContainer
