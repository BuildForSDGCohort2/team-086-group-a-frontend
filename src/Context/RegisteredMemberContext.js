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

    toggleMenuIcon: false,

    vendorMenus: [],
    vendorFormData: {
      businessName: "",
      businessType: "",
      businessNumber: "",
      officeAddress: "",
      email: "",
      taxId: "",
      subscriptionPlan: "",
      paymentReference: "",
      customerId: "",
    },

    vendorLoginForm: {
      vendorId: "",
      paymentReference: "",
    },

    vendorRequestDropDown: "",

    vendorOptionsRequest: [],

    addCategoryModal: false,
    addMenuModal: false,

    updateCategoryModal: false,

    viewMenuModal: false,

    specifiedFood: [],
    Notifications: [],
    openModal: true,

    subscriptionCharge: {
      expiry: "1220",
      data: {
        email: "",
        amount: "300000",

        metadata: {
          custom_fields: [],
        },

        card: {
          cvv: "408",
          number: "4084084084084081",
          expiry_month: "12",
          expiry_year: "2020",
        },
        pin: "0000",
      },
    },

    businessTypes: ["roadside", "restaurant", "hotel"],
    subscriptionPlans: ["monthly", "quarterly", "yearly"],
    privacyCheck: "",
    headerNavLinksRegCollections: [
      "home",
      "dashboard",
      "menu",
      "testimonials",
      "contact",
      "blogs",
    ],

    blogs: {
      tags: ["food", "vendor", "cooking", "fruit", "drinks", "restaurants"],
      feeds: [
        {
          poster: "chucks",
          title: "top 5 restaurants",
          image: BreakFast,
          posterId: "1234",
          tags: "food",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet aliquam nam odio, ullam voluptates suscipit architecto quibusdam unde ipsam. Commodi placeat itaque labore sed maxime, consequuntur corporis a hic!",
          date: new Date().toDateString(),
        },
        {
          poster: "jennifer",
          title: "mango: the golden fruit",
          image: Drinks,
          posterId: "123",
          tags: "drinks",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet aliquam nam odio, ullam voluptates suscipit architecto quibusdam unde ipsam. Commodi placeat itaque labore sed maxime, consequuntur corporis a hic!",
          date: new Date().toDateString(),
        },
        {
          poster: "womi",
          title: "thing to know of this spicy soup",
          image: SoupOne,
          posterId: "1235",
          tags: "food",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet aliquam nam odio, ullam voluptates suscipit architecto quibusdam unde ipsam. Commodi placeat itaque labore sed maxime, consequuntur corporis a hic!",
          date: new Date().toDateString(),
        },
        {
          poster: "womi",
          title: "thing to know of this spicy soup",
          image: SoupOne,
          posterId: "1236",
          tags: "food",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet aliquam nam odio, ullam voluptates suscipit architecto quibusdam unde ipsam. Commodi placeat itaque labore sed maxime, consequuntur corporis a hic!",
          date: new Date().toDateString(),
        },
        {
          poster: "womi",
          title: "thing to know of this spicy soup",
          image: SoupOne,
          posterId: "12357",
          tags: "food",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet aliquam nam odio, ullam voluptates suscipit architecto quibusdam unde ipsam. Commodi placeat itaque labore sed maxime, consequuntur corporis a hic!",
          date: new Date().toDateString(),
        },
      ],
    },
    categories: [],

    brandsNames: [],

    availableMenu: [],

    filters: {
      category: ["popularity", "rating ", "price"],
    },

    collection: {
      availableFood: [
        {
          name: "soup",
          type: "egusi soup",
          image: SoupOne,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "dominos",
          unique: false,
          readyMeal: false,
        },
        {
          name: "soup",
          type: "egusi soup",
          image: SoupOne,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "dominos",
          unique: false,
          readyMeal: false,
        },
        {
          name: "soup",
          type: "egusi soup",
          image: SoupOne,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "dominos",
          unique: false,
          readyMeal: false,
        },
        {
          name: "soup",
          type: "egusi soup",
          image: SoupOne,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "dominos",
          unique: false,
          readyMeal: false,
        },
        {
          name: "soup",
          type: "chinese soup",
          image: SoupTwo,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "dominos",
          unique: false,
          readyMeal: false,
        },
        {
          name: "soup",
          type: "chinese soup",
          image: SoupTwo,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "dominos",
          unique: true,
          readyMeal: true,
        },
        {
          name: "rice",
          type: "jollof rice",
          image: SoupTwo,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "52",
          unique: true,
          readyMeal: true,
        },
        {
          name: "rice",
          type: "fried rice",
          image: Plantain,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "52",
          unique: true,
          readyMeal: true,
        },
        {
          name: "rice",
          type: "jollof rice",
          image: SoupTwo,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "52",
          unique: false,
          readyMeal: false,
        },

        {
          name: "plantain",
          type: "roasted plantain",
          image: Plantain,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "sides",
          unique: false,
          readyMeal: false,
        },
        {
          name: "plantain plantain",
          type: "unriped pla",
          image: Plantain,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "sides",
          unique: false,
          readyMeal: false,
        },
        {
          name: "plantain",
          type: "roasted plantain",
          image: Plantain,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "sides",
          unique: true,
          readyMeal: true,
        },
        {
          name: "fit meals",
          type: "roasted plantain",
          image: Plantain,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "home cooking",
          unique: true,
          readyMeal: true,
        },
        {
          name: "fit meals",
          type: "soup",
          image: SoupOne,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "home cooking",
          unique: false,
          readyMeal: false,
        },
        {
          name: "fit meals",
          type: "roasted plantain",
          image: Plantain,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "home cooking",
          unique: false,
          readyMeal: false,
        },
        {
          name: "1k+ combos",
          type: "roasted plantain, sauce and fish tail",
          image: Plantain,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "bukka hut",
          unique: false,
          readyMeal: false,
        },
        {
          name: "1k+ combos",
          type: "soup with chicken laps",
          image: SoupTwo,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "bukka hut",
          unique: true,
          readyMeal: false,
        },
        {
          name: "1k+ combos",
          type: "roasted plantain, sauce and fish tail",
          image: Plantain,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "bukka hut",
          unique: false,
          readyMeal: false,
        },
        {
          name: "breakfast",
          type: "roasted plantain, sauce and fish tail",
          image: BreakFast,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "food & wine",
          unique: true,
          readyMeal: false,
        },
        {
          name: "breakfast",
          type: "roasted plantain, sauce and fish tail",
          image: BreakFast,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "food & wine",
          unique: false,
          readyMeal: false,
        },
        {
          name: "breakfast",
          type: "roasted plantain, sauce and fish tail",
          image: BreakFast,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "food & wine",
          unique: false,
          readyMeal: false,
        },
        {
          name: "sunday family",
          type: "roasted plantain, sauce and fish tail",
          image: Drinks,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "food & wine",
          unique: false,
          readyMeal: false,
        },
        {
          name: "sunday family",
          type: "roasted plantain, sauce and fish tail",
          image: BreakFast,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "food & wine",
          unique: false,
          readyMeal: false,
        },
        {
          name: "sunday family",
          type: "roasted plantain, sauce and fish tail",
          image: Drinks,
          desc: "Lorem ipsum, dolor sit amet consectetur adipi",
          price: 60,
          vendor: "food & wine",
          unique: false,
          readyMeal: false,
        },
      ],
    },
  });
  // abstraction / encapsulation

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
