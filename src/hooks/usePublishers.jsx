import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
// ... (your imports)

const usePublishers = () => {
    const axiosPublic = useAxiosPublic();
  
    const { data: publishers = [], isPending: loading, refetch } = useQuery({
      queryKey: ['publishers'],
      queryFn: async () => {
        const res = await axiosPublic.get('/publishers');
        return res.data;
      },
    });
  

      
      
  
    return [publishers, loading, refetch];
  };
  
  export default usePublishers;
  
