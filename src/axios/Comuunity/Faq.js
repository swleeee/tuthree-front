import axios from 'axios';
import { ROOT_URL } from '../index';

export function getFaq(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/faq/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function getAdminFaq(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/faq/admin/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function setAdminFaq(req) {
  console.info(req);
  return axios({
    method: 'POST',
    url: `${ROOT_URL}/faq/admin/write`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}

export function putAdminFaq(req) {
  console.info(req);
  return axios({
    method: 'PUT',
    url: `${ROOT_URL}/faq/admin/id/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}

export function delAdminFaq(req) {
  return axios({
    method: 'DELETE',
    url: `${ROOT_URL}/faq/admin/id/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}
