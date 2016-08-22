import React, { PropTypes, Component } from 'react';
import shallowEqual from 'react-redux/lib/utils/shallowEqual';

function mapParams(paramKeys, params) {
  if (!params) {
    return paramKeys;
  }
  return paramKeys.reduce((acc, key) => {
    return Object.assign({}, acc, { [key]: params[key] });
  }, {});
}

export default function fetchOnUpdate(paramKeys, fn) {
  return DecoratedComponent =>
  class FetchOnUpdateDecorator extends Component {
    componentWillMount() {
      fn(mapParams(paramKeys, this.props.params), this.props.actions);
    }

    componentDidUpdate(prevProps) {
      const params = mapParams(paramKeys, this.props.params);
      const prevParams = mapParams(paramKeys, prevProps.params);

      if (!shallowEqual(params, prevParams)) {
        fn(params, this.props.actions);
      }
    }

    render() {
      return (
        <DecoratedComponent {...this.props} />
      );
    }
  };
}