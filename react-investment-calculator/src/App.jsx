import {useState} from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";


function App() {
  const [userValue, setUserValue] = useState({
    //merging 4 input values into one object
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

const inputIsValid = userValue.duration >= 1;


  function handleChange(userIdentifier, newValue) {//userIdentifier=> is one of initialInvestment or annualInvestment or expectedReturn or duration
    setUserValue((prevUserValue) => {
     
      return {
        ...prevUserValue,
        [userIdentifier]: +newValue,
      };
    });

  
  }

  return (
    <> 
      <Header />
      <UserInput onChangeInput= {handleChange} userValue={userValue}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than zero. </p>}
      {inputIsValid &&<Results input ={userValue}/>}
    </>
  );
}

export default App;
