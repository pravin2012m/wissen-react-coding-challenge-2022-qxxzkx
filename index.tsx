import React from 'react';
import { render } from 'react-dom';
import './style.css';
import LoginScreen from './LoginScreen';

const App = () => {
  return (
    <div>
      <div>
        <div>
          {/* <h3>Hello there, Sign in to continue</h3> */}
          <LoginScreen />
          {/* <div>
            <form>
              <div>
                <label>Username/Email</label>
                <input type="text" />
                <div></div>
              </div>
              <div>
                <label>Password</label>
                <input />
                <div></div>
              </div>
              <button>Login</button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
