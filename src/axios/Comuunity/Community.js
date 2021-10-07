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

export function getDetailCommunity(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/community/id/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}
export function downloadFile(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/community/download/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    // responseType: 'blob',
    // responseType: 'arraybuffer',
  });
}

export function setCommunity(req) {
  return axios({
    method: 'POST',
    url: `${ROOT_URL}/community/write`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}

export function putCommunity(req) {
  return axios({
    method: 'PUT',
    url: `${ROOT_URL}/community/id/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}

export function delCommunity(req) {
  return axios({
    method: 'DELETE',
    url: `${ROOT_URL}/community/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function searchCommunity(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/community`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}
