import React, { useState } from 'react';
import './styles.css';

const App = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [rideType, setRideType] = useState('standard');

  const handleBookRide = (e) => {
    e.preventDefault();
    alert(`Ride booked!\nPickup: ${pickup}\nDestination: ${destination}\nRide Type: ${rideType}`);
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-container">
            <div className="logo">RideShare</div>
            <ul className="nav-links">
              <li><a href="#ride">Ride</a></li>
              <li><a href="#drive">Drive</a></li>
              <li><a href="#business">Business</a></li>
              <li><a href="#about">About</a></li>
            </ul>
            <div className="auth-buttons">
              <a href="#login" className="btn btn-outline">Log in</a>
              <a href="#signup" className="btn btn-primary">Sign up</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Go anywhere with RideShare</h1>
              <p>Request a ride, hop in, and go. Choose your fare. Pay with cash or card.</p>
              <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
                <a href="#" className="btn btn-primary">Get a ride</a>
                <a href="#" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Learn more</a>
              </div>
            </div>
            <div className="booking-form">
              <h3>Request a ride now</h3>
              <form onSubmit={handleBookRide}>
                <div className="form-group">
                  <label htmlFor="pickup">Pickup location</label>
                  <input
                    type="text"
                    id="pickup"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Enter pickup location"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="destination">Where to?</label>
                  <input
                    type="text"
                    id="destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Enter destination"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ride-type">Ride type</label>
                  <select
                    id="ride-type"
                    value={rideType}
                    onChange={(e) => setRideType(e.target.value)}
                  >
                    <option value="standard">Standard</option>
                    <option value="premium">Premium</option>
                    <option value="xl">XL</option>
                  </select>
                </div>
                <button type="submit" className="btn-book">
                  Request RideShare
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why choose RideShare?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚗</div>
              <h3>Quick rides</h3>
              <p>Get a ride in minutes with our network of reliable drivers available 24/7 in your city.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Easy payments</h3>
              <p>Pay with your preferred method - credit card, debit card, or cash. No hassle, just convenient rides.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Safe & secure</h3>
              <p>All our drivers are background-checked and vehicles are regularly inspected for your safety.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Top rated</h3>
              <p>Join millions of satisfied customers who trust us for their daily commute and special trips.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Products</h3>
              <ul>
                <li><a href="#">Ride</a></li>
                <li><a href="#">Drive</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Freight</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Global citizenship</h3>
              <ul>
                <li><a href="#">Safety</a></li>
                <li><a href="#">Diversity</a></li>
                <li><a href="#">Transparency</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Travel</h3>
              <ul>
                <li><a href="#">Cities</a></li>
                <li><a href="#">Airports</a></li>
                <li><a href="#">Lost & found</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 RideShare Technologies Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;