import _ from 'lodash';
import Base from './Base';

export default class Videos extends Base {
    get() {
        return this.apiClient.get('videos/', {}, {})
        	.then(d => _.sortBy(d, 'time').reverse());
    }

    getLatest() {
        return this.apiClient.get('videos/latest', {}, {})
        	.then(d => d);
    }
}