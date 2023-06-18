import { React, useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

function ConfirmPasssword() {
  const [value, setValue] = useState("");
  const [inputType, setInputType] = useState("password");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const changeInputType = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  const visibilityIcon =
    inputType === "password" ? (
      <BsFillEyeFill onClick={changeInputType} />
    ) : (
      <BsFillEyeSlashFill onClick={changeInputType} />
    );

  return (
    <div>
      <label htmlFor="confirm-password">Confirm Password</label>
      <div className="flex items-center">
        <input
          type={inputType}
          value={value}
          onChange={handleChange}
          required=""
          autocomplete="current-password"
          className="mr-1 border outline-none"
        />
        {visibilityIcon}
      </div>
    </div>
  );
}

export default ConfirmPasssword;
