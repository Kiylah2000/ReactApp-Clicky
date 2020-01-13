import React from "./node_modules/react";
import "/src/components/wrapper/wrapper.css";

const wrapper = props => <div className="wrapper">{props.children}</div>;

export default wrapper;