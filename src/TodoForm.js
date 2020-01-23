import React from "react";

export default function TodoForm(props) {
  return (
    <div style={{ margin: "0 0 25px" }}>
      <form onSubmit={props.onSubmit}>
        <div className="nes-field">
          <input
            style={{ margin: "0 0 15px 0" }}
            type="text"
            value={props.value}
            onChange={props.onChange}
            placeholder="Read React hooks docs"
            className="nes-input"
          />
        </div>

        <button className="nes-btn is-primary" type="submit">
          + add
        </button>
      </form>
    </div>
  );
}
