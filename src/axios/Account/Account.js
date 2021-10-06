import axios from 'axios';
import { ROOT_URL } from '../index';

export function tutorSignup(req) {
  return axios({
    method: 'POST',
    url: `${ROOT_URL}/register/tutor`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}

export function checkId(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/register/${req.id}/checkid`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function login(req) {
  return axios({
    method: 'POST',
    url: `${ROOT_URL}/login`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}
