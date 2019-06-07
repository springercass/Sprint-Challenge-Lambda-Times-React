import React from "react";

const Tab = props => {
  let cn = "";
  if (props.tab === props.selectedTab) {
    cn = "tab active-tab";
  } else {
    cn = "tab";
  }
  return (
    <div
      className={"cn"}
      onClick={() => {
        const selectedTab = props.tab;
        props.selectTabHandler(selectedTab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
