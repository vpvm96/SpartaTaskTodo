import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createTodo } from "../api/todoService"

const useCreateTodoFetch = () => {
  const queryClient = useQueryClient()
  const addTodo = useMutation((todoRequest) => createTodo(todoRequest), {
    onSuccess: () => {
      queryClient.invalidateQueries("todos")
    },
  })

  return {
    addTodoLoading: addTodo.isLoading,
    addTodoError: addTodo.isError,
    addTodo,
  }
}

export default useCreateTodoFetch
