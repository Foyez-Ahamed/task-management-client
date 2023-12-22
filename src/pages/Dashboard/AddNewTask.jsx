import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const AddNewTask = () => {

   const { user } = useAuth(); 

   const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    control,
    reset,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const year = data.deadlineDate.getFullYear();
    const month = (data.deadlineDate.getMonth() + 1)
      .toString()
      .padStart(2, "0");
    const day = data.deadlineDate.getDate().toString().padStart(2, "0");
    const title = data?.title;
    const description = data?.description;
    const deadlineDate = `${year}-${month}-${day} `;
    const deadlineTime = data?.deadlineTime;
    const priority = data?.priority;
    const taskInfo = {
      title,
      description,
      deadlineDate,
      deadlineTime,
      priority,
      type : 'To-Do',
      userEmail : user?.email
    };

    axiosPublic.post('/api/createTask', taskInfo)
    .then(res => {
        console.log(res.data);
        if(res.data.insertedId) {
            toast.success('Task created successfully')
            reset();
        } else {
            toast.error('error')
        }
    })

  };

  return (
    <div className="w-[90%] mx-auto mt-20">
      <div className="mt-10 text-center font-bold text-3xl">
        <h1>Add New Task</h1>
      </div>

      <section className="flex justify-center items-center shadow-xl rounded-xl p-3 mx-auto bg-gray-100 mt-10">
        <div className="w-full md:w-[80%]">
          <div className="mt-10">
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col md:flex-col gap-6">
                <div className="section-1">
                  <div className="form-control">
                    <label>Title</label>
                    <input
                      type="text"
                      {...register("title")}
                      placeholder="Enter your product name"
                      className="input mt-2 w-full "
                    />
                  </div>
                </div>

                <div className="flex justify-evenly">
                  <div className="form-control">
                    <label>DeadlineDate</label>
                    <Controller
                      control={control}
                      name="deadlineDate"
                      render={({ field }) => (
                        <DatePicker
                          selected={field.value}
                          onChange={(date) => field.onChange(date)}
                          className="input mt-2 w-full md:w-[170px] "
                        />
                      )}
                    />
                  </div>
                  <div className="form-control">
                    <label>DeadlineTime</label>
                    <Controller
                      control={control}
                      name="deadlineTime"
                      render={({ field }) => (
                        <TimePicker
                          onChange={(time) => field.onChange(time)}
                          value={field.value}
                          className="input mt-2 w-full md:w-[190px] "
                        />
                      )}
                    />
                  </div>

                  <div className="form-control mb-4">
                    <label>Priority</label>
                    <select
                      {...register("priority")}
                      className="input mt-2 w-full md:w-[180px] "
                    >
                      <option value="">Select Priority</option>
                      <option value="Low">Low</option>
                      <option value="Moderate">Moderate</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-6">
                  <div className="form-control ">
                    <label>Task Description</label>
                    <textarea
                      {...register("description")}
                      className="textarea textarea-bordered mt-2 w-full lg:w-[550px]"
                      placeholder="Description"
                    ></textarea>
                  </div>
                </div>
              </div>

              <button className="mt-8 mb-6 w-full px-5 py-2 text-white font-bold rounded-md bg-[#0087EB] hover:bg-[#111827] flex justify-center items-center gap-2">
                Add Task
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddNewTask;
