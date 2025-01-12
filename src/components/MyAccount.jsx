import { Container } from "react-bootstrap";

const MyAccount = function () {
  return (
    <Container className="container-lg text-light" id="myAccount">
      <h1>Account</h1>
      <hr />
      <div className="row">
        <div className="col-12 col-md-4">
          <h3 className="text-secondary">MEMBERSHIP & BILLING</h3>
          <button
            type="reset"
            className="px-4 py-2 bg-body-secondary rounded-2 my-2"
            id="cancelMembershipButton"
          >
            Cancel Membership
          </button>
        </div>
        <div className="col-12 col-md-8">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column justify-content-between">
              <h5 className="my-0">user1@gmail.com</h5>
              <p className="my-3">Password: ********</p>
              <p className="my-0">Phone: 123 4567890</p>
            </div>
            <div className="d-flex flex-column justify-content-between text-end">
              <a href="javascript:void(0)" className="accountLink">
                Change account email
              </a>
              <a href="javascript:void(0)" className="accountLink">
                Change password
              </a>
              <a href="javascript:void(0)" className="accountLink">
                Change phone number
              </a>
            </div>
          </div>
          <hr className="text-secondary" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4"></div>
        <div className="col-12 col-md-8">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <a href="https://www.paypal.com/it/home">
                <img
                  src="../../public\assets\Img\paypal.webp"
                  id="paypal"
                  alt="Paypal Logo"
                  width={110}
                />
              </a>
              <span>
                <h5 className="d-inline ms-2">user1@gmail.com</h5>
              </span>
            </div>
            <div className="d-flex flex-column justify-content-between text-end">
              <a href="javascript:void(0)" className="accountLink">
                Update payment info
              </a>
              <a href="javascript:void(0)" className="accountLink my-3">
                {" "}
                Billing details
              </a>
              <a href="javascript:void(0)" className="accountLink mb-3">
                Redeem giftcard of prom code
              </a>
              <a href="javascript:void(0)" className="accountLink">
                Where to buy gift cards?
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-secondary" />
      <div className="row">
        <div className="col-12 col-md-4">
          <h3 className="text-secondary">PLAN DETAILS</h3>
        </div>
        <div className="col-12 col-md-8">
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="d-inline">Standard</h5>
              <i className="bi bi-badge-hd ms-2"></i>
            </div>
            <div>
              <a href="javascript:void(0)" className="accountLink">
                Change plan
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-secondary" />
      <div className="row">
        <div className="col-12 col-md-4">
          <h3 className="text-secondary">SETTINGS</h3>
        </div>
        <div className="col-12 col-md-8">
          <div className="d-flex flex-column justify-content-between">
            <a href="javascript:void(0)" className="my-1 accountLink">
              Parent Control
            </a>
            <a href="javascript:void(0)" className="my-1 accountLink">
              Test Participation
            </a>
            <a href="javascript:void(0)" className="my-1 accountLink">
              Manage download devices
            </a>
            <a href="javascript:void(0)" className="my-1 accountLink">
              Active a device
            </a>
            <a href="javascript:void(0)" className="my-1 accountLink">
              Recent device streaming activity
            </a>
            <a href="javascript:void(0)" className="my-1 accountLink">
              Signout all devices
            </a>
          </div>
        </div>
      </div>
      <hr className="text-secondary" />
      <div className="row">
        <div className="col-12 col-md-4">
          <h3 className="text-secondary mb-3">MY PROFILE</h3>
        </div>
        <div className="col-12 col-md-8 profileSettings">
          <div className="d-flex justify-content-between">
            <div>
              <img
                src="../../public\assets\Img\avatar.png"
                alt="Avatar"
                width={50}
              />
              <span className="ms-2">
                <h5 className="d-inline">Epicoder #1</h5>
              </span>
            </div>
            <div className="d-flex flex-column justify-content-between text-end">
              <a href="javascript:void(0)" className="my-1 accountLink">
                Manage Profiles
              </a>
              <a href="javascript:void(0)" className="my-1 accountLink">
                Add profile email
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-12 col-md-4"></div>
        <div className="col-12 col-md-4">
          <div className="d-flex flex-column flex-md-row justify-content-md-between">
            <a href="javascript:void(0)" className="mb-3 accountLink">
              Language
            </a>
            <a href="javascript:void(0)" className="mb-3 accountLink">
              Viewing activity
            </a>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-md-between">
            <a href="javascript:void(0)" className="mb-3 accountLink">
              Playback settings
            </a>
            <a href="javascript:void(0)" className="mb-3 accountLink">
              Ratings
            </a>
          </div>
          <div>
            <a href="javascript:void(0)" className="mb-5 accountLink">
              Subtitle apparence
            </a>
          </div>
        </div>
        <br />
        <br />
      </div>
    </Container>
  );
};

export default MyAccount;
