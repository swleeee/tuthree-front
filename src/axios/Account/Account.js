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

export function tuteeSignup(req) {
  return axios({
    method: 'POST',
    url: `${ROOT_URL}/register/tutee`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}

export function parentSignup(req) {
  return axios({
    method: 'POST',
    url: `${ROOT_URL}/register/parent`,
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

export function logout(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/logout`,
    // params: req.params ? req.params : null,
    // headers: req.headers ? req.headers : null,
  });
}

export function adminLogin(req) {
  return axios({
    method: 'POST',
    url: `${ROOT_URL}/admin/in`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}

export function adminLogout(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/admin/out`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function getUserList(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/admin/userlist`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function getDetailUserList(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/user/${req.grade}/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function deleteUser(req) {
  return axios({
    method: 'DELETE',
    url: `${ROOT_URL}/user/${req.grade}/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}
