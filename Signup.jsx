import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Signup = ({ settoggler, users, setusers }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = (data) => {
    const userExists = users.some(user => user.email === data.email);
    
    if (userExists) {
      toast.error('User already exists!');
      return;
    }

    const newUser = {
      id: Date.now().toString(),
      ...data
    };
    
    setusers([...users, newUser]);
    toast.success('User created successfully!');
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="w-[80%] mx-auto p-8 bg-gray-400 rounded-lg shadow-md">
      <h1 className="text-5xl font-black mb-7">Join the community</h1>
      
      <div className="mb-4  bg-gray-400">
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>
      
      <div className="mb-4">
        <input
          {...register("email", { 
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          type="email"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>
      
      <div className="mb-6">
        <input
          {...register("password", { 
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters"
            }
          })}
          type="password"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>
      
      <button
        type="submit"
        className="w-full bg-black text-gray-700 py-2 px-4 rounded hover:bg-gray-800 transition-colors"
      >
        Sign Up
      </button>
      
      <p className="mt-4 text-center">
        Already have an account?{' '}
        <button
          type="button"
          onClick={() => settoggler(true)}
          className="text-blue-500 hover:underline focus:outline-none"
        >
          Sign In
        </button>
      </p>
    </form>
  );
};

export default Signup;