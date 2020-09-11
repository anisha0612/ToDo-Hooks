import { useState } from "react";

export default (initialValue = false) => {
  const [toggle, setToggle] = useState(initialValue);
  const handleChange = (e) => {
    setToggle(!toggle);
  };

  return [toggle, handleChange];
};
