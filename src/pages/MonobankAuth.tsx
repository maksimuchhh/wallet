import { useState } from "react";
import { MONOBANK_API_URL } from "../constants";

function MonobankAuth() {
  const [personalData, setPersonalData] = useState<any>();
  const [token, setToken] = useState("");

  const fetchPersonalData = async () => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("X-Token", token);
    return await fetch(`${MONOBANK_API_URL}/personal/client-info`, {
      headers: requestHeaders,
    });
  };

  const onSubmit = async () => {
    localStorage.setItem("mono-token", token);

    const data = await (await fetchPersonalData()).json();
    setPersonalData(data);
  };

  console.log("personalData", personalData);

  return (
    <div>
      <p>To integrate with Monobank you have to paste your token below</p>
      <label>
        Token
        <input value={token} onChange={(e) => setToken(e.target.value)} />
      </label>
      <button onClick={onSubmit}>Confirm</button>
      <p>
        Click to open instruction how to get your{" "}
        <a href="https://api.monobank.ua/" target="_blank">
          token
        </a>
      </p>

      {personalData && (
        <div>
          <h2>Hello, {personalData.name}</h2>
        </div>
      )}
    </div>
  );
}

export default MonobankAuth;
