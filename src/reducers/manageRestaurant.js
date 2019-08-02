
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state ={
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      console.log('Add Restaurant')
      const restaurant = {
        id: cuid(),
        text: action.text
      }

      return { ...state, restaurants: [...state.restaurants, restaurant] }

    case 'DELETE_RESTAURANT':
      console.log('Delete Restaurant')
      return { 
        ...state, 
        restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id ),
        reviews: state.reviews.filter(review => review.restaurantId !== action.id )
      }

    case 'ADD_REVIEW':
    
      const review = {
        id: cuid(),
        restaurantId: action.review.restaurantId,
        text: action.review.text
      }

      return { ...state, reviews: [...state.reviews, review] }

    case 'DELETE_REVIEW':
    
      return { ...state, reviews: state.reviews.filter(review => review.id !== action.id )}
        
    default:
      return state;
  }
}
