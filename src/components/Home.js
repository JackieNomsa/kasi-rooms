import React from "react";
import "../index.css";
import "../components/Footer";
import { AiOutlineSearch } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";
import Footer from "../components/Footer";
import Gallery from "./Gallery";

function Home() {
  return (
    <>
      <div className="main-content">
        <div className="main-headers">
          <h1>Looking for a room to rent</h1>
          <hr />
          <h2> Looking to advertise a room</h2>
        </div>
        <div className="search">
          <h3>search for a room</h3>
          <form action="">
            <input type="text" placeholder="Enter Surburb/Location" />
            <br />
            <button type>
              <AiOutlineSearch className="search-icon" />
              Search
            </button>
          </form>
        </div>
        <div className="my-links">
          <a href="rent">rent a room</a>|<a href="advert">advertise</a>
        </div>
        <p>
          Advertise for only <span className="price">R50 a month</span>
        </p>
        <p>Active in all 9 provinces</p>
        <p>in any suburb or location</p>
      </div>
      <h3 className="browse">Browse Rooms</h3>
      <hr />
      <div className="all-rooms">
        <Gallery image="https://source.unsplash.com/200x200" kasi="Tembisa" />
        <Gallery
          image="https://source.unsplash.com/201x201"
          kasi="Kempton Park"
        />
        <Gallery
          image="https://source.unsplash.com/202x202"
          kasi="Ivory Park"
        />
        <Gallery image="https://source.unsplash.com/203x203" kasi="Primrose" />
        <Gallery image="https://source.unsplash.com/204x204" kasi="Fourways" />
        <Gallery image="https://source.unsplash.com/205x205" kasi="Sandton" />
        <Gallery image="https://source.unsplash.com/206x206" kasi="Randburg" />
        <Gallery image="https://source.unsplash.com/207x207" kasi="Witbank" />
        <Gallery
          image="https://source.unsplash.com/208x208"
          kasi="Summer greens"
        />
        <Gallery image="https://source.unsplash.com/209x209" kasi="Kwamashu" />
      </div>
      <div>
        <h3 className="viewmore">
          <a href="viewmore">
            <MdExpandMore />
          </a>
        </h3>
      </div>

      <Footer />
    </>
  );
}

export default Home;
