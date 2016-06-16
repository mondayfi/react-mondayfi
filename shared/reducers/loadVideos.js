import { LOAD_VIDEOS_SUCCESS } from '../constants';

const DEFAULT_STATE = {
    videos : [],
    isLoading : false
};

export default function getLatest(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case LOAD_ONE_VIDEO_SUCCESS: {
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