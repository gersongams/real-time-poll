import React from "react";
import ThankYou from "../assets/thanks.jpg";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Thanks = () => (
  <div>
    <img src={ThankYou} alt="" />
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
    >
      <Link to={"/"}>
        <Button type={"primary"}>Take the survey again</Button>
      </Link>
    </div>
  </div>
);

export default Thanks;
