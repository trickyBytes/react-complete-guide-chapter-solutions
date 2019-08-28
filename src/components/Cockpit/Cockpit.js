import React, { useEffect } from "react";

const Cockpit = props => {
  //Combines componentDidMount and componentDidUpdate for func element
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    setTimeout(() => {
      alert('saved data to cloud');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  }, []);//Empty array means only run once.

  // Run on every lifecycle event
  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    }
  });

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <p>This is really working!</p>
      {/* One way of binding a method call to on click event, use bind primarliy as it's more efficient (not sure why) */}
      <button style={style} onClick={props.clicked}>
        Switch Name
      </button>
    </div>
  );
};

export default Cockpit;
