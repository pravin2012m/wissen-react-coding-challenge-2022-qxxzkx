import React from 'react';

const LoginScreen = () => {
  const loginSubmit = (e) => {
    e.preventDefault();
    postRequestMethod().then().catch();
  };
  return (
    <div className="loginWraper">
      <img
        src="https://drive.google.com/uc?export=view&id=1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH"
        alt="logo"
        width="50%"
      />
      <p>Hello there, Sign in to Continue</p>
      <div>
        <form onSubmit={loginSubmit}>
          <div className="inputWraper">
            <p className="inputlabel">Email</p>
            <input type="email" className="formInput" />
          </div>
          <div className="inputWraper">
            <p className="inputlabel">Password</p>
            <input type="password" className="formInput" />
          </div>
          <div className="inputWraper">
            <input type="checkbox" className="formInput" />
            <p className="inputlabel">Password</p>
          </div>
          <div className="inputWraper">
            <button className="loginButton">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
