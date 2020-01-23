import React from "react";
import PropTypes from "prop-types";

ListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
  completeToggle: PropTypes.func.isRequired
};

function ListItem(props) {
  const { name, done } = props.todo;
  const { completeToggle, remove } = props;
  return (
    <>
      <li style={{ textDecoration: done ? "line-through" : "" }}>{name}</li>
      <div style={{ margin: "10px 0 0 -15px" }}>
        <button
          className={`nes-btn ${!done ? "is-success" : ""}`}
          onClick={completeToggle}
        >
          ✔
        </button>

        {done && (
          <button className="nes-btn is-error" onClick={remove}>
            x
          </button>
        )}
      </div>
    </>
  );
}

export default ListItem;
