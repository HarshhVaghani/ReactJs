import React from 'react'

const Card = () => {
  return (
    <div className="container my-5">
        <div className="row g-4">
          {["Design", "Development", "Deployment"].map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">{item}</h5>
                  <p className="card-text">
                    Professional {item.toLowerCase()} services using modern tools.
                  </p>
                  <button className="btn btn-outline-primary">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Card