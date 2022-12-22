import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteTodo } from "../api/todoService"

const useDeleteTodoFetch = () => {
  const queryClient = useQueryClient()
  const deletedTodo = useMutation(
    (deleteTodoRequest) => deleteTodo(deleteTodoRequest),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos")
      },
    }
  )

  return {
    deletedTodo,
  }
}

export default useDeleteTodoFetch
