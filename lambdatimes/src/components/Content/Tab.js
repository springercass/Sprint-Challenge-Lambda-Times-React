import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  let tab = "";
  if (props.tab === props.selectedTab) {
    tab = "tab active-tab";
  } else {
    tab = "tab";
  }
  return (
    <div
      className={"tab"}
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
