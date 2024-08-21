import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserData as updateUserDataApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateUserDataApi,
    onSuccess: () => {
      toast.success("User account successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { updateUser, isUpdating };
}
