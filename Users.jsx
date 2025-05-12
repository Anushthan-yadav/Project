import { toast } from 'react-toastify';

const Users = ({ users, setusers }) => {
  const deleteHandler = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setusers(filteredUsers);
    toast.success('User deleted successfully!');
  };

  return (
    <div className="bg-gray-400 p-4 rounded-lg shadow-md h-full">
      <h2 className="text-2xl font-bold mb-4">Users List</h2>
      {users.length !== 0 ? (
        <ul className="space-y-3">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center justify-between bg-gray-100 rounded p-3 hover:bg-gray-200 transition-colors"
            >
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <button
                onClick={() => deleteHandler(user.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 italic">No users found. Sign up to create users.</p>
      )}
    </div>
  );
};

export default Users;