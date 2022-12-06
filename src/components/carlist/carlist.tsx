import axios from "axios";
import { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import BMWX7 from '../../images/BMWX7.jpg';
import { Car } from "../modals/cars";
import '../carlist/carlist.css';
import Footer from "../footer/footer";


function CarList(){
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
        <div className="carlist">
            <div className="ms-2 row mb-4">
            {cars.map((p) => {
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
          <Footer/>
        </div>
      );
    }
    
export default CarList;