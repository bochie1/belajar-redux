import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeToBlack, selectColor, selectStatus, incrementAsync } from "./colorSlice";

export default function Color() {
  const color = useSelector(selectColor);
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  return (
    <div>
      <div style={{ height: 200, width: 200, background: color }}></div>

      <button onClick={() => dispatch(incrementAsync())}>Change Color</button>
      <br></br>
      {status}
    </div>
  );
}
