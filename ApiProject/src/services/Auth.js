import AsyncStorage from "@react-native-async-storage/async-storage";
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
  try {
    const stringifiedResponse = JSON.stringify(response)
    await AsyncStorage.setItem('userData', stringifiedResponse)
  } catch (error) {
    console.log(error)
  }
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

export const update = async (body, token) => {
  const parseJson = JSON.parse(token);
  // console.log("Check Here", parseJson.token);
  const res = await fetch(BASE_URL + 'user/me', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${parseJson.token}`,


    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  console.log(response);
  return response;
};
