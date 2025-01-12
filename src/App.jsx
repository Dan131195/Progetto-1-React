import "./App.css";
import "bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
// import Movie from "./components/Movie";
// import MyAccount from "./components/MyAccount";
import MyProfile from "./components/MyProfile";

function App() {
  return (
    <>
      <MyNavBar />
      {/* <h4>Star Wars</h4>
      <Movie movie="Star Wars" />
      <h4>Harry Potter</h4>
      <Movie movie="Harry Potter" />
      <h4>Lord of The Rings</h4>
      <Movie movie="Lord of the rings" />
      <h4>Naruto</h4>
      <Movie movie="Naruto" />
      <h4>One Piece</h4>
      <Movie movie="One Piece" /> */}
      {/* Pagina Account */}
      {/* <MyAccount /> */}
      {/* Pagina Profilo */}
      <MyProfile />
      <br />
      <br />
      <br />
      <MyFooter />
    </>
  );
}

export default App;
