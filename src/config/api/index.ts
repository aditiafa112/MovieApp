import {objectString} from '../../helpers';

const headers = (
  token: any = false,
  multipart: boolean = false,
  bintari: boolean = false,
) => {
  let data: any;
  data = {
    'Content-Type': multipart ? 'multipart/form-data' : 'application/json',
  };
  if (token) {
    data = {
      'Content-Type': multipart ? 'multipart/form-data' : 'application/json',
      authorization: bintari ? 'jwt ' + token : 'bearer ' + token,
    };
  }
  return data;
};

export const requestPost = (data: any, url: any, token: any) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: headers(token),
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const requestPostMultipart = (data: any, url: any, token: any) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: headers(token, true),
      body: data,
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const requestGet = (
  data: any,
  url: any,
  token: any,
  bintari: any = false,
) => {
  return new Promise((resolve, reject) => {
    fetch(`${url}${objectString(data)}`, {
      method: 'GET',
      headers: headers(token, false, bintari),
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
