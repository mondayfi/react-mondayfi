import { LOAD_ONE_VIDEO_SUCCESS } from '../constants';

const DEFAULT_STATE = {
    video : {},
    isLoading : false
};

export default function getLatest(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case LOAD_ONE_VIDEO_SUCCESS: {
            return {
                ...state,
                video : action.video,
                isLoading : false
            };
        }

        default:
            return state;
    }
};
