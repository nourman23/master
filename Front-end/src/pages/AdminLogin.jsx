import React from "react";

export const AdminLogin = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
            <form method="#" action="#">
              <div className="card card-login card-hidden">
                <div
                  className="card-header text-center"
                  data-background-color="rose"
                >
                  <h4 className="card-title">Login</h4>
                  <div className="social-line">
                    <a href="#btn" className="btn btn-just-icon btn-simple">
                      <i className="fa fa-facebook-square" />
                    </a>
                    <a href="#pablo" className="btn btn-just-icon btn-simple">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#eugen" className="btn btn-just-icon btn-simple">
                      <i className="fa fa-google-plus" />
                    </a>
                  </div>
                </div>
                <p className="category text-center">Or Be Classical</p>
                <div className="card-content">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="material-icons">face</i>
                    </span>
                    <div className="form-group label-floating">
                      <label className="control-label">First Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="material-icons">email</i>
                    </span>
                    <div className="form-group label-floating">
                      <label className="control-label">Email address</label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="material-icons">lock_outline</i>
                    </span>
                    <div className="form-group label-floating">
                      <label className="control-label">Password</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="footer text-center">
                  <button
                    type="submit"
                    className="btn btn-rose btn-simple btn-wd btn-lg"
                  >
                    Let's go
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
