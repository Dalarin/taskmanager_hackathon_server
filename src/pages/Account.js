import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Profile from "../Components/Profile";


function Account() {
  return (
      <header className="Account">
        <Navbar head = "Личный кабинет"/>
        <Profile/>
        <Footer/>
      </header>

  );
}

export default Account;
