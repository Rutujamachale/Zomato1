import React from "react";
import './Finincials.css';

const Financials = () => {
  return (
    <div>
      <header>
        <h1>Financials</h1>
        
        <h2>Shareholders' Letter and Results</h2>
      </header>

      <div className="f-row">
        <div className="f-info">
          <img
            src="https://b.zmtcdn.com/investor-relations/2f012a6bbbb592159108f792460fb5b3_1737366169.jpeg"
            alt="Q3 FY25"
          />
          <p> Q3 FY25</p>
        </div>

        <div className="f-info">
          <img
            src="https://b.zmtcdn.com/investor-relations/fbfcc09072b22ad718da3681e98f711d_1729591272.png"
            alt="Q2 FY25"
          />
          <p> FY25</p>
        </div>

        <div className="f-info">
          <img
            src="https://b.zmtcdn.com/investor-relations/c0dcc908c857e346b5b2ece74be31792_1722505954.jpeg"
            alt="Q1 FY25"
          />
          <p> Q1 FY25</p>
        </div>

        <div className="f-info">
          <img
            src="https://b.zmtcdn.com/investor-relations/907d46d6c4565f639483f239566bd84f_1715593017.png"
            alt="Q4 FY24"
          />
          <p>Q4 FY24</p>
        </div>
      </div>

      <footer>
        <p>&copy; 2025 Zomato - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Financials;
