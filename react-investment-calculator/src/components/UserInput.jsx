// import { investment } from "./util/investment";
import { useState } from "react";

export default function UserInput() {
  const [userValue, setUserValue] = useState({//merging 4 input values into one object
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(userIdentifier, newValue) {//userIdentifier=> is one of initialInvestment or annualInvestment or expectedReturn or duration
    setUserValue((prevUserValue) => {
     
      return {
        ...prevUserValue,
        [userIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="text"
            required
            value={userValue.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userValue.annualInvestment}
            onChange={(event)=> handleChange('annualInvestment', event.target.value)}
          ></input>
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userValue.expectedReturn}
            onChange={(event)=>handleChange('expectedReturn', event.target.value)}
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userValue.duration}
            onChange={(event)=>handleChange('duration', event.target.value)}
          ></input>
        </p>
      </div>
    </section>
  );
}
