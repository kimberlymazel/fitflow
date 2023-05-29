import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/axios";
import loginillustration from '../../icons/loginillustration.svg'
import logo from '../../icons/logo.png'
import '../../style/auth/register.css'

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
        <div className="leftregister">
          <img src={logo} height={60}></img>
          <div className="regiscontainer">
            <div className="regisbox">
              <h3 className="regisboxtitle">Sign up</h3>

              {/*==========Email Regis===========*/}
              <h3 className="emailregisinputtitle">Email</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={errors.email ? 'form-control error' : 'form-control'} style={{display:"flex", flexDirection:"column"}}>
                  <input
                    className="emailinputfieldregis"
                    type="email"
                    placeholder="Enter email address" 
                    {...register('email', { required: '*This is a required field' })}
                  />
                  {errors.email && <span className="error-message" style={{color:"#D30000", fontWeight:600,fontSize:"16px"}}>{errors.email.message}</span>}
                </div>

                {/*==========Username Regis===========*/}
                <h3 className="usernameregisinputtitle">Username</h3>
                <div className={errors.username ? 'form-control error' : 'form-control'} style={{display:"flex", flexDirection:"column"}}>
                  <input
                    className="usernameinputfieldregis"
                    type="text"
                    placeholder="Enter username"
                    {...register('username', {
                      required: '*This is a required field',
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
                  {errors.username && <span className="error-message" style={{color:"#D30000", fontWeight:600,fontSize:"16px"}}>{errors.username.message}</span>}
                </div>

                {/*==========Password Regis===========*/}
                <h3 className="passwordregisinputtitle">Password</h3>
                <div className={errors.password ? 'form-control error' : 'form-control'} style={{display:"flex", flexDirection:"column"}}>
                  <input
                    className="passwordinputfieldregis"
                    type="password"
                    placeholder="Enter password"
                    {...register('password', {
                      required: '*This is a required field',
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
                  {errors.password && <span className="error-message" style={{color:"#D30000", fontWeight:600,fontSize:"16px"}}>{errors.password.message}</span>}
                </div>

                {/*========BUTTONS===========*/}
                <button type="submit" disabled={isSubmitting} className="registerbtnregis">
                  {isSubmitting ? 'Creating account...' : 'Register'}
                </button>
              </form>
                <button onClick={() => navigate('/login', { replace: true })} className="loginbtnregis">Log in to an existing account</button>
                <ToastContainer />
              </div>
          </div>
        </div>

        {/*=======UI Decoration=========*/}
        <div class="illustrationregis" >
            <h2 className="illusregiswelcome">Welcome!</h2> 
            <h2 className="illusregisready">Ready to get fit?</h2> 
            <div className="illusimagediv">
              <img src={loginillustration} width={"650px"} ></img>
            </div>
            <div className="regishalfcircledeco"></div>
        </div>

      </div>
    );
  };