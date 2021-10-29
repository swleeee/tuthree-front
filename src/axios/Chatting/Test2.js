import axios from 'axios';
import { TEST_URL } from '../index';

export function createChatRoom(req) {
  return axios({
    method: 'POST',
    url: `${TEST_URL}/chat`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}

export function getChatUserList(req) {
  return axios({
    method: 'GET',
    url: `${TEST_URL}/chat/list`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function getChatList(req) {
  return axios({
    method: 'GET',
    url: `${TEST_URL}/chat/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function sendMessage(req) {
  return axios({
    method: 'POST',
    url: `${TEST_URL}/chat/send`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}

export function sendFcm(req) {
  return axios({
    method: 'POST',
    url: `${TEST_URL}/chat/fcm-save`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}
