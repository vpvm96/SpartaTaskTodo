import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateTodo } from "../api/todoService"

const useUpdateTodoFetch = () => {
  const queryClient = useQueryClient()
  const updatedTodo = useMutation(
    (updateTodoRequest) => updateTodo(updateTodoRequest),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos")
      },
    }
  )

  return {
    updatedTodo,
  }
}

export default useUpdateTodoFetch
