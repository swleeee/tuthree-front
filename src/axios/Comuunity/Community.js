import axios from 'axios';
import { ROOT_URL } from '../index';

export function getCommunity(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/community/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}
