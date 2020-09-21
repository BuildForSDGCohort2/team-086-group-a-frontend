import React, { useState } from "react";
import Bugger from "../Asset/Rectangle 19.svg";
import Soup from "../Asset/Rectangle 680.svg";
import Ellipse from "../Asset/Ellipse 75.svg";
import Plantain from "../Asset/Rectangle 676.svg";
import ManImag from "../Asset/Rectangle 20.png";
import Juice from "../Asset/Rectangle 27.png";
const NonRegisterContextMembers = React.createContext([{}, () => {}]);

const NonRegisteredMemberContextProvider = (props) => {
  const [nonRegisteredMemberScreens, setNonRegisteredMemberScreens] = useState({
    searchData: "",
    regValue: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      formData: [],
    },

    collection: {
      specialOffers: [
        {
          image: Ellipse,
          name: "american bugger",
          price: 60,
          discount: 50,
          _id: 1,
        },
        {
          image: Bugger,
          name: "buggar",
          price: 60,
          discount: 50,
          _id: 2,
        },
        {
          image: Bugger,
          name: "bugger",
          price: 60,
          discount: 50,
          _id: 3,
        },
      ],
      menus: [
        {
          category: "meat & seafood",
          image: Soup,
          name: "shrimp with garlic",
          price: 60,
          _id: 1,
        },
        {
          category: "native",
          image: Plantain,
          name: "plantain",
          price: 60,
          _id: 2,
        },
        {
          category: "drinks",
          image: Juice,
          name: "mango the golden fruit",
          price: 60,
          _id: 3,
        },
      ],
      testimonials: [
        {
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti dolorum deserunt atque quas obcaecati quibusdam fugit saepe odit commodi repellendus similique placeat, rerum vitae tenetur inventore, quasi ab. Libero, ab.",
          image: ManImag,
          name: "ralph belloa",
          job: "c.e.o mvstri & co",
          _id: 1,
        },
        {
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti dolorum deserunt atque quas obcaecati quibusdam fugit saepe odit commodi repellendus similique placeat, rerum vitae tenetur inventore, quasi ab. Libero, ab.",
          image: ManImag,
          name: "ralph belloa",
          job: "c.e.o mvstri & co",
          _id: 2,
        },
      ],

      vendorsIcon: [Plantain, Juice, Soup, Ellipse, ManImag, Juice],

      blogs: [
        { image: Plantain, info: "best plaintain combinations", _id: 1 },
        { image: ManImag, info: "top 5 resturants in lagos", _id: 2 },
        { image: Juice, info: "mango: the golden fruit", id: 3 },
      ],
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
