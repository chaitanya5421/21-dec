import React from "react";
import "./styling.css";
import HeaderModule from "./headerstyling.module.css";

const Stylings = () => {
  // inline
  // internal
  // External
  // module stylings
  const basicStyle = {
    headtwo: {
      marginTop: "10px",
      border: "1px solid yellow",
      fontSize: "30px",
    },
    headthree: {
      marginTop: "10px",
      border: "1px solid blue",
      fontSize: "30px",
    },
  };

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Sno</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>chaitaya</td>
          </tr>
          <tr>
            <td>1</td>
            <td>chaitaya</td>
          </tr>
        </tbody>
      </table>

      <button type="button" className="btn btn-primary">
        Update
      </button>
      <h2 className="bg-warning container my-5">Stylings</h2>
      <div style={{ backgroundColor: "lightgreen", color: "red" }}>
        This is Inline Stylings
      </div>
      <h5 style={basicStyle.headtwo}>This is internal stylings</h5>
      <h5 style={basicStyle.headthree}>This is internal stylings three</h5>

      <p className="exteraltext">This is external styles</p>
      <p className={HeaderModule.moduletext}>This is Module styles</p>
    </div>
  );
};

export default Stylings;
