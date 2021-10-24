import axios from 'axios';
import { ROOT_URL } from '../index';

export function getUserInfo(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/user/mypage`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function putUserInfo(req) {
  return axios({
    method: 'PUT',
    url: `${ROOT_URL}/user/mypage`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}
