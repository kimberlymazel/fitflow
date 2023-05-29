import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import loginillustration from '../../icons/loginillustration.svg'
import logo from '../../icons/logo.png'
import '../../style/auth/login.css'
  
export const Login = () => {
    const {
      handleSubmit,
      register,
      formState: { errors, isSubmitting },
    } = useForm();
    const navigate = useNavigate();
    const { login } = useAuth();
  
    const onSubmit = async (values) => {
      try {
        await login(values.email, values.password);
      } catch (error) {
        alert("Invalid email or password");
      }
    };
    return (
      <div className="login">

        {/*=========LOGIN FORM=========*/}
        <div className="leftsection">
          <img src={logo} height={60}></img>
          <div className="logincontainer">
            <div class="loginbox">
              <h3 class="loginboxtitle">Log in</h3>

              {/*===========Email inputs=============*/}
              <h3 class="inputtitle1">Email</h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={errors.email ? "error" : ""} 
                      style={{
                        display:"flex", 
                        flexDirection:"column"
                        }}>
                    <input 
                      className="emailinputfield"
                      placeholder="Enter email address"
                      type="email"
                      {...register("email", {
                        required: "*This is required field",
                      })}
                    />
                    {errors.email && <span style={{color:"#D30000", fontWeight:600,fontSize:"16px"}}>{errors.email.message}</span>}
                  </div>

                  {/*==========Password inputs===========*/}
                  <h3 className="inputtitle2">Password</h3>
                  <div className={errors.password ? "error" : ""} style={{display:"flex", flexDirection:"column"}}>
                    <input
                      className="passinputfield"
                      placeholder="Enter password"
                      type="password"
                      {...register("password", {
                        required: "*This is required field",
                      })}
                    />
                    {errors.password && <span style={{color:"#D30000", fontWeight:600,fontSize:"16px"}} >{errors.password.message}</span>}
                  </div>
                    
                  {/*============REMEMBER ME TICKBOX============*/}
                  <div className="rememberme">
                    <input type="checkbox"></input>
                    <h6 className="remembermetitle">Remember me</h6>
                  </div>
                  
                  {/*==============Buttons==============*/}
                  <button disabled={isSubmitting} className="loginbtn" type="submit" >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </button>
                  </form>
                <button onClick={() => navigate("/register", { replace: true })} className="registerbtn">Create a new account</button>
            </div>
             
          </div>
          
        </div>


        <div className="illustration" >
            <h2 className="welcometitle">Welcome Back!</h2> 
            <h2 className="welcomedesc">Ready to get fit?</h2> 
            <div className="illuscontainer">
              <img src={loginillustration} width={"650px"} ></img>
            </div>
            <div className="halfcircledeco"></div>
        </div>
         
      </div>
    );
  };