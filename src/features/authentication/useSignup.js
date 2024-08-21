import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const { isLoading, mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        "Account created successfully! Please verify from user's email"
      );
    },
    onError: (error) => {
      console.log("ERROR", error);
      toast.error(error.message);
    },
  });

  return { signup, isLoading };
}
