import React from "react";
import { useUser } from "../Context";

function Child() {
  const user = useUser();
  return <div>{user.name}</div>;
}

export default Child;
