import axios from "axios"
import { now } from "../utils/date"
import { v4 as uuidv4 } from "uuid"

export const getTodo = async () => {
  const { data } = await axios.get("http://localhost:3001/todos")
  return data
}

export const createTodo = async (todoRequest) => {
  const res = await axios.post("http://localhost:3001/todos", {
    ...todoRequest,
    id: uuidv4(),
    createdAt: now(),
    isDone: false,
  })
  return res
}

export const updateTodo = async (updateTodoRequest) => {
  const res = await axios.patch(
    `http://localhost:3001/todos/${updateTodoRequest.id}`,
    {
      ...updateTodoRequest,
    }
  )
  return res
}

export const deleteTodo = async (deleteTodoRequest) => {
  return await axios.delete(
    `http://localhost:3001/todos/${deleteTodoRequest.id}`
  )
}
