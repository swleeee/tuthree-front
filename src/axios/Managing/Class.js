import axios from 'axios';
import { ROOT_URL } from '../index';

export function getClass(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/room`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function getDetailClass(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/room/find`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}
