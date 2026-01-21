import React from 'react'

const Form = () => {
  return (
    <div className="container my-5">
        <h3>Contact Us</h3>
        <form className="row g-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="col-12">
            <textarea className="form-control" rows="3" placeholder="Message"></textarea>
          </div>
          <div className="col-12">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
  )
}

export default Form