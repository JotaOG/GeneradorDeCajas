import React from "react";

export const DisplayBox = (props) => {
  return props.style.map((elem, i) => (
    <div
      key={i}
      style={{
        display: "inline-block",
        marginTop: "10px",
        marginRight: "10px",
        width: `${elem.width /* props.style.width */}`,
        height: `${elem.height/* props.style.height */}`,
        backgroundColor: `${elem.backgroundColor /* props.style.backgroundColor */}`,
      }}
    >

    </div>
  ));
};
