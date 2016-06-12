import { LOAD_VIDEOS_SUCCESS } from '../constants';

const DEFAULT_STATE = {
    videos : [],
    isLoading : true
};

export default function getVideos(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case LOAD_VIDEOS_SUCCESS: {
            return {
                ...state,
                videos : action.videos,
                isLoading : false
            };
        }

        default:
            return state;
    }
}