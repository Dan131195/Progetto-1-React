import "./App.css";
import "bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import Movie from "./components/Movie";
import MyAccount from "./components/MyAccount";
import MyProfile from "./components/MyProfile";

function App() {
  return (
    <>
      <MyNavBar />
      <h4 className="text-white titleSaga">Star Wars</h4>
      <Movie movie="Star Wars" />
      <h4 className="text-white titleSaga">Harry Potter</h4>
      <Movie movie="Harry Potter" />
      <h4 className="text-white titleSaga">Lord of The Rings</h4>
      <Movie movie="Lord of the rings" />
      <h4 className="text-white titleSaga">Naruto</h4>
      <Movie movie="Naruto" />
      <h4 className="text-white titleSaga">One Piece</h4>
      <Movie movie="One Piece" />

      <hr className="text-white border-3" />
      <br />
      <hr className="text-white border-3" />

      {/* Pagina Account */}
      <MyProfile />

      <hr className="text-white border-3" />
      <br />
      <hr className="text-white border-3" />

      {/* Pagina Profilo */}
      <MyAccount />

      <br />
      <br />
      <br />
      <MyFooter />
    </>
  );
}

export default App;
