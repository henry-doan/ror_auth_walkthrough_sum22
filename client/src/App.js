import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Routes, Route } from 'react-router-dom';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Accounts from './components/accounts/Accounts';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route exact path="/accounts" element={<Accounts />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route component={NoMatch} />
      </Routes>
    </>
  </FetchUser>
  </>
)

export default App;