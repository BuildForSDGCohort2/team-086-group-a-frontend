import React from "react";
import ExpensesStyles from "../../Styles/User_dashboard/Expenses.module.css";
import CustomButton from "../../Common/Button.component/Button";
const Expenses = () => {
  const { expensesWrapper, delivery, vat, total, checkout } = ExpensesStyles;
  return (
    <section className={expensesWrapper}>
      <div className={delivery}>
        <p>delivery</p>
        <span>${5}</span>
      </div>
      <div className={vat}>
        <p>v.a.t</p>
        <span>${3}</span>
      </div>
      <div className={total}>
        <p>total</p>
        <span>${270}</span>
      </div>
      <CustomButton
        text={"checkout"}
        className={checkout}
        backgroundColor={"#f76057"}
      />
    </section>
  );
};

export default Expenses;
