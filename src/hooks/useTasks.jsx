import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useTasks = () => {


    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data : tasks = [], refetch } = useQuery({
        queryKey : ['tasks', user?.email],
        enabled: !!user?.email,
        queryFn : async() => {
            const res = await axiosPublic.get(`/api/getTask/${user?.email}`)
            return res.data;
        }

    })

    return [tasks, refetch];


};

export default useTasks;