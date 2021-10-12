import axios from 'axios';
import { ROOT_URL } from '../index';

export function getTuteeList(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/tutee/list/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function getDetailTuteeList(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/tutee/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}
