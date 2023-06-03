import React, { useState } from "react";
import Admin_Product from "@/components/Admin_Product";
import Admin_Create from "@/components/Admin_Create";
import Admin_Update from "@/components/Admin_Update";
import Admin_Delete from "@/components/Admin_Delete";

const Admin = () => {
  const [formOption, setFormOption] = useState("CREATE");

  return (
    <div className="container mt-5 p-5 text-center">
      <h1 className="text-secondary p-2">WELCOME TO BACKOFFICE</h1>
      <div className="p-3 w-50 mx-auto rounded border  mb-2">
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="PRODUCTS"
          onClick={() => setFormOption("PRODUCTS")}
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          PRODUCTS
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="CREATE"
          onClick={() => setFormOption("CREATE")}
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          CREATE
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="UPDATE"
          onClick={() => setFormOption("UPDATE")}
        />
        <label className="form-check-label" htmlFor="inlineRadio2">
          UPDATE
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio3"
          value="DELETE"
          onClick={() => setFormOption("DELETE")}
        />
        <label className="form-check-label" htmlFor="inlineRadio2">
          DELETE
        </label>
      </div>
      </div>
      {formOption === "PRODUCTS" && (
        <div>
          <h1 className="text-secondary">STORAGED PRODUCTS</h1>
          <Admin_Product />
        </div>
      )}

      {formOption === "DELETE" && (
        <div>
          <Admin_Delete />
        </div>
      )}
      {formOption === "CREATE" && (
        <div>
          <Admin_Create />
        </div>
      )}
      {formOption === "UPDATE" && (
        <div>
          <Admin_Update />
        </div>
      )}
    </div>
  );
};

export default Admin;
