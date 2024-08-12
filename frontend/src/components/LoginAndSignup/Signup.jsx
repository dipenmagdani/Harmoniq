import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (formData) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch('/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await response.json();
      if (response.status === 201) {
        toast.success(data.message);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        toast.error(data.message);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    // Check if the user is already logged in and redirect
    if (document.cookie.includes('uid')) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <Toaster richColors position="bottom-right" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto mt-5 bg-[#16161d] rounded-3xl border-2 border-gray-700/30 p-8">
          <h1 className="text-2xl mb-6 font-bold text-center">Register Now</h1>
          <div className="space-y-8">
            <div className="name">
              <h1 className="text-sm font-bold text-gray-500">Name</h1>
              <input
                {...register('name', { required: true })}
                className="w-full h-10 mt-2 border-b-2 border-gray-700/30 text-white/60 bg-transparent outline-none placeholder:text-gray-500/30 focus:border-b-2 focus:border-white"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="email">
              <h1 className="text-sm font-bold text-gray-500">Email</h1>
              <input
                {...register('email', { required: true })}
                className="w-full h-10 mt-2 border-b-2 border-gray-700/30 text-white/60 bg-transparent outline-none placeholder:text-gray-500/30 focus:border-b-2 focus:border-white"
                placeholder="music@beats.com"
                type="email"
              />
            </div>
            <div className="password">
              <h1 className="text-sm font-bold text-gray-500">Password</h1>
              <input
                {...register('password', { required: true })}
                className="w-full h-10 mt-2 border-b-2 border-gray-700/30 text-white/60 bg-transparent outline-none placeholder:text-gray-500/30 text-2xl focus:border-b-2 focus:border-white"
                placeholder="*********"
                type="password"
              />
            </div>
          </div>
          <button
            className={`mt-8 w-full h-12 bg-[#c41330] hover:bg-black/30 rounded-xl hover:border-2 hover:border-gray-700/30 ${
              isLoading && 'bg-black/60 border-2 border-gray-700/50'
            }`}
          >
            {isLoading ? (
              <ScaleLoader color="#950202" height={9} radius={23} width={2} />
            ) : (
              'Sign Up'
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default Signup;
