import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {
    const axiosPublic = useAxiosPublic();

    const { data: users = [], isPending: loading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
          try {
            const res = await axiosPublic.get('/users');
            return res.data; 
          } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
          }
        }
      });
      
      

    return [users, loading, refetch]
};

export default useUser;