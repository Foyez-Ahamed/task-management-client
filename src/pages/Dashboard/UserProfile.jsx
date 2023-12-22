import useAuth from '../../hooks/useAuth';

const UserProfile = () => {

    const { user } = useAuth();
    return (
        <div className='space-y-3 text-center mt-20 w-[80%] mx-auto'>
            <div className='mb-8 space-y-2'>
            <img className='w-[100px] h-[100px] rounded-full mx-auto' src={user?.photoURL} alt="profile_picture" />

            <h1 className='text-lg font-medium'>{user?.displayName}</h1>

            <h1 className='text-lg font-medium'>{user?.email}</h1>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>

                <div className="flex border-2 flex-col items-center gap-3 px-8 py-10 bg-white rounded-lg shadow-lg">
                    <h3 className='font-bold'>To-Do: 0</h3>
                </div>

                <div className="flex border-2 flex-col items-center gap-3 px-8 py-10 bg-white rounded-lg shadow-lg">
                    <h3 className='font-bold'>Ongoing: 0</h3>
                </div>
                <div className="flex border-2 flex-col items-center gap-3 px-8 py-10 bg-white rounded-lg shadow-lg">
                    <h3 className='font-bold'>Completed: 0</h3>
                </div>
                
            </div>
        </div>
    );
};

export default UserProfile;