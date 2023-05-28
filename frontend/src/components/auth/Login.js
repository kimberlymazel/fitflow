import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import loginillustration from '../../icons/loginillustration.svg'
import logo from '../../icons/logo.png'

  
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
      <div className="login" style={{height:"100vh", display:"flex"}}>

        <div className="left" style={{height:"100%", width:"100%", backgroundColor:"white", padding:"40px 40px 0px 0px", marginLeft:"40px"}} >
          <img src={logo} height={60}></img>
          <div className="logincontainer" style={{margin:"70px 20px 20px 20px", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div class="loginbox">
              <h3 style={{color:"#531EB7", fontSize:"250%", fontWeight:900}}>Log in</h3>
              <h3 style={{color:"#531EB7", fontSize:"140%", fontWeight:600, marginTop:"-25px", marginBottom:"9px"}}>Email</h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={errors.email ? "error" : ""} style={{display:"flex", flexDirection:"column"}}>
                    <input
                      placeholder="Enter email address"
                      type="email"
                      {...register("email", {
                        required: "*This is required field",
                      })}
                      style={{width:"400px", fontSize:"20px", borderRadius:"5px", borderColor:"#AAAAAA", padding:"5px 5px 5px 5px", marginBottom:"6px"}}
                    />
                    {errors.email && <span style={{color:"#D30000", fontWeight:600,fontSize:"16px"}}>{errors.email.message}</span>}
                  </div>

                  <h3 style={{color:"#531EB7", fontSize:"140%", fontWeight:600, marginTop:"20px", marginBottom:"9px"}}>Email</h3>
                  <div className={errors.password ? "error" : ""} style={{display:"flex", flexDirection:"column"}}>
                    <input
                      placeholder="Password"
                      type="password"
                      {...register("password", {
                        required: "*This is required field",
                      })}
                      style={{width:"400px", fontSize:"20px", borderRadius:"5px", borderColor:"#AAAAAA", padding:"5px 5px 5px 5px", margin:"0px 0px 6px 0px"}}
                    />
                    {errors.password && <span style={{color:"#D30000", fontWeight:600,fontSize:"16px"}} >{errors.password.message}</span>}
                  </div>

                  <div class="rememberme" style={{display:"flex"}}>
                    <input type="checkbox"></input>
                    <h6 style={{color:"#5D5D5D", fontSize:"90%", fontWeight:600, marginTop:"9px", marginLeft:"2px",marginBottom:"9px"}}>Remember me</h6>
                  </div>

                  <button disabled={isSubmitting} type="submit" style={{width:"100%",fontSize:"20px", background:"#531EB7", color:"white", border:"white",borderRadius:"5px", margin:"10px 0px 10px 0px",boxShadow:"2px 2px 2px 2px lightgrey", padding:"10px 5px 10px 5px"}}>
                    {isSubmitting ? "Logging in..." : "Log in"}
                  </button>
                  </form>
                <button onClick={() => navigate("/register", { replace: true })}  style={{width:"100%",fontSize:"20px", background:"white", color:"#531EB7",fontWeight:"600", borderColor:"lightgrey",borderRadius:"5px", margin:"0px 0px 10px 0px",boxShadow:"2px 3px 2px 2px lightgrey", padding:"10px 5px 10px 5px"}}>
                  Create a new account
                </button>
            </div>
             
          </div>
          
        </div>


        <div class="illustration" style={{height:"100%", width:"120%", background:"linear-gradient(to bottom, #531EB7, #9900CC)", padding:"30px 30px 0px 0px", overflow:"hidden"}} >
            <h2 style={{color: 'white', fontSize:'300%', marginLeft:"12%" ,marginTop:'5%'}}>Welcome Back!</h2> 
            <h2 style={{color: 'white', fontSize:'200%', marginLeft:"13%" ,marginTop:'-3%', fontWeight:"400"}}>Ready to get fit?</h2> 
            <div style={{marginTop:"6%", marginLeft:"30px", marginRight:"auto",width:"100%", justifyContent:"center", alignItems:"center", display:"flex"}}>
              <img src={loginillustration} width={"650px"} ></img>
            </div>
            <div style={{height:"70%", marginTop:"-45%",width:"105%",background:"linear-gradient(to bottom right, #ED8500, #8B01A1)", boxShadow:"6px 2px 4px 4px #700396",borderRadius:"500% 500% 0 0"}}></div>
        </div>
         
      </div>
    );
  };