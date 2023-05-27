import {
    FormControl,
    FormErrorMessage,
    useToast,
  } from "@chakra-ui/react";
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
    const toast = useToast();
  
    const onSubmit = async (values) => {
      try {
        await login(values.email, values.password);
      } catch (error) {
        toast({
          title: "Invalid email or password",
          status: "error",
          isClosable: true,
          duration: 1500,
        });
      }
    };
    return (
      <div>
          <h3>Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.email}>
              <input
                placeholder="Email"
                type="email"
                {...register("email", {
                  required: "This is required field",
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email}>
              <input
                placeholder="Password"
                type="password"
                {...register("password", {
                  required: "This is required field",
                })}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <button
              isLoading={isSubmitting}
              loadingText="Logging in..."
              width="100%"
              colorScheme="green"
              variant="outline"
              mt={6}
              mb={6}
              type="submit"
            >
              Login
            </button>
          </form>
          <button
            onClick={() => navigate("/register", { replace: true })}
            width="100%"
            colorScheme="gray"
            variant="outline"
            mt={6}
          >
            Register Instead
          </button>
      </div>
    );
  };