import { LOAD_LATEST_VIDEO_SUCCESS } from '../constants';

const DEFAULT_STATE = {
    episode : {}
};

export default function getLatest(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case LOAD_LATEST_VIDEO_SUCCESS: {
            return {
                ...state,
                episode : action.videos,
                isLoading : false
            };
        }

        default:
            return state;
    }
}
