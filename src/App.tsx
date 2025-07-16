import React, { useState } from "react";
import "./App.css";
import { OTPInput } from "./components/OTPInput";

function App() {
  const [otpValue, setOtpValue] = useState("");
  const [submittedOtp, setSubmittedOtp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedOtp(otpValue);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit}>
        <OTPInput
          length={4}
          value={otpValue}
          onChange={setOtpValue}
          theme="light"
          variant="warning"
          sizeStyle="md"
          placeholder=""
          variantTextColor={true}
        />
        <button type="submit" style={{ marginTop: "1rem" }}>
          Submit OTP
        </button>
      </form>
      <p>Submitted OTP: {submittedOtp}</p>
    </div>
  );
}

export default App;
