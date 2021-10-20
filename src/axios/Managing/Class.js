import axios from 'axios';
import { ROOT_URL } from '../index';

export function getClass(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/room`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function getDetailClass(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/room/find`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function setSchedule(req) {
  return axios({
    method: 'POST',
    url: `${ROOT_URL}/room/calendar`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}
export function putSchedule(req) {
  return axios({
    method: 'PUT',
    url: `${ROOT_URL}/room/calendar/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}
export function getSchedule(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/room/calendar`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function getDetailSchedule(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/room/calendar/date`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}
