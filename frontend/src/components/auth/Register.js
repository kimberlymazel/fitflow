import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/axios";
import loginillustration from '../../icons/loginillustration.svg'
import logo from '../../icons/logo.png'

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
      <div className="register" style={{height:"100vh", display:"flex"}}>
        <div className="left"  style={{height:"100%", width:"100%", backgroundColor:"white", padding:"40px 40px 0px 0px", marginLeft:"40px"}}>
          <img src={logo} height={60}></img>
          <div className="regiscontainer" style={{margin:"70px 20px 20px 20px", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div className="regisbox">
              <h3 style={{color:"#531EB7", fontSize:"250%", fontWeight:900}}>Sign up</h3>
              <h3 style={{color:"#531EB7", fontSize:"140%", fontWeight:600, marginTop:"-25px", marginBottom:"9px"}}>Email</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={errors.email ? 'form-control error' : 'form-control'} style={{display:"flex", flexDirection:"column"}}>
                  <input
                    type="email"
                    placeholder="Enter email address" 
                    {...register('email', { required: '*This is a required field' })}
                    style={{width:"400px", fontSize:"20px", borderRadius:"5px", borderColor:"#AAAAAA", padding:"5px 5px 5px 5px", marginBottom:"6px"}}
                  />
                  {errors.email && <span className="error-message" style={{color:"#D30000", fontWeight:600,fontSize:"16px"}}>{errors.email.message}</span>}
                </div>

                <h3 style={{color:"#531EB7", fontSize:"140%", fontWeight:600, marginTop:"10px", marginBottom:"9px"}}>Username</h3>
                <div className={errors.username ? 'form-control error' : 'form-control'} style={{display:"flex", flexDirection:"column"}}>
                  <input
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
                    style={{width:"400px", fontSize:"20px", borderRadius:"5px", borderColor:"#AAAAAA", padding:"5px 5px 5px 5px", margin:"0px 0px 6px 0px"}}
                  />
                  {errors.username && <span className="error-message" style={{color:"#D30000", fontWeight:600,fontSize:"16px"}}>{errors.username.message}</span>}
                </div>

                <h3 style={{color:"#531EB7", fontSize:"140%", fontWeight:600, marginTop:"10px", marginBottom:"9px"}}>Password</h3>
                <div className={errors.password ? 'form-control error' : 'form-control'} style={{display:"flex", flexDirection:"column"}}>
                  <input
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
                    style={{width:"400px", fontSize:"20px", borderRadius:"5px", borderColor:"#AAAAAA", padding:"5px 5px 5px 5px", margin:"0px 0px 6px 0px"}}
                  />
                  {errors.password && <span className="error-message" style={{color:"#D30000", fontWeight:600,fontSize:"16px"}}>{errors.password.message}</span>}
                </div>
                
                <button type="submit" disabled={isSubmitting} style={{width:"100%",fontSize:"20px", background:"#531EB7", color:"white", border:"white",borderRadius:"5px", margin:"20px 0px 10px 0px",boxShadow:"2px 2px 2px 2px lightgrey", padding:"10px 5px 10px 5px"}}>
                  {isSubmitting ? 'Creating account...' : 'Register'}
                </button>
              </form>
              <button onClick={() => navigate('/login', { replace: true })} width="100%" style={{width:"100%",fontSize:"20px", background:"white", color:"black",fontWeight:"600", borderColor:"lightgrey",borderRadius:"5px", margin:"0px 0px 10px 0px",boxShadow:"2px 3px 2px 2px lightgrey", padding:"10px 5px 10px 5px"}}>
                Log in to an existing account
              </button>
              <ToastContainer />
                </div>
          </div>
          
        </div>
    

        <div class="illustration" style={{height:"100%", width:"120%", background:"linear-gradient(to bottom, #820BC5, #531EB7)", padding:"30px 30px 0px 0px", overflow:"hidden"}} >
            <h2 style={{color: 'white', fontSize:'300%', marginLeft:"12%" ,marginTop:'5%'}}>Welcome!</h2> 
            <h2 style={{color: 'white', fontSize:'200%', marginLeft:"13%" ,marginTop:'-3%', fontWeight:"400"}}>Ready to get fit?</h2> 
            <div style={{marginTop:"6%", marginLeft:"30px", marginRight:"auto",width:"100%", justifyContent:"center", alignItems:"center", display:"flex"}}>
              <img src={loginillustration} width={"650px"} ></img>
            </div>
            <div style={{height:"70%", marginTop:"-45%",width:"105%",background:"linear-gradient(to bottom right, #8B01A1, #ED8500)", boxShadow:"6px 2px 4px 4px #700396",borderRadius:"500% 500% 0 0"}}></div>
        </div>
      </div>
    );
  };