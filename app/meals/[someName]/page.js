import classes from './page.module.css';
import { getMeal } from '@/lib/meals';

export default async function MealDetailsPage(context) {
  // Odczytujemy dynamiczny parametr
  const { params } = context;
  const someName = params;

  // Pobieranie szczegółów dania z bazy danych
  const meal = getMeal(someName);

  // Obsługa przypadku, gdy danie nie istnieje
  if (!meal) {
    return (
      <main className={classes.main}>
        <p className={classes.loading}>Meal not found...</p>
      </main>
    );
  }

  // Renderowanie szczegółów dania
  return (
    <main className={classes.main}>
      <header className={`${classes.header} ${classes.reversedHeader}`}>
        <div className={classes.headerText}>
          <h1 className={`${classes.title} ${classes.highlight}`}>{meal.name}</h1>
          <p className={classes.summary}>{meal.summary}</p>
          <div className={classes.creator}>
            <span>Created by </span>
            <a href="#" className={classes.link}>
              {meal.creator}
            </a>
          </div>
        </div>
        <div className={classes.image}>
          <img src={meal.image} alt={meal.name} />
        </div>
      </header>
      <section className={classes.instructions}>
        <h2>How to Prepare</h2>
        <p>{meal.instructions}</p>
      </section>
    </main>
  );
}
