import { combineReducers } from 'redux';

import getLatestVideo             from './getLatestVideo';
import activations             from './activations';
import currentActivation       from './currentActivation';
import users                   from './users';
import currentUser             from './currentUser';
import currentAssessmentSystem from './currentAssessmentSystem';

const rootReducer = combineReducers({
	getLatestVideo,
    activations,
    currentActivation,
    users,
    currentUser,
    currentAssessmentSystem
});

export default rootReducer;
