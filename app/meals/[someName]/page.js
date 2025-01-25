import classes from './page.module.css';
import { getMeal } from '@/lib/meals';

export default async function MealDetailsPage({ params }) {
  // Odczytujemy dynamiczny parametr
  const { someName } = await params;

  // Pobieramy szczegóły posiłku z bazy danych
  const meal = getMeal(someName);

  // Jeśli posiłek nie został znaleziony
  if (!meal) {
    return (
      <main className={classes.main}>
        <h1>Meal not found</h1>
      </main>
    );
  }

  // Renderowanie szczegółów posiłku
  return (
    <main className={classes.main}>
      <header className={classes.header}>
        <h1 className={classes.title}>{meal.title}</h1>
        <div className={classes.image}>
          <img src={meal.image} alt={meal.title} />
        </div>
        <p className={classes.summary}>{meal.summary}</p>
        <p className={classes.creator}>
          Created by: <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
        </p>
      </header>
      <section className={classes.instructions}>
        <h2>How to Prepare</h2>
        <p>{meal.instructions}</p>
      </section>
    </main>
  );
}
