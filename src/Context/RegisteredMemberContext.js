import React, { useState } from "react";
import SoupOne from "../Asset/Rectangle 682.png";
import SoupTwo from "../Asset/Rectangle 681.png";
import Plantain from "../Asset/Rectangle 16.svg";
import Drinks from "../Asset/Rectangle 27.png";
import BreakFast from "../Asset/Ellipse 75.svg";

const RegisterContextMembers = React.createContext([{}, () => {}]);

const RegisteredMemberContextProvider = (props) => {
  const [registeredMemberScreens, setRegisteredMemberScreens] = useState({
    menuSearchBar: "",
    specifiedFood: [],
    collection: {
      categories: [
        "soup",
        "rice",
        "platter",
        "drinks",
        "fit meals",
        "1k+ combos",
        "breakfast",
        "sunday family",
        "sides",
      ],
      filters: {
        category: ["popularity", "rating ", "price"],
        brands: [
          "bukka hut",
          "home cooking",
          "cake",
          "52",
          "food & wine",
          "dominos",
        ],
      },

      availableFood: [
        {
          name: "soup",
          type: "egusi soup",
          image: SoupOne,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "dominos",
        },
        {
          name: "soup",
          type: "chinese soup",
          image: SoupTwo,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "dominos",
        },
        {
          name: "soup",
          type: "chinese soup",
          image: SoupTwo,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "dominos",
        },
        {
          name: "rice",
          type: "jollof rice",
          image: SoupTwo,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "52",
        },
        {
          name: "rice",
          type: "fried rice",
          image: Plantain,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "52",
        },
        {
          name: "rice",
          type: "jollof rice",
          image: SoupTwo,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "52",
        },

        {
          name: "plantain",
          type: "roasted plantain",
          image: Plantain,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "sides",
        },
        {
          name: "plantain plantain",
          type: "unriped pla",
          image: Plantain,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "sides",
        },
        {
          name: "plantain",
          type: "roasted plantain",
          image: Plantain,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "sides",
        },
        {
          name: "fit meals",
          type: "roasted plantain",
          image: Plantain,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "home cooking",
        },
        {
          name: "fit meals",
          type: "soup",
          image: SoupOne,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "home cooking",
        },
        {
          name: "fit meals",
          type: "roasted plantain",
          image: Plantain,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "home cooking",
        },
        {
          name: "1k+ combos",
          type: "roasted plantain, sauce and fish tail",
          image: Plantain,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "bukka hut",
        },
        {
          name: "1k+ combos",
          type: "soup with chicken laps",
          image: SoupTwo,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "bukka hut",
        },
        {
          name: "1k+ combos",
          type: "roasted plantain, sauce and fish tail",
          image: Plantain,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "bukka hut",
        },
        {
          name: "breakfast",
          type: "roasted plantain, sauce and fish tail",
          image: BreakFast,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "food & wine",
        },
        {
          name: "breakfast",
          type: "roasted plantain, sauce and fish tail",
          image: BreakFast,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "food & wine",
        },
        {
          name: "breakfast",
          type: "roasted plantain, sauce and fish tail",
          image: BreakFast,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "food & wine",
        },
        {
          name: "sunday family",
          type: "roasted plantain, sauce and fish tail",
          image: Drinks,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "food & wine",
        },
        {
          name: "sunday family",
          type: "roasted plantain, sauce and fish tail",
          image: BreakFast,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "food & wine",
        },
        {
          name: "sunday family",
          type: "roasted plantain, sauce and fish tail",
          image: Drinks,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "food & wine",
        },
      ],
    },
  });

  return (
    <RegisterContextMembers.Provider
      //assign the provider values
      value={[registeredMemberScreens, setRegisteredMemberScreens]}
    >
      {props.children}
    </RegisterContextMembers.Provider>
  );
};

export { RegisterContextMembers, RegisteredMemberContextProvider };
