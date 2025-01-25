
import { getMeal } from '@/lib/meals.js';
import classes from './page.module.css';

export default async function MealDetailsPage({ params }) {
  const { someName } =await  params;
  const meal = getMeal(someName);

  if (!meal) {
    return (
      <main>
        <div className={classes.loading}>Loading meal details...</div>
      </main>
    );
  }

  return (
    <>
      <header className={classes.header}>
        <h1>
          Discover the secret of{' '}
          <span className={classes.highlight}>{meal.name}</span>
        </h1>
        <p>
          Created by <a href="#" className={classes.link}>{meal.creator}</a>
        </p>
        <p>
          {meal.summary}
        </p>
      </header>
      <main className={classes.main}>
        <div className={classes.image}>
          <img src={meal.image} alt={meal.name} />
        </div>
        <section className={classes.instructions}>
          <h2>How to Prepare</h2>
          <p>{meal.instructions}</p>
        </section>
      </main>
    </>
  );
}