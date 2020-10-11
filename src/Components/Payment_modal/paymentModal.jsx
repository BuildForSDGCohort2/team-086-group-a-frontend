import React, { useState, useContext } from "react";
import Cards from "react-credit-cards";
import CustomInput from "../../Common/Input.component/Input";
import Modal from "react-modal";
import paymentStyle from "../../Styles/payment_modal/paymentModal.module.css";
import "react-credit-cards/es/styles-compiled.css";
import Axios from "axios";
import CustomButton from "../../Common/Button.component/Button";
import { RegisterContextMembers } from "../../Context/RegisteredMemberContext";

Modal.setAppElement("#root");
const PaymentModal = ({ openModal }) => {
  const { input, react_modal, form, button, container, wrapper } = paymentStyle;
  const [focus, setFocus] = useState("");
  const [state, setState] = useContext(RegisterContextMembers);
  const { subscriptionCharge } = state;
  const { data, expiry } = subscriptionCharge;
  const { card, metadata, email, amount, pin } = data;
  const { number, cvv } = card;
  const { name } = metadata;

  //setting the input field to the state
  const handleCardChange = ({ target }) => {
    setState((datas) => ({
      ...datas,
      subscriptionCharge: {
        ...subscriptionCharge,
        data: {
          ...data,
          card: { ...card, [target.name]: target.value },
        },
      },
    }));
  };

  //setting cvc of the vendor to the state
  const handleCvcChange = ({ target }) => {
    setState((datas) => ({
      ...datas,
      subscriptionCharge: {
        ...subscriptionCharge,
        data: {
          ...data,
          card: { ...card, cvv: target.value },
        },
      },
    }));
  };

  //setting the vendor bank acccess to the state
  const handlePaymentChange = ({ target }) => {
    setState((datas) => ({
      ...datas,
      subscriptionCharge: {
        ...subscriptionCharge,
        data: { ...data, [target.name]: target.value },
      },
    }));
  };

  //setting the user extra info to the state
  const handleMetaData = ({ target }) => {
    setState((datas) => ({
      ...datas,
      subscriptionCharge: {
        ...subscriptionCharge,
        data: {
          ...data,
          metadata: { ...metadata, [target.name]: target.value },
        },
      },
    }));
  };

  //setting expiry detail to the state
  const handleExpiry = ({ target }) => {
    setState((datas) => ({
      ...datas,
      subscriptionCharge: { ...subscriptionCharge, expiry: target.value },
    }));
  };

  //splitting the expiry infor to the expiry month and year of the paystack gateway
  const handleMonthChange = () => {
    if (expiry.length === 4) {
      let split = expiry.split("");
      let expiryMonth = `${split[0]}${split[1]}`;
      let expiryYear = `${split[2]}${split[3]}`;
      setState((datas) => ({
        ...datas,
        subscriptionCharge: {
          ...subscriptionCharge,
          data: {
            ...data,
            card: {
              ...card,
              expiry_month: expiryMonth,
              expiry_year: expiryYear,
            },
          },
        },
      }));
    }
  };

  const {
    REACT_APP_PAY_STACK_TEST_KEY,
    REACT_APP_PAY_STACK_CHARGE_URL,
  } = process.env;

  //sending the user data to the endpoint for charging
  const handleVendorCharge = async () => {
    var config = {
      method: "post",
      url: `${REACT_APP_PAY_STACK_CHARGE_URL}`,
      headers: {
        Authorization: `Bearer ${REACT_APP_PAY_STACK_TEST_KEY}`,
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    };

    Axios(config)
      .then(function (response) {
        console.log("response.data", response.data);
      })
      .catch(function (error) {
        console.error(error.response);
      });
  };

  return (
    <div className={container}>
      <div className={wrapper}>
        <Modal
          isOpen={true}
          shouldCloseOnEsc={false}
          onRequestClose={(e) => (e.target.isOpen === false ? false : null)}
          className={react_modal}
          // style={{
          //   overlay: {
          //     backgroundColor: "grey",
          //     width: "30px",
          //   },
          //   content: {
          //     colors: "orange",
          //   },
          // }}
        >
          <Cards
            number={number.substr(0, 16)}
            name={name}
            expiry={expiry.substr(0, 4)}
            cvc={cvv.substr(0, 3)}
            focused={focus}
            acceptedCards={["mastercard", "visa"]}
          />
          <form className={form}>
            <CustomInput
              type={"tel"}
              name="number"
              placeholder="Card Number"
              value={number.substr(0, 16)}
              onChange={handleCardChange}
              focus={(e) => setFocus(e.target.name)}
              className={input}
            />
            <CustomInput
              type={"text"}
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleMetaData}
              focus={(e) => setFocus(e.target.name)}
              className={input}
            />
            <CustomInput
              type={"text"}
              name="expiry"
              placeholder="MM/YY Expiry"
              value={expiry.substr(0, 4)}
              onChange={handleExpiry}
              focus={(e) => setFocus(e.target.name)}
              className={input}
              onKeyup={handleMonthChange}
            />
            <CustomInput
              type={"number"}
              name="cvc"
              placeholder="CVC"
              value={cvv.substr(0, 3)}
              onChange={handleCvcChange}
              focus={(e) => setFocus(e.target.name)}
              className={input}
            />

            <CustomInput
              type={"email"}
              name="email"
              placeholder="email"
              value={email}
              onChange={handlePaymentChange}
              className={input}
            />

            <CustomInput
              type={number}
              name="amount"
              placeholder="amount"
              value={amount}
              onChange={handlePaymentChange}
              className={input}
            />

            <CustomInput
              type={"number"}
              name="pin"
              placeholder="pin"
              value={pin}
              onChange={handlePaymentChange}
              className={input}
            />
          </form>
          <CustomButton
            text="subscribe"
            className={button}
            backgroundColor={"#999"}
            click={handleVendorCharge}
          />
        </Modal>
      </div>
    </div>
  );
};

export default PaymentModal;
