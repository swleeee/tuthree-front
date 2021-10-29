import axios from 'axios';
import { TEST_URL } from '../index';

export function setTutorReview(req) {
  return axios({
    method: 'POST',
    url: `${TEST_URL}/room/review`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}

export function getTutorReview(req) {
  return axios({
    method: 'GET',
    url: `${TEST_URL}/tutor/review/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}
