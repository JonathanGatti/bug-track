import {  CommentInterface } from '../../interfaces';
import comments from '../baseUrl';

export const getComments = async () => {
  try {
    const res = await comments.get('/comments')
    return res.data;
  } catch (err){
    console.log(err)
  }
} 

export const getComment = async (id: string) => {
  try {
    const res = await comments.get(`comments/${id}`);
    return res.data;
  } catch(err){
    console.log(err);
  }
}
export const postComment = async (data: CommentInterface) => {
  try {
    const res = await comments.post('/comments', 
    data
    ,{
      headers: {
        'Content-Type': 'application/json',
      }
    }) 
    return res.data;
    }catch(err){
      console.log(err);
  }
}

export const patchComment = async (id: any, data: any) => {
  try {
    let res = await comments.patch(`/comments/${id}`, data)
    return res.data 
  } catch(err) {
    console.log(err);
  }
}

export const deleteCommentById = async (id: string) => {
  try {
    await comments.delete(`/comments/${id}`)
    return id;
  } catch (err){
    console.log(err);
  }
}

