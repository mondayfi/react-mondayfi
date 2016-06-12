import { combineReducers } from 'redux';

import videos             from './videos';
import activations             from './activations';
import currentActivation       from './currentActivation';
import users                   from './users';
import currentUser             from './currentUser';
import currentAssessmentSystem from './currentAssessmentSystem';

const rootReducer = combineReducers({
	videos,
    activations,
    currentActivation,
    users,
    currentUser,
    currentAssessmentSystem
});

export default rootReducer;
