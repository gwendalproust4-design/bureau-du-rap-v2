import { useContext } from 'react';
import { AuthContext } from './AuthContextRef';

export const useAuth = () => useContext(AuthContext);
export default useAuth;
