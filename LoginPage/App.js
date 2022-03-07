import './App.css';

function App() {
  return (
    <div className="Main">
      <div className="Sub-Main">
        <div>
          <div>
            <h1>Welcome to Example.com</h1>
            <div>
              <input type="text" placeholder=" Phone number, username or email" className="user-email"></input>
            </div>
            <br>
            </br>

            <div>
              <input type="text" placeholder=" Password" className= "user-pw"></input>
            </div>
            <br>
            </br>

            <div className="login-button">
              <button>Login</button>
            </div>
            <p className="forgot-or-signup">
              <a href="#" align="center">Forgot your Password?</a> Or <a href="#">Sign Up</a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;