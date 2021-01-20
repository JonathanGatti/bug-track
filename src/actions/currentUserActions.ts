import { LOG_IN, LOG_OUT} from './types';

export const logInUser = (userId: string) => ({type: LOG_IN, payload: userId})

export const logOutUser = () => ({type: LOG_OUT})
