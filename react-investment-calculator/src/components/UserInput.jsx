

export default function UserInput({ onChangeInput, userValue }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="text"
            required
            value={userValue.initialInvestment}
            onChange={
              (event) => onChangeInput("initialInvestment", event.target.value) //(UserIdentifier, newValue)
            }
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userValue.annualInvestment}
            onChange={(event) =>
              onChangeInput("annualInvestment", event.target.value)
            } //(UserIdentifier, newValue)
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
            onChange={(event) =>
              onChangeInput("expectedReturn", event.target.value)
            } //(UserIdentifier, newValue)
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userValue.duration}
            onChange={(event) => onChangeInput("duration", event.target.value)} //(UserIdentifier, newValue)
          ></input>
        </p>
      </div>
    </section>
  );
}
