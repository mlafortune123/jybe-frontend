import './App.css';
import './styleguide.css';
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading.js"
import { ProtectedRoute } from './ProtectedRoute';
import Home from "./components/public/Home.js"
import About from "./components/public/About.js"
// import GetStarted from './components/public/GetStarted';
// import MyAccount from './components/private/MyAccount';
import Card from './components/private/Card';
import SignUp from './components/public/Signup';
import HowItWorks from './components/public/HowItWorks';
import UserInfo from './components/private/UserInfo';
import SelectSubscription from './components/private/SelectSubscription';
import Approved from './components/private/Approved';
import Denied from './components/private/Denied';
import NotFoundPage from './components/public/PageNotFound';
import Contact from './components/public/Contact';
function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Routes>
      {/* <Route path="/myaccount" element={
        <ProtectedRoute component={MyAccount} />
      } /> */}
      <Route path="/approved" element={
        <ProtectedRoute component={Approved} />
      } />
      <Route path="/select_subscription" element={
        <ProtectedRoute component={UserInfo} />
      } />
      <Route path="/userinfo" element={
        <ProtectedRoute component={SelectSubscription} />
      } />
      <Route path="/card" element={
        <ProtectedRoute component={Card} />
      } />
      <Route path="/howitworks" element={<HowItWorks/>}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/card" element={<Card />} />
      <Route path="/denied" element={<Denied />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<SignUp />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;