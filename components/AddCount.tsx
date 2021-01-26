import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, selectCount } from "@store/slices/countSlice";

const AddCount = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  function addCount() {
    dispatch(increment());
  }

  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <h1>
        AddCount: <span>{count}</span>
      </h1>
      <button onClick={addCount}>Add To Count</button>
    </div>
  );
};

export default AddCount;
