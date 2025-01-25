

export default async function MealDetailsPage({ params }) {
  const { someName } =  await params;

  return <h1>Meal Details for {someName}</h1>;
}
