const MyFooter = function () {
  return (
    <footer className="container-fluid py-2">
      <section id="socials" className="container">
        <i className="bi bi-facebook text-secondary me-2"></i>
        <i className="bi bi-instagram text-secondary mx-2"></i>
        <i className="bi bi-twitter-x text-secondary mx-2"></i>
        <i className="bi bi-youtube text-secondary mx-2"></i>
      </section>
      <section className="container d-flex flex-column justify-content-center flex-md-row justify-content-md-between mt-2">
        <div className="d-flex flex-column myFooter order-1 order-md-0">
          <a href="javascript:void(0)" className="my-2">
            Audio and Subtitles
          </a>
          <a href="javascript:void(0)" className="my-2">
            Media Center
          </a>
          <a href="javascript:void(0)" className="my-2">
            Privacy
          </a>
          <a href="javascript:void(0)" className="my-2">
            Contact US
          </a>
          <button
            type="button"
            className="btn btn-outline-secondary my-2 btnFooter text-secondary"
          >
            Service Code
          </button>
          <p className="text-secondary my-2">&copy; 1997-2021 Netflix Inc</p>
        </div>
        <div className="d-flex flex-column myFooter order-0 order-md-1">
          <a href="javascript:void(0)" className="my-2">
            Audio Description
          </a>
          <a href="javascript:void(0)" className="my-2">
            Investor Relations
          </a>
          <a href="javascript:void(0)" className="my-2">
            Legal Notices
          </a>
        </div>
        <div className="d-flex flex-column myFooter">
          <a href="javascript:void(0)" className="my-2">
            Help Center
          </a>
          <a href="javascript:void(0)" className="my-2">
            Jobs
          </a>
          <a href="javascript:void(0)" className="my-2">
            Cookie Preferences
          </a>
        </div>
        <div className="d-flex flex-column myFooter">
          <a href="javascript:void(0)" className="my-2">
            Gift Cards
          </a>
          <a href="javascript:void(0)" className="my-2">
            Terms of Use
          </a>
          <a href="javascript:void(0)" className="my-2">
            Corporate Information
          </a>
        </div>
      </section>
    </footer>
  );
};

export default MyFooter;
