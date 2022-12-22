import { BrowserRouter, Route, Routes } from "react-router-dom"
import TodoListPage from "../pages/TodoListPage"
import ErrorPage from "../pages/ErrorPage"
import TodoListDetailPage from "../pages/TodoListDetailPage"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route path="/todo/:todoId" element={<TodoListDetailPage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
