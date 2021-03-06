import React from 'react';

import nutrition from '../images/nutrition.jpg';


import Footer from './Footer';
import NutritionStep from '../Common/NutritionInfo';
import NutritionTips from '../components/NutritionTips'



const Nutrition = () => {
    return (
      <>
        <div>
          <section className="landing-page1">
            <img
              className="nutrition-coaching"
              src={nutrition}
              width="100%"
              height="560px"
              alt="nutrition"
              loading="lazy"
            />
            <div className="matteo">
              <h2 className="training" style={{ maxWidth: "235px" }}>
                NUTRITION COACHING
              </h2>
            </div>
          </section>
          <NutritionStep />
          <NutritionTips />
        </div>
        <Footer />
      </>
    );
}

export default Nutrition;