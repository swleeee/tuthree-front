import axios from 'axios';
import { ROOT_URL } from '../index';

export function getNotice(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/notice/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function getDetailNotice(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/notice/id/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function setAdminNotice(req) {
  console.info(req);
  return axios({
    method: 'POST',
    url: `${ROOT_URL}/notice/admin/write`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}

export function putAdminNotice(req) {
  console.info(req);
  return axios({
    method: 'PUT',
    url: `${ROOT_URL}/notice/admin/id/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}

export function delAdminNotice(req) {
  return axios({
    method: 'DELETE',
    url: `${ROOT_URL}/notice/admin/id/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}
