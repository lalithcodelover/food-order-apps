import React from "react";

import classes from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food ,Delivered to You</h2>
      <p>You can now view food-order-app in the browser.</p>
      <p>
        Note that the development build is not optimized. To create a production
        build, use npm run build.
      </p>
    </section>
  );
};

export default MealsSummary
