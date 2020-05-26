const SET_PHOTOS = 'SET_PHOTOS';
const INCREASE_PAGE_COUNT = 'INCREASE_PAGE_COUNT';

const initialState = {
/*    photos: [
        {id: 1016266471, image_url: 'https://drscdn.500px.org/photo/1016266471/q%3D50_h%3D450/v2?sig=142b361c8c09a08fdfcaf3b83365cd2d1d696ed8071d8ecae0878e1db5cf317c'},
        {id: 1016266138, image_url: 'https://drscdn.500px.org/photo/1016266138/q%3D50_h%3D450/v2?sig=201b9378ee1cbdd7b371c30079d5663ab784a4892c103142f1dc6d1386212a79'},
        {id: 1016263650, image_url: 'https://drscdn.500px.org/photo/1016263650/q%3D50_h%3D450/v2?sig=05187c90a7e715d90c712d049cce5d64379c7bbb904a408558add0bcc700ed3d'},
        {id: 1016254402, image_url: 'https://drscdn.500px.org/photo/1016254402/q%3D50_h%3D450/v2?sig=e46b7da33ca762f97f55c9eb59f6787d3727dffafd91736734bb47cb1740de25'},
        {id: 1016259400, image_url: 'https://drscdn.500px.org/photo/1016259400/q%3D50_h%3D450/v2?sig=07811e653f434047d658e6cbd4741f341b98098ca4b520b14155443eaaad1b8e'},
        {id: 1016279134, image_url: 'https://drscdn.500px.org/photo/1016279134/q%3D50_h%3D450/v2?sig=7eb202de1cc8102f70f08b909fcebf4317c6ff5a1df5d5a2de4c85275ba1fcff'},
        {id: 1016251537, image_url: 'https://drscdn.500px.org/photo/1016251537/q%3D50_h%3D450/v2?sig=499e28453ba222a362ad3ff8682e09462df459874d2930c53816eef2c4f06a17'},
        {id: 1016262982, image_url: 'https://drscdn.500px.org/photo/1016262982/q%3D50_h%3D450/v2?sig=59ca923ecf1ccea7ab9f2102837b3d670e427afcd70ac4e90bf33024926a1f5c'},
        {id: 1016254479, image_url: 'https://drscdn.500px.org/photo/1016254479/q%3D50_h%3D450/v2?sig=95b54466b4f8d114b59e410f09b9aa6b01ec74e6876f260398e7c86443ee6462'},
    ]*/
    photos: [],
    total_pages: 0,
    pagesCount: 0
}

const photosViewerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHOTOS:
            return {
                ...state,
                pagesCount:state.pagesCount+1,
                total_pages: action.total_pages,
                photos: [...state.photos ,...action.photos],
            }
        default:
            return state
    }
}

export let setPhotosAC = (photos, total_pages) => ({type:SET_PHOTOS, photos, total_pages})
export let increasePageCountAC = () => ({type:INCREASE_PAGE_COUNT})

export default photosViewerReducer
