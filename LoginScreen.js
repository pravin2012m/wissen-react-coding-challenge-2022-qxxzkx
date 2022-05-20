import React, { useState } from 'react';

const LoginScreen = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [showInvalidUser, setShowInvalidUser] = useState(false);
  const [apiFaling, setapiFaling] = useState(false);

  const loginSubmit = (e) => {
    e.preventDefault();
    fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/JSON',
        'Content-type': 'application/JSON',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          setShowInvalidUser(true);
        } else {
          console.log('tocken23567uyfdfghj', response);
          localStorage.setItem('token', response.token);
        }
      })
      .catch((error) => {
        console.error(error);
        setapiFaling(true);
        setIsChecked(false);
      });
  };

  return (
    <div className="loginWraper">
      <img
        src="https://drive.google.com/uc?export=view&id=1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH"
        alt="logo"
        width="50%"
      />
      <p className="heading">Hello there, Sign in to Continue</p>
      {showInvalidUser && (
        <div className="errorMesage">
          <p>Entered user not present</p>
        </div>
      )}
      {apiFaling && (
        <div className="errorMesage">
          <p>Something went wrong, please check after some time</p>
        </div>
      )}
      <div>
        <form onSubmit={loginSubmit}>
          <div className="inputWraper">
            <p className="inputlabel">Email</p>
            <input
              type="email"
              className="formInput"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputWraper">
            <p className="inputlabel">Password</p>
            <input
              type="password"
              className="formInput"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="checkBoxWrap">
            <p className="checkBox">
              <input
                type="checkbox"
                className="checkboxinput"
                onChange={(e) => setIsChecked(!isChecked)}
                value={isChecked}
              />
            </p>
            <p className="checkBoxlabel">
              By creating or loging into an account, you are agreeging with our
              <strong> Terms & Conditions </strong>and{' '}
              <strong>Privacy Policys</strong>
            </p>
          </div>

          <div className="inputWraper">
            <button
              className={
                isChecked && email !== null && password !== null
                  ? 'buttn-enabled'
                  : 'buttn-disabled'
              }
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
