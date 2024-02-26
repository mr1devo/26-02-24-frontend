import React from 'react';
import './work.css';
import { useNavigate } from 'react-router-dom';

const Works = () => {
  const navigate = useNavigate();
  const toplace = () => {
    navigate('/Search');
  };

  return (
    <div className='work'>
        <h1>Our Services</h1><br/><br/>
    <div className="image-gallery">

    <div class="card">
  <a href='/Search'>
    <img src="https://i0.wp.com/keralatouristplaces.in/wp-content/uploads/2020/11/Muniyattukunnu-hillock-2-scaled.jpg?fit=2560%2C1440&ssl=1" alt="places" />
    </a>
  <div class="card-content">
  <a href='/Search'>
    <h2 class="card-title" >Places</h2>
    <p class="card-description">Discover enchanting destinations, from historic landmarks to picturesque landscapes, with FOUND IT!. Explore hidden treasures and iconic landmarks, each offering a unique blend of culture and natural beauty. Let us guide you to unforgettable places where every corner tells a story waiting to be explored.</p>
    </a></div>
</div>

    <div class="card">
  <a href="https://paradisefamilyrestaurant.com/">
    <img src="https://housing.com/news/wp-content/uploads/2023/08/Best-5-star-restaurants-in-Hyderabad-07.png" alt="restaurants" />
  </a>
  <div class="card-content">
    <h2 class="card-title">Restaurants</h2>
    <p class="card-description">Explore culinary delights from around the globe with our restaurant recommendations. From cozy cafes to Michelin-starred fine dining, indulge in a world of flavors that will tantalize your taste buds. Let us guide you to unforgettable dining experiences where every dish is a celebration of flavor and creativity.</p>
  </div>
</div>

    <div className="card">
  <a href="https://www.welbeck.in/">
    <img src="https://www.newworldhotels.com/wp-content/uploads/2014/05/Mobile-NWHBR-Exterior.jpg" alt="hotels" />
  </a>
  <div className="card-content">
    <h2 className="card-title">Hotels</h2>
    <p className="card-description">Discover unparalleled comfort and luxury with our handpicked selection of hotels. From boutique hideaways to opulent resorts, each accommodation promises exceptional service and unforgettable experiences. Let us guide you to your perfect home away from home, where relaxation and indulgence await.</p>
  </div>
</div>

    {/* <div className="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbwushPFKFdWIYYNrtJdXnsq_cnywl7HYapw7VimVw4jO3ym7C0mBIsGL_71DvjhYIUk&usqp=CAU" alt="Stage Decor" />
      <div className="card-content">
        <h2 className="card-title">Stage Decor</h2>
        <p className="card-description">. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui</p>
      </div>
    </div> */}
  </div>
  </div>
  );
}

export default Works;
