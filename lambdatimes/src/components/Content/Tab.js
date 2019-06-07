import React from "react";
import PropTypes from "prop-types";

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

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
};

export default Tab;
