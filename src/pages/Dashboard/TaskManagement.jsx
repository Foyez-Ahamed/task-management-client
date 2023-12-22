import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useTasks from "../../hooks/useTasks";

import { MdAutoDelete } from "react-icons/md";
import toast from "react-hot-toast";

const TaskManagement = () => {

    const [ tasks, refetch ] = useTasks();

    const axiosPublic = useAxiosPublic();

    const handleTaskDelete = (id) => {
        
        Swal.fire({
            title: "Are you sure?",
            text: "Want to remove task?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
                axiosPublic.delete(`/api/removeTask/${id}`)
                .then(res => {
                    console.log(res.data);

                    if(res.data.deletedCount > 0) {
                        toast.success('Task remove successfully')
                        refetch();
                    }
                })

            }
          });

    }

    return (
      
        <div className="mt-20">
           
           <section className="flex flex-col lg:flex-row justify-evenly gap-8">

            <div>
            <div className="bg-[#9476b1] px-10 py-2 rounded-md font-bold text-white text-center">
                <h1>To-Do : {tasks.length}</h1>
            </div>
             
             {/* task here */}

            <div className="mt-10">
                {
                    tasks.map(task => <div key={task._id} className="card shadow-lg">
                    <div className="card-body items-center text-center">
                      <h1 className="font-bold">Title: {task.title}</h1>  
                      <h2 className="card-title">Deadline Date: {task.deadlineDate}</h2>
                      <p>Deadline Time : {task.deadlineTime}</p>
                      <div className="card-actions justify-end">

                        <button onClick={() => handleTaskDelete(task._id)}><MdAutoDelete className="text-red-600 text-2xl"/></button>

                      </div>
                    </div>
                  </div>)
                }
            </div>

            </div>

           <div>
           <div className="bg-zinc-800 px-10 py-2 rounded-md font-bold text-white">
                <h1>Ongoing</h1>
            </div>
           </div>

             <div>
             <div className="bg-green-600 px-10 py-2 rounded-md font-bold text-white">
                <h1>Complete</h1>
            </div>
             </div>

           </section>

        </div>

    );
};

export default TaskManagement;