import React from "react";
import Card from "./Card";
import ServiceData from "./ServiceData";

function Services() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">
          Our <strong className="brand-name">Services</strong>
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {ServiceData.map((val, ind) => {
          return (
            <Card
              key={ind}
              imgSrc={val.imgSrc}
              title={val.title}
              s
              text={val.text}
            />
          );
        })}
      </div>
    </>
  );
}
export default Services;
