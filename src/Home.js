import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__banner"
        src="https://i1.wp.com/digiday.com/wp-content/uploads/2018/08/bannerart_081018_2.jpg?fit=1400%2C600&ssl=1"
        alt="banner"
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">

        <Product
          id="1"
          title="Harry Potter and the Deadly Mystery - J.K. Rowling"
          price={499.00}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDvR2FOBqHh-uXwIIiX7NhK-l3U19l82VsJA&usqp=CAU"
        />
        
        <Product
          id="2"
          title="Samsung Galaxy Note10 Lite (Aura Glow, 6GB RAM, 128GB Storage)"
          price={37990.00}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBcRl4X55mdGCA4XxxUaJ7cv9RAVnTHpwBig&usqp=CAU"
        />

        <Product
          id="3"
          title="Redmi 8A Dual (Midnight Grey, 3GB RAM, 32GB Storage) – Dual Cameras & 5,000 mAH Battery"
          price={13999.00}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/71h%2BC9wJCjL._AC_UL270_SR270,270_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="4"
          title="boAt BassHeads 102 Wired Earphones with Immersive Audio, Multi-Function Button, in-line Microphone & Perfect Length Cable (Charcoal Black)"
          price={499}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/51fMwaNRSJL._AC_UL270_SR270,270_.jpg"
        />

        <Product
          id="5"
          title="Bosch 12 Place Settings Dishwasher (SMS66GI01I, Silver Inox)"
          price={51200.0}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/416gayO86ZL._AC_US160_FMwebp_QL70_.jpg"
        />

        <Product
          id="6"
          title="Fresh Tomato 1kg"
          price={40}
          rating={5}
          image="https://m.media-amazon.com/images/I/41+wxTKCfpL._SY250_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="7"
          title="OnePlus 8 Pro (Glacial Green 8GB RAM+128GB Storage)"
          price={32299.0}
          rating={4}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4HctLNABhiuyg7I9c3Hoc93A1-xXheuPNrw&usqp=CAU"
        />
      </div>

      <div className="home__row">
        <Product
          id="8"
          title="Fresh Yam Cubes, 250g"
          price={99.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71btUBxCQvL._SL1305_.jpg"
        />

        <Product
          id="9"
          title="Jean Angel: The Child Of The Prophecy"
          price={120.00}
          rating={4}
          image="https://m.media-amazon.com/images/I/51r8MjjbDdL.jpg"
        />

        <Product
          id="11"
          title="Nokia 105 2019 (Single SIM, Black)"
          price={4000.00}
          rating={1}
          image="https://images-na.ssl-images-amazon.com/images/I/31Z2ee9oYQL.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12"
          title="The Blue Umbrella"
          price={499}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51TGU8igF-L._SX310_BO1,204,203,200_.jpg"
        />

        <Product
          id="13"
          title="Attitude Is Everything: Change Your Attitude ... Change Your Life!"
          price={399}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41F8ATXoMOL._SX317_BO1,204,203,200_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="14"
          title="Samsung 253 L 1 Star Frost Free Double Door Refrigerator"
          price={24999}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2M9xbgO7rS13TOIvqdIg6jhq5WvCPXzNfwQ&usqp=CAU"
        />
        <Product
          id="15"
          title="Fresh ladyfinger - 1kg"
          price={39}
          rating={2}
          image="https://m.media-amazon.com/images/I/71HPEFBay8L._AC_UL320_.jpg"
        />

        <Product
          id="16"
          title="Ikigai: The Japanese secret to a long and happy life"
          price={251}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="17"
          title="Vivo Y50 (Iris Blue, 8GB RAM, 128GB Storage)"
          price={12999}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUdUnn9O9w2z9aMjiSmE3M2NVxVNZ9tIF7DA&usqp=CAU"
        />
        <Product
          id="18"
          title="Fresh onion - 1kg"
          price={49}
          rating={5}
          image="https://m.media-amazon.com/images/I/71rAIKxakYL._AC_UL320_.jpg"
        />

        <Product
          id="19"
          title="Whirlpool 200 L 4 Star Inverter Direct-Cool Single Door Refrigerator"
          price={23999}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/318hBThL94L.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="20"
          title="Fresh potato - 1kg"
          price={40}
          rating={4}
          image="https://m.media-amazon.com/images/I/61yXL70-RaL._AC_UL320_.jpg"
        />
        <Product
          id="21"
          title="All the Devils Are Here: A Novel (Chief Inspector Gamache Novel"
          price={499}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51mOX-KGWlL._SX328_BO1,204,203,200_.jpg"
        />

        <Product
          id="22"
          title="Redmi Note 9 Pro Max (Interstellar Black, 6GB RAM, 64GB Storage)"
          price={13999}
          rating={4}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPY3_Ltro5LI4VCyp8PqaXVsF16sMDD4i9yA&usqp=CAU"
        />
      </div>

      {/* Product */}

      <div className="home__row">
        <Product
          id="23"
          title="Acer 31.5-inch (80.01 cm) Curved Full HD LED Backlit Computer Monitor"
          price={49000}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR33DDBvL-PFpw0gqusvhzAPiThQpZG8M-iHw&usqp=CAU"
        />

        <Product
          id="234"
          title="AOC Curved LCD Monitor with LED Backlights with VGA Port, HDMI Port"
          price={69000}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6Qy4aiVKOGKXcdwdwAMm6dLbuZDpM_f9ziQ&usqp=CAU"
        />
      </div>
    </div>
  );
}

export default Home;
