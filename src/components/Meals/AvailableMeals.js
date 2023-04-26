import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Bombay Sandwich',
    description: 'Spiced potatoes| Onions|Beetroot|Cheese',
    price: 625,
  },
  {
    id: 'm2',
    name: 'Cheese and Sweet Pepper Panini',
    description: 'Sun-dried tomatoes| Olive tapenade| Fresh mozzarella cheese',
    price: 625,
  },
  {
    id: 'm3',
    name: 'Lebanese Falafel Wrap',
    description: 'Falafel| Fattoush salad| Sumac| Yogurt garlic sauce',
    price: 499,
  },
  {
    id: 'm4',
    name: 'Barbecue Chicken Wrap',
    description: 'Grilled chicken| Barbecue sauce| Tortilla',
    price: 700,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
