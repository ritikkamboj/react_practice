import React from "react";

import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const count = useSelector((state) => state.counter.value);
  return <div>Here we also want to fetch value from redux store {count}</div>;
}

export default Navbar;
