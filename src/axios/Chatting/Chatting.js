import axios from 'axios';
import { ROOT_URL } from '../index';

export function createChatRoom(req) {
  return axios({
    method: 'POST',
    url: `${ROOT_URL}/chat`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}

export function getChatUserList(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/chat/list`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function getChatList(req) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/chat/${req.id}`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
  });
}

export function sendMessage(req) {
  return axios({
    method: 'POST',
    url: `${ROOT_URL}/chat/send`,
    params: req.params ? req.params : null,
    headers: req.headers ? req.headers : null,
    data: req.data,
  });
}
