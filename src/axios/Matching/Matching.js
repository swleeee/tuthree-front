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

export function putTutoringInfo(req) {
  return axios({
    method: 'PUT',
    url: `${ROOT_URL}/room/alter`,
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

export function matchTutoring(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/room/info/accept`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function setBookmark(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/bookmark/add`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function getBookmark(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/bookmark`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function delBookmark(req) {
  return axios({
    method: 'DELETE',
    url: `${ROOT_URL}/bookmark/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}
