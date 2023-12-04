import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const usePremiumUser = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isPremiumTaken, isPending: isPremiumLoading } = useQuery({
        queryKey: [user?.email, 'isPremiumTaken'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/premium/${user.email}`);
            return res.data?.admin;
        }
    })
    return [isPremiumTaken, isPremiumLoading]
};
      

export default usePremiumUser;