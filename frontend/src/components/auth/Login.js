import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
  
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
          <h3>Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className={errors.email ? "error" : ""}>
          <input
            placeholder="Email"
            type="email"
            {...register("email", {
              required: "This is required field",
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className={errors.password ? "error" : ""}>
          <input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: "This is required field",
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
      <button onClick={() => navigate("/register", { replace: true })}>
        Register Instead
      </button>
      </div>
    );
  };