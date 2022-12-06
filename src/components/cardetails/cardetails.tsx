import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Car } from "../modals/cars";
import interior1 from '../../images/interior1.png';
import interior2 from '../../images/interior2.png';
import detail1 from '../../images/detail1.png';
import detail2 from '../../images/detail2.png';
import './cardetails.css';
import Footer from "../footer/footer";

function CarDetails()
{
    const [cars, setCars] = useState<Car>();
    const navigate=useNavigate();
    const {id}=useParams();
    const url:string="http://localhost:3000/cars/"+id;
    
    useEffect(() => {

        axios.get(url)
          .then(res => {
            console.log(res.data)
            setCars(res.data);
            console.log(cars);
          })
    
          .catch(err => console.log(err))
    
      }, [])
    return(
    <React.Fragment>
        <div className="bg-dark">
            <div className="ps-5 mt-5 container">
                <div className="row">
                    <div className="mt-5 col-lg-2 col-md-2">
                        <h2 className='fw-bolder'>{cars?.carName}</h2>
                    </div>
                    <div className="mt-5 offset-lg-6 offset-md-6 col-lg-4 col-md-4">
                        <h1>Car <span className="fw-bolder">Specification</span></h1>
                    </div>
                </div>
                <div className="mt-5 row">
                    <div className="col-lg-1 col-md-1">
                        <h1>01</h1>
                    </div>
                    <div className="pt-4 col-lg-6 col-md-6">
                    <img src={detail1} className="card-img-top" alt="..." height="600" />
                    </div>
                    <div className="offset-lg-1 offset-md-1 col-lg-3 col-md-3">
                        <h6 className='text-secondary'>Fuel Type</h6>
                        <h5>{cars?.fueltype}</h5>
                        <h6 className='pt-2 text-secondary'>Engine</h6>
                        <h5>{cars?.engine}</h5>
                        <h6 className='pt-2 text-secondary'>Torque</h6>
                        <h5>{cars?.torque}</h5>
                        <h6 className='pt-2 text-secondary'>Acceleration</h6>
                        <h5>{cars?.accelaration}</h5>
                        <h6 className='pt-2 text-secondary'>Top Speed</h6>
                        <h5>{cars?.topSpeed}</h5>
                        <h6 className='pt-2 text-secondary'>Variants</h6>
                        <h5>{cars?.variant}</h5>
                        
                    </div>
                </div>

                <div className="mt-5 row">
                    <div className="col-lg-1 col-md-1">
                        <h1>02</h1>
                    </div>
                    <div className="pt-4 col-lg-6 col-md-6">
                    <img src={detail2} className="card-img-top" alt="..." height="600" />
                    </div>
                    <div className="offset-lg-1 offset-md-1 col-lg-3 col-md-3">
                        
                        <h2 className='fw-bolder'>Exteriors</h2>
                        <div className="mt-5 box">
                        
                        </div>
                        <h5 className='mt-5 text-secondary'>Exterior</h5>
                        <h5>{cars?.exterior}</h5>
                    </div>
                </div>
                <div className="mt-5 pb-5 row">
                    <div className="col-lg-1 col-md-1">
                        <h1>03</h1>
                    </div>
                    <div className="pt-4 col-lg-6 col-md-6">
                    <img src={interior2} className="card-img-top" alt="..." height="300" />
                    <img src={interior1} className="mt-4 card-img-top" alt="..." height="300" />
                    </div>
                    <div className="offset-lg-1 offset-md-1 col-lg-3 col-md-3">
                        
                        <h2 className='fw-bolder'>Interior finishes</h2>
                        <div className="mt-5 box">
                        
                        </div>
                        <ul className="fw-bold mt-5">
                            <li>X5 has a high-end cockpit</li>
                            <li>Vernasca leather upholstery for the seat</li>
                            <li>A panoramic sunroof</li>
                            <li>Four-zone temperature control</li>
                            <li>BMW display key</li>
                            <li>heads-up display, parking and reversing assistance</li>
                            <li>Surround-view cameras and attentiveness attention</li>
                        </ul>
                        <h3 className='mt-5 fw-bolder'>Cost <span className='ms-5'>{cars?.cost}</span></h3>
                        <button className="btn booking-button" onClick={()=>{navigate(`/booking/${id}`)}}> BOOK NOW</button>
                    </div>
                </div>
            </div>
            </div>
            <Footer/>
    </React.Fragment>);
}
export default CarDetails;