import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getChart } from "../../redux/actions/actions";
import { Context } from "../Context";
import Child from "./Child";
import Child1 from "./Child1";
// import { getCharInfo } from "../../services/api";

function Main() {
  
  return (
    <Context>
      <Child />
      <Child1 />
    </Context>
  );
}

export default Main;
