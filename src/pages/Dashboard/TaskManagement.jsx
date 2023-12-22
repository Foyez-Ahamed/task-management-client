import useTasks from "../../hooks/useTasks";
const TaskManagement = () => {

    const [tasks] = useTasks();

    console.log(tasks);

    return (
      
        <div className="mt-20">
           
           <section className="flex flex-col lg:flex-row justify-evenly gap-8">
            <div className="bg-[#9476b1] px-10 py-2 rounded-md font-bold text-white">
                <h1>To-Do</h1>
            </div>

            <div className="bg-zinc-800 px-10 py-2 rounded-md font-bold text-white">
                <h1>Ongoing</h1>
            </div>

            <div className="bg-green-600 px-10 py-2 rounded-md font-bold text-white">
                <h1>Complete</h1>
            </div>
           </section>

        </div>

    );
};

export default TaskManagement;