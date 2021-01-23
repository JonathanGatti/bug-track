import { LOG_IN, LOG_OUT} from './types';

export const logInUser = (currentUser: any) => {
  return ({type: LOG_IN, payload: currentUser})
}

export const logOutUser = () => ({type: LOG_OUT})
