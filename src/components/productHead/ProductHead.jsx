import React from "react";

function ProductHead({ head, semiHead = null }) {
  return (
    <div className="my-5">
      <h2 className="fs-1 text-center  secondary-color">{head}</h2>
      <h5 className="fs-4  text-center mt-5 secondary-color">
        {semiHead && semiHead}
      </h5>
    </div>
  );
}

export default ProductHead;
