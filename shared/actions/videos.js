import _ from 'lodash';
import api from '../apiSingleton';
import constants from '../constants';

const {LOAD_ONE_VIDEO_FAIL, LOAD_ONE_VIDEO_SUCCESS, LOAD_LATEST_VIDEO_SUCCESS, LOAD_LATEST_VIDEO_FAIL } = constants;
export function getLatest() {
	return (dispatch) => {
            return api.videos.getLatest()
	            .then((response) => {
	                dispatch({
	                    type   : LOAD_LATEST_VIDEO_SUCCESS,
	                    video : response
	                });
	            }).catch(error => {
	                dispatch({
	                    type: LOAD_LATEST_VIDEO_FAIL,
	                    error
	                });
	            });
	}

}

export function loadVideo(slug) {
	return (dispatch) => {
            return api.videos.get()
	            .then((response) => {
	                dispatch({
	                    type   : LOAD_ONE_VIDEO_SUCCESS,
	                    video : _.find(response, d => d.slug.en === slug )
	                });
	            }).catch(error => {
	                dispatch({
	                    type: LOAD_ONE_VIDEO_FAIL,
	                    error
	                });
	            });
	}

}