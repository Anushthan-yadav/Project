import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Signin = ({ settoggler, users, setusers }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = (data) => {
    const user = users.find(user => user.email === data.email && user.password === data.password);
    
    if (user) {
      toast.success('User signed in successfully!');
    } else {
      toast.error('No user found or incorrect credentials!');
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="w-[80%] mx-auto p-8 bg-gray-400 rounded-lg shadow-md">
      <h1 className="text-5xl  font-black mb-7">Get back to the same</h1>

      <div className="mb-4  ">
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div className="mb-6">
        <input
          {...register("password", { required: "Password is required" })}
          type="password"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-black text-gray-700  py-2 px-4 rounded hover:bg-gray-800 transition-colors"
      >
        Sign In
      </button>

      <p className="mt-4 text-center">
        Don't have an account?{' '}
        <button
          type="button"
          onClick={() => settoggler(false)}
          className="text-blue-500 hover:underline focus:outline-none"
        >
          Sign Up
        </button>
      </p>
    </form>
  );
};

export default Signin;