import React from "./node_modules/react";
import "./components/Wrapper/wrapper.css";

const Wrapper = props => <div className="wrapper">{props.children}</div>;

export default Wrapper;