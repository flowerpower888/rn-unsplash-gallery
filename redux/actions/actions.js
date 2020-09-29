import { CLIENT_ID } from "@env"


export const requestPhotos = () => {
    return { type: 'REQUESTED_PHOTOS' }
};

export const requestPhotosSuccess = (data) => {
    return { type: 'REQUESTED_PHOTOS_SUCCEEDED', data: data }
};

export const requestPhotosError = () => {
    return { type: 'REQUESTED_PHOTOS_FAILED' }
};

export const fetchPhotos = () => {
    return (dispatch) => {
        dispatch(requestPhotos());
        fetch(`https://api.unsplash.com/photos/?client_id=${CLIENT_ID}&per_page=50`)
            .then(res => res.json())
            .then(
                data => {
                    dispatch(requestPhotosSuccess(data))
                },
                err => dispatch(requestPhotosError())
            );
    }
};