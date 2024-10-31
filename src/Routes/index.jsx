import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from '../views/Home';
import Settings from '../views/Settings';
import Signin from '../views/Signin';
import SignUp from '../views/SignUp';
import Form from '../views/Form';
import Dashboard from '../views/Dashboard';
import PrivateRoute from '../PrivateRoute';

const isAuthenticated = true;

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<SignUp />} />

            <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                <Route index element={<Home />} />
                <Route path="settings" element={<Settings />} />
                <Route path="form" element={<Form />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Route>
    )
);

export default router;
