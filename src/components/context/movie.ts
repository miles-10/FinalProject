import {useSelector} from 'react-redux';

export const users = useSelector((state: any) => {
    return state.user.users
 });