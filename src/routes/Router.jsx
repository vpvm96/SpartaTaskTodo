import { BrowserRouter, Route, Routes } from "react-router-dom"
import TodoListPage from "../pages/TodoListPage"
import ErrorPage from "../pages/ErrorPage"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
