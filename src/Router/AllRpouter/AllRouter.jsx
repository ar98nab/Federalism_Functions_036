import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import SignUp from '../../Redux/Authentication/SignUp';
import LogIn from '../../Redux/Authentication/LogIn';

export const AllRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/SignUp" />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
    </Router>
  );
};
