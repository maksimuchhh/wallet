import { useState } from "react";
import { MONOBANK_API_URL, MONOBANK_TOKEN_KEY } from "../constants";
import LocalStorage from "../utils/localStorage";
import './PersonalAccount.css';

function MonobankAuth() {
  const [personalData, setPersonalData] = useState<any>();
  const [token, setToken] = useState(
    LocalStorage.get(MONOBANK_TOKEN_KEY) || ""
  );

  const fetchPersonalData = async () => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("X-Token", token);
    return await fetch(`${MONOBANK_API_URL}/personal/client-info`, {
      headers: requestHeaders,
    });
  };

  const onSubmit = async () => {
    LocalStorage.set(MONOBANK_TOKEN_KEY, token);

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
        <a href="https://api.monobank.ua/" target="_blank" rel="noreferrer">
          token
        </a>
      </p>

      {personalData && (
        <main>
          <h1>Your cabinet, {personalData.name}</h1>
          <section className="section">
            <p className="bankName">Name Bank (available accounts *numbers*)</p>
            <button className="viewAllBtn">View all accounts </button>
            <p>Total amount for this Bank - *numbers*</p>
            <ul className="list">
              {personalData.accounts.map((account: any) => {
                return (
                  <li key={account.id} className="listItem">
                    <div className="cardBox">
                      <p>{account.currencyCode === 980 ? 'UAH' : 'USD'}</p>
                      <p>{account.balance / 100}</p>
                      <p>{account.maskedPan}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
            <button>Add new bank</button>
          </section>
        </main>
      )}
    </div>
  );
}

export default MonobankAuth;




