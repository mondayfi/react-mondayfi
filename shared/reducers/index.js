import { combineReducers } from 'redux';

import getLatestVideo           from './getLatestVideo';
import video             		from './loadVideo';

const rootReducer = combineReducers({
	getLatestVideo,
	video
});

export default rootReducer;
