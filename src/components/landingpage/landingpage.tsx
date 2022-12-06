import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car } from '../modals/cars';
import { HiArrowNarrowRight } from "react-icons/hi";
import '../landingpage/landingpage.css';
import BMWX7 from '../../images/BMWX7.jpg';
import audi from '../../images/audi.jpg';
import mercedes from '../../images/mercedes.jpg';
import BMW from '../../images/BMW.jpg';
import Footer from '../footer/footer';

function LandingPage(){
    const [cars, setCars] = useState<Car[]>([]);
    const navigate=useNavigate();
    
    useEffect(() => {

        axios.get('http://localhost:3000/cars')
          .then(res => {
            console.log(res.data)
            setCars(res.data);
            console.log(cars);
          })
    
          .catch(err => console.log(err))
    
      }, [])

      return (
        <div className="landingpage">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={mercedes} className="d-block w-100" alt="SUV" />
              </div>
              <div className="carousel-item">
                <img src={BMW} className="d-block w-100" alt="CARX" />
    
              </div>
              <div className="carousel-item">
                <img src={audi} className="d-block w-100" alt="SEDAN" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <h1 className="FindCar style" >FIND YOUR DREAM CAR</h1>
          <div>
            <input className="search-bar form-control" type="search" placeholder="Enter car name..." aria-label="Search" />
            <button className="search-button btn btn-danger" type="submit">Search</button>
          </div>
          <div className="container featuredcars">
            <div className="mt-5 row">
              <div className="col-12">
                <h1>Featured <span className='fw-bolder'>Cars</span></h1>
                <hr />
              </div>
            </div>
            <div className="row justify-content-left">
              <div className="col-md-8">
                <div className="mb-5 button-card">
                  <button className="btn btn-outline-dark">All</button>
                  <button className="btn btn-outline-dark">Trending</button>
                  <button className="btn btn-outline-dark">Upcoming</button>
                </div>
    
              </div>
    
              <div className="col-md-2 offset-md-2">
    
                <button className="button-viewall mt-2" onClick={()=>{navigate('/carlist')}}>View All<span className="ms-2"><HiArrowNarrowRight /></span></button>
    
              </div>
    
            </div>
            <div className="ms-2 row mb-4">
          <div className="col-md-12 col-lg-12 d-flex">
            {cars.slice(0, 4).map((p) => {
              return (
                <div className="ps-2 col-md-3 col-lg-3">
                  <div className="card" onClick={()=>{navigate(`/carDetail/${p.id}`)}} >
                    <img src={BMWX7} className="card-img-top" alt="..." height="300" />
                    <div className="card-body">
                      <h5 className="card-title">{p.carName}<span className="ms-2 arrow"><HiArrowNarrowRight /></span></h5>
                      <span>{p.cost} onwards</span>
                    </div>
                  </div>
                </div>
              )
            })

            }
          </div>
        </div>
          </div>
          <Footer/>
        </div>
      );
    }
    
export default LandingPage;
