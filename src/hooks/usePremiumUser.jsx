import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const usePremiumUser = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    
    const { data: isPremiumTaken, isLoading: isPremiumLoading } = useQuery({
        // queryKey: [user?.email, 'isPremiumTaken'],
        queryKey: ['premiumTaken', user?.email],

        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/users/premium/${user?.email}`);
                return res.data?.isPremiumTaken;
            } catch (error) {
                console.error('Error fetching premium user:', error);
                throw error;
            }
        },
        onError: (error) => {
            // Handle errors here
            console.error('Error during query:', error);
        },
    });
    

    return [isPremiumTaken, isPremiumLoading];
};

export default usePremiumUser;
