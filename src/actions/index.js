import * as types from './types';

export const getData = () => {
  return {
    type: types.GET_DATA,
    payload: 'test'
  }
}
