import React, { useState } from "react";
import Cards from "react-credit-cards";
import CustomInput from "../../Common/Input.component/Input";
import paymentStyle from "../../Styles/payment_modal/paymentModal.module.css";
import "react-credit-cards/es/styles-compiled.css";

const PaymentModal = () => {
  const { input } = paymentStyle;

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <div>
      <Cards
        number={number.substr(0, 16)}
        name={name}
        expiry={expiry.substr(0, 4)}
        cvc={cvc.substr(0, 3)}
        focused={focus}
        acceptedCards={["mastercard", "visa"]}
      />
      <form>
        <CustomInput
          type={"tel"}
          name="number"
          placeholder="Card Number"
          value={number.substr(0, 16)}
          onChange={(e) => setNumber(e.target.value)}
          focus={(e) => setFocus(e.target.name)}
          className={input}
        />
        <CustomInput
          type={"text"}
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          focus={(e) => setFocus(e.target.name)}
          className={input}
        />
        <CustomInput
          type={"text"}
          name="expiry"
          placeholder="MM/YY Expiry"
          value={expiry.substr(0, 4)}
          onChange={(e) => setExpiry(e.target.value)}
          focus={(e) => setFocus(e.target.name)}
          className={input}
        />
        <CustomInput
          type={"tel"}
          name="cvc"
          placeholder="CVC"
          value={cvc.substr(0, 3)}
          onChange={(e) => setCvc(e.target.value)}
          focus={(e) => setFocus(e.target.name)}
          className={input}
        />
      </form>
    </div>
  );
};

export default PaymentModal;
