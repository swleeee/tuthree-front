import axios from 'axios';
import { ROOT_URL } from '../index';

export function setTutoringInfo(req) {
  return axios({
    method: 'POST',
    url: `${ROOT_URL}/room/create`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}

export function getTutoringInfo(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/room/info`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}
