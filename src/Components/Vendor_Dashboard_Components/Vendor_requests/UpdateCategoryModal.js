import React, { useEffect, useContext } from "react";
import Axios from "axios";

const UpdateCategoryModal = () => {
  useEffect(() => {
    const fetchCategoryForUPdate = async () => {
      Axios.get(`http://localhost:7000/api/v1/dashboard/vendor/category/list`, {
        "Content-Type": "application/json",
        withCredentials: true,
      })
        .then((res) => {
          console.log("res.data", res.data);
        })
        .catch((err) => {
          console.error(err.response);
        });
    };
    fetchCategoryForUPdate();
  });

  return <div></div>;
};

export default UpdateCategoryModal;
