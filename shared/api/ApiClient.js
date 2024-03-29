import fetch       from 'isomorphic-fetch';
import queryString from 'query-string';
import Promise     from 'bluebird';
import _           from 'lodash';

export default class ApiClient {
    constructor({ prefix = 'api/v1' } = {}) {
        this.prefix = prefix;
    }

    get(requestUrl, payload = {}, params = {}) {
        return this.request({
            url: requestUrl,
            method: 'get',
            body: payload,
            params
        });
    }

    put(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'put',
            body: payload
        });
    }

    patch(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'put',
            body: payload
        });
    }

    post(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'post',
            body: payload
        });
    }

    delete(requestUrl) {
        return this.request({
            url: requestUrl,
            method: 'delete'
        });
    }

    request({ url, method, params = {}, body }) {
        if (this.authToken) {
            /* eslint-disable */
            params.token = this.authToken;
            /* eslint-enable */
        }

        const urlWithQuery = _.isEmpty(params) || !params ? url : `${url}?${queryString.stringify(params)}`;

        const init = {
            method,
            mode: 'cors',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };

        if (method !== 'get' && method !== 'head') {
            init.body = JSON.stringify(body);
        }

        return fetch(`${this.prefix}/${urlWithQuery}`, init).then(res => {
            if (res.status >= 400) {
                throw new Error('Bad response from server');
            }

            return res.json();
        }).then(data => {
            if (data) {
                return data;
            }

            return Promise.reject(data.error);
        });
    }

    setAuthToken(authToken) {
        this.authToken = authToken;
    }
}
