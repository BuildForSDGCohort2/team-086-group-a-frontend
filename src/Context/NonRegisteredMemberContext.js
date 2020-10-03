import React, { useState } from "react";
const NonRegisterContextMembers = React.createContext([{}, () => {}]);

const NonRegisteredMemberContextProvider = (props) => {
  const [nonRegisteredMemberScreens, setNonRegisteredMemberScreens] = useState({
    data: ["name"],
    formValue: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      formData: [],
    },
    collection: null,
    // ContactPage
    contactPage : {
      name: "",
      email: "",
      subject: "",
      message: "",
      disabled: false,
      messageSent : null,
    },

  });

  return (
    <NonRegisterContextMembers.Provider
      value={[nonRegisteredMemberScreens, setNonRegisteredMemberScreens]}
    >
      {props.children}
    </NonRegisterContextMembers.Provider>
  );
};

export { NonRegisterContextMembers, NonRegisteredMemberContextProvider };
