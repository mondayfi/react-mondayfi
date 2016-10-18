import _ from 'lodash';
import api from '../apiSingleton';
import constants from '../constants';

const { LOAD_ONE_VIDEO_FAIL, LOAD_ONE_VIDEO_SUCCESS, LOAD_LATEST_VIDEO_SUCCESS, LOAD_LATEST_VIDEO_FAIL } = constants;

export function getLatest() {
    return (dispatch) => {
        return api.videos.getLatest()
            .then((response) => {
                dispatch({
                    type   : LOAD_LATEST_VIDEO_SUCCESS,
                    videos : response
                });
            }).catch(error => {
                dispatch({
                    type: LOAD_LATEST_VIDEO_FAIL,
                    error
                });
            });
    };
}

export function loadVideo(/* { params:{ slug } } */) {
    return (dispatch) => {
        return api.videos.get()
            .then(r => _.sortBy(r, 'time').reverse())
            .then((response) => {
                dispatch({
                    type   : LOAD_ONE_VIDEO_SUCCESS,
                    video : response
                });
            }).catch(error => {
                dispatch({
                    type: LOAD_ONE_VIDEO_FAIL,
                    error
                });
            });
    };
}
