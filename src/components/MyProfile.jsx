import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const MyProfile = function () {
  return (
    <Container id="myProfile" className="pt-5 ps-5 text-white">
      <h1 className="display-1">Edit Profile</h1>
      <hr />
      <div className="d-flex flex-column flex-lg-row row gap-2">
        <div id="myProfileAvatar" className="position-relative col-12 col-lg-3">
          <img src="Assets/Img/avatar.png" alt="Avatar" />
          <span className="bg-black position-absolute d-flex justify-content-center align-items-center">
            <i className="bi bi-pencil-fill"></i>
          </span>
        </div>
        <div className="col-12 col-lg-8 mt-2 mt-md-0" id="editProfile">
          <input
            type="text"
            value="User #1"
            className=" bg-secondary bg-gradient mb-3 p-2 text-white"
          />
          <h5 className="text-secondary">Language:</h5>
          <select
            className="form-select bg-dark text-white"
            aria-label="Default select example"
          >
            <option selected id="option">
              English
            </option>
            <option value="1">Italian</option>
            <option value="2">German</option>
            <option value="3">Spanish</option>
          </select>
          <hr />

          <h5 className="text-secondary">Maturity Settings:</h5>
          <button type="button" className="btn btn-secondary">
            ALL MATURITY SETTINGS
          </button>
          <p className="mt-3">
            Show files for all maturity settimgs for this profile.
          </p>
          <button type="button" className="btn btn-dark border">
            EDIT
          </button>
          <hr />

          <h5 className="text-secondary">Autoplay Controls:</h5>
          <div className="checkbox-wrapper">
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Check this switch"
            />
            Autoplay next episode in a series on all devices
          </div>
          <div className="checkbox-wrapper mt-2">
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Check this switch"
            />
            Autoplay next episode in a series on all devices
          </div>
          <hr />

          <button type="submit" className="bg-light px-4 fw-bold">
            SAVE
          </button>
          <button type="reset" className="bg-dark text-white border px-3">
            CANCEL
          </button>
          <button type="reset" className="bg-dark text-white border px-3">
            DELETE PROFILE
          </button>
        </div>
      </div>
    </Container>
  );
};

export default MyProfile;
