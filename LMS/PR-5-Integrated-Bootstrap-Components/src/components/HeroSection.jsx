import React from 'react'

const HeroSection = () => {
  return (
    <div className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">Bootstrap React Website</h1>
          <p className="lead">Fully responsive web page using Bootstrap components</p>
          <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#demoModal">
            Open Modal
          </button>
        </div>
      </div>
  )
}

export default HeroSection