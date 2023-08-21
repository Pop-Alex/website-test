import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
  });
  const input = (event) => {
    const { name, value } = event.target;

    setData((preval) => {
      return { ...preval, [name]: value };
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    alert(`${data.name}`);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={submitForm}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  NAME
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="John"
                  value={data.name}
                  onChange={input}
                />
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={data.email}
                  onChange={input}
                />

                <label for="exampleFormControlInput1" className="form-label">
                  Phone{" "}
                </label>
                <input
                  type="phone"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="123456"
                  value={data.phone}
                  onChange={input}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"></textarea>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label className="form-check-label" for="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>

              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
