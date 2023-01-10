import { Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import Todo from './todo/Todo';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/todo" element={<Todo />} />
        </Routes>
    )
}

export default Router;