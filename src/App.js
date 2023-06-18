import './App.css';
import logo from './right-column.svg';
import '@fontsource/inter'
import Button from './components/Button';

function App() {
  return (
    <div className="App">
        <div className='Child'>
          <div className='heading'>
            <div className = "SignUp mt-5 mb-2">Sign Up</div>
          </div>
          <div className = "Textfields mb-1">Full Name</div>
          <form>
          <div class = "input-container">
              <input type = "tel" id = "username" autocomplete = "off" required class = "text-input"></input>
              <label for = "username"
              class = "label">Enter your full name</label>
            </div>
          </form>
          <div className = "Textfields mt-3 mb-1">Mobile number</div>
          <form>
            <div class = "input-container">
              <input type = "tel" id = "username" autocomplete = "off" required class = "text-input"></input>
              <label for = "username"
              class = "label">Enter your mobile number</label>
            </div>
          </form>
          <div className = "Textfields mt-4 mb-1">Password</div>
          <form>
            <div class = "input-container">
              <input type = "password" id = "username" autocomplete = "off" required class = "text-input"></input>
              <label for = "username"
              class = "label">Enter password</label>
            </div>
          </form>
          <div className = "Note mt-4 mb-4">Note: Make sure your password is minimum 8 characters with mix of<br/> 
            Uppercase & lowercase alphabets, numbers and special characters. </div>
          
          <div className = "Textfields mt-2 mb-1">Confirm Password</div>
          <form>
            <div class = "input-container">
              <input type = "password" id = "username" autocomplete = "off" required class = "text-input"></input>
              <label for = "username"
              class = "label">Enter Password</label>
            </div>
          </form> 
          <div className = " mt-3 mb-4 ml-2" value='submit'>
          <input id="link-checkbox" type="checkbox" value="" class="w-4 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"></input>
          <label for="link-checkbox" class="Terms ml-2">I agree with the <a href="https://www.google.co.in">Terms and Conditions</a></label></div>
          <Button primary big className = "w-full">SignUp</Button>
          <div className = "Login mt-3 ml-2 ">Already have an account? <a href='https://www.google.co.in' target='_blank' rel="noreferrer"> Login Here</a></div>
      </div>
      <div className = "Rightcolumn mr-20 ">
        <img  style={{width: 460, height:645}} src={logo} alt="logo" />
      </div>
    </div>
  );
}
  
export default App;
