import React from "react";
import "./styles/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
      {/* image banner */}
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
        className="home__image"
      />

      <div className="home__row">
        <Product 
          id="1234"
          title="Five-Step Luxurious Moisturizing Kit"
          price={69.99}
          rating={4}
image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpuPd8viwvkeZ4jCJ2BDzvqSIoUa6HgTK96w&usqp=CAU'        />
        <Product 
          id="12345"
          title="DSLR Canopy Rebel 69420z"
          price={229.99}
          rating={5}
image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLN0_NvJuLGMVD_HxY2bQ4XgZEiQ4PeH38w715AYBPg&s'        />
        
        </div>

        <div className="home__row">
        <Product 
          id="12346"
          title="Fancy Water Bottle Everyone Buys"
          price={49.99}
          rating={3}
image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkx_dkmVTZR7XEJdzhyRCTNMR38F0Ozbq7baJsKamfkg&s'        />
        <Product 
          id="12347"
          title="Smart Watch with Smart Face"
          price={369.99}
          rating={5}
image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbD_PUwfdtYND0PnoTrWw4URh0YRdmzJ6bchohYpIm1w&s'        />
         <Product 
          id="12348"
          title="OH! It SHINY and Colorful~"
          price={69.99}
          rating={4}
image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReJbQ6aThyE0I87NeA3rdsrWfUveEnjxse-Q&usqp=CAU'        />
        
        </div>

        <div className="home__row">
        
        <Product 
          id="12349"
          title="Boopz Headphones by that Famous Guy"
          price={469.99}
          rating={3}
image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAc5Edn1SzRZE_l7LhJKAfeVLpDQF0tXCoSzJ2lxGZPvdk6Jzi4KthxwOYH57gEvDZQRA&usqp=CAU'        />
        </div>

     </div>
    </div>
  );
}

export default Home;
