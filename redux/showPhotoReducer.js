const SHOW_PHOTO = 'SHOW_PHOTO';
const HIDE_PHOTO = 'HIDE_PHOTO';

const initialState = {
    id:1016266471,
    image_url: 'https://drscdn.500px.org/photo/1016263650/q%3D50_h%3D450/v2?sig=05187c90a7e715d90c712d049cce5d64379c7bbb904a408558add0bcc700ed3d',
    show: false,
}

const showPhotoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_PHOTO:
            return {...state, id: action.id, image_url: action.image_url, show: true}
        case HIDE_PHOTO:
            return {...state, show: false}
        default:
            return state
    }
}

export const showPhotoAC = (id, image_url) => ({
    type: SHOW_PHOTO, id, image_url
})

export const hidePhotoAC = () => ({
    type: HIDE_PHOTO
})


export default showPhotoReducer
