import React from "react";

export default function form(props) {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            {props.email}
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
            {props.div}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            {/* Check me out */}
            {props.rememberMe}
          </label>
        </div>
        <button type="submit" className="btn btn-primary" style={{
                  color: 'White',
                  backgroundColor: 'Black',
                  border: '1px solid Black' 
                }}>
          Submit
        </button>
      </form>
    </>
  );
}
