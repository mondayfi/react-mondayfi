import api from '../apiSingleton';
import constants from '../constants';

const { LOAD_VIDEOS, LOAD_VIDEOS_FAIL, LOAD_VIDEOS_SUCCESS } = constants;
export function getLatest() {
	return (dispatch) => {
            return api.videos.getLatest()
	            .then((response) => {
	                dispatch({
	                    type   : LOAD_VIDEOS_SUCCESS,
	                    videos : response
	                });
	            }).catch(error => {
	                dispatch({
	                    type: LOAD_VIDEOS_FAIL,
	                    error
	                });
	            });
	}

}