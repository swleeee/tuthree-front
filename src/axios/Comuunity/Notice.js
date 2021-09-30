import axios from 'axios';
import { ROOT_URL } from '../index';

export function getNotice(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/faq/1`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}
