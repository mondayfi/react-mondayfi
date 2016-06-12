import api from '../apiSingleton';
import constants from '../constants';

const { LOAD_VIDEOS, LOAD_VIDEOS_FAIL, LOAD_VIDEOS_SUCCESS } = constants;
console.log(LOAD_VIDEOS, LOAD_VIDEOS_FAIL, LOAD_VIDEOS_SUCCESS);
export function loadVideos() {
	console.log('loading videos', LOAD_VIDEOS_SUCCESS)
	return (dispatch) => {

		dispatch({
            type             : LOAD_VIDEOS_SUCCESS,
            assessmentSystem : 'response'
        });
            return api.videos.get()
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