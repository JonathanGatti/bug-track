import { Issue } from '../../interfaces';
import issues from '../baseUrl';

export const getIssues = async () => {
  try {
    const res = await issues.get('/issues')
    return res.data;
  } catch (err){
    console.log(err)
  }
} 

export const getIssue = async (id: string) => {
  try {
    const res = await issues.get(`issues/${id}`);
    return res.data;
  } catch(err){
    console.log(err);
  }
}
export const postIssue = async (data: Issue) => {
  try {
    const res = await issues.post('/issues', 
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

export const patchIssue = async (id: any, data: Issue) => {
  try {
    let res = await issues.patch(`/issues/${id}`, data)
    return res.data 
  } catch(err) {
    console.log(err);
  }
}

export const deleteIssueById = async (id: string) => {
  try {
    await issues.delete(`/issues/${id}`)
    return id;
  } catch (err){
    console.log(err);
  }
}

