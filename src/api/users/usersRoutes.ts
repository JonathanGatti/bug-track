import users from '../baseUrl';
import {Author} from '../../interfaces';

export const getUsers = async () => {
  try {
    const res = await users.get('/users');
    return res.data
  } catch(err){
    console.log(err);
  }
}

export const getUserById = async (id: string) => {
  try {
    const res = await users.get(`/users/${id}`);
    return res.data;
  } catch(err){
    console.log(err)
  }
}

export const postUser = async (data: Author) => {
  try {
    users.post('/users', 
    data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    return data
  } catch (err){
    console.log(err);
  }
}

export const patchUser = async (id: string, data: any) => {
  try {
    let res = await users.patch(`/users/${id}`, data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};


export const logIn = async (data: any) => {
  try {
    const res = await users.post('/users/login', 
    data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    return res
  } catch (err){
    console.log(err);
  }
}

export const deleteUserById = async (id:string) => {
  try {
    await users.delete(`/users/${id}`);
    return id;
  } catch(err){
    console.log(err);
  }
}