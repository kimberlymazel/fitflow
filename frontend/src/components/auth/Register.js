import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/axios";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
export const Register = () => {
    const {
      handleSubmit,
      register,
      formState: { errors, isSubmitting },
    } = useForm();
    const navigate = useNavigate();
  
    const onSubmit = async (values) => {
      try {
        await axiosInstance.post("/users/create", values);
        showToast('success', 'Account created successfully.');
        navigate("/login", { replace: true });
      } catch (err) {
        showToast('error', err.response.data.detail);
      }
    };

    const showToast = (status, message) => {
        toast[status](message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1500
        });
      };

    return (
      <div className="register">
      <h3>Register</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={errors.email ? 'form-control error' : 'form-control'}>
          <input
            type="email"
            placeholder="Email"
            {...register('email', { required: 'This is a required field' })}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>
        <div className={errors.username ? 'form-control error' : 'form-control'}>
          <input
            type="text"
            placeholder="Username"
            {...register('username', {
              required: 'This field is required',
              minLength: {
                value: 5,
                message: 'Username must be at least 5 characters',
              },
              maxLength: {
                value: 24,
                message: 'Username must be at most 24 characters',
              },
            })}
          />
          {errors.username && <span className="error-message">{errors.username.message}</span>}
        </div>
        <div className={errors.password ? 'form-control error' : 'form-control'}>
          <input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'This is a required field',
              minLength: {
                value: 5,
                message: 'Password must be at least 5 characters long',
              },
              maxLength: {
                value: 24,
                message: 'Password must be at most 24 characters',
              },
            })}
          />
          {errors.password && <span className="error-message">{errors.password.message}</span>}
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating account...' : 'Register'}
        </button>
      </form>
      <button onClick={() => navigate('/login', { replace: true })} width="100%">
        Login Instead
      </button>
      <ToastContainer />
      </div>
    );
  };