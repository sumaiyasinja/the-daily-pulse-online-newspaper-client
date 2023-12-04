import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
const useApprovedArticles = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: articles = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosPublic.get("articles-approved");
      return res.data;
    },
  });

  return [articles, loading, refetch];
};

export default useApprovedArticles;
