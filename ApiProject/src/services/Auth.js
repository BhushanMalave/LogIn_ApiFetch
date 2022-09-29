const BASE_URL = 'https://api-nodejs-todolist.herokuapp.com/';

export const signIn = async body => {
  const res = await fetch(BASE_URL + 'user/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  console.log(response);
  return response;
};

export const signUp = async body => {
  const res = await fetch(BASE_URL + 'user/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  console.log(response);
  return response;
};
