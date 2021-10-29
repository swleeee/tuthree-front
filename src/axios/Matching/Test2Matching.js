import axios from 'axios';
import { TEST_URL } from '../index';

export function setTutoringInfo(req) {
  return axios({
    method: 'POST',
    url: `${TEST_URL}/room/create`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}

export function putTutoringInfo(req) {
  return axios({
    method: 'PUT',
    url: `${TEST_URL}/room/alter`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}

export function getTutoringInfo(req) {
  return axios({
    method: 'GET',
    url: `${TEST_URL}/room/info`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function matchTutoring(req) {
  return axios({
    method: 'GET',
    url: `${TEST_URL}/room/info/accept`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function setBookmark(req) {
  return axios({
    method: 'GET',
    url: `${TEST_URL}/bookmark/add`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function getBookmark(req) {
  return axios({
    method: 'GET',
    url: `${TEST_URL}/bookmark`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function delBookmark(req) {
  return axios({
    method: 'DELETE',
    url: `${TEST_URL}/bookmark/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}
