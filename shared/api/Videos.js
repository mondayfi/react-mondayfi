import Base from './Base';

export default class Videos extends Base {
    get() {
        return this.apiClient.get('videos/', {}, {});
    }
}