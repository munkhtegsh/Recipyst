import axios from 'axios';

// state
const initialState = {
  //user id was never used so trying to implement again
  userInfo: {
    id: 0,
    username: '',
    profile_img: ''
  },
  chosenItem: {},
  searchedFood: [],
  weeklyFoodList: [],
  favoriteFoodList: [],
  cart: [],
  shared: {},
  currentNutrients: [],
  totalIngrToBuy: 0,
  myRecipe: []
}

// actionTypes
const CHOSEN_ITEM = "CHOSEN_ITEM";
const SEARCHED_FOOD = "SEARCHED_FOOD";
const GET_USER_INFO = "GET_USER_INFO";
const GET_WEEKLY = "GET_WEEKLY";
const GET_FAVORITE = "GET_FAVORITE";
const GET_CART_ITEMS = "GET_CART_ITEMS";
const SHARE_FOOD = "SHARE_FOOD";
const CHANGE_TO_EMPTY= "CHANGE_TO_EMPTY";
const GET_CURRENT_NUTRIENTS = "GET_CURRENT_NUTRIENTS";
const GET_TOTAL_INGR_TO_BUY = "GET_TOTAL_INGR_TO_BUY";
const GET_MY_RECIPE = "GET_MY_RECIPE";

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CHOSEN_ITEM:
      return Object.assign({}, state, {chosenItem: action.payload});
    case SEARCHED_FOOD + '_FULFILLED': 
      return Object.assign({}, state, {searchedFood: action.payload});
    case GET_USER_INFO + '_FULFILLED':
      return {...state, userInfo: {...action.payload}};
    case GET_WEEKLY + '_FULFILLED':
      return Object.assign({}, state, {weeklyFoodList: action.payload});
    case GET_FAVORITE + '_FULFILLED':
      return {...state, favoriteFoodList: action.payload};
    case GET_CART_ITEMS + '_FULFILLED':
      return {...state, cart: action.payload};
    case SHARE_FOOD:
      return {...state, shared: action.payload};
    // case CHANGE_TO_EMPTY: 
    //   return {...state, shared: ''};
    case GET_CURRENT_NUTRIENTS:
      return {...state, currentNutrients: action.payload};
    case GET_TOTAL_INGR_TO_BUY + '_FULFILLED':
      return {...state, totalIngrToBuy: action.payload};
    case GET_MY_RECIPE + '_FULFILLED':
      return {...state, myRecipe: action.payload};
    default:
      return state;
  }
};

// return {...state, userinfo: {...action.payload}} => next time try it.


// actions
export const chosenItem = (item) => {
  return {
    type: CHOSEN_ITEM,
    payload: item 
  }
};

export const searched_Food = (food, queries) => {
  console.log(food, queries)
  let url = `https://api.edamam.com/search?q=${food}&app_id=be99730b&app_key=83ce0b8963a7cb51a02cbbcdaed58f50&${queries}`; 
  let foodList = axios.get(url)                
    .then(list => {
      return list.data.hits
    });
  return {
    type: SEARCHED_FOOD,
    payload: foodList
  }
};

export const getUserInfo = () => {
  const info = axios.get('/api/userinfo').then(res => {
    return res.data[0]
  })

  return {
    type: GET_USER_INFO,
    payload: info
  }
};

export const getWeeklyItems = () => {
  let weeklyItems = axios.get('/api/weekly').then(weeklyList => {
    return weeklyList.data;
  });

  return {
    type: GET_WEEKLY,
    payload: weeklyItems
  }
};

export const getFavoriteItem = () => {
  let favoriteItems = axios.get('/api/favorite').then(favoriteList => {
    return favoriteList.data;
  });

  return {
    type: GET_FAVORITE,
    payload: favoriteItems
  }
};

export const getCartItems = () => {
  let items = axios.get('/api/cart').then(res => {
    return res.data
  });

  return {
    type: GET_CART_ITEMS,
    payload: items
  }
}

export const shareFood = (food) => {
  return {
    type: SHARE_FOOD,
    payload: food
  }
}

export const changeToEmpty = () => {
  return {
    type: CHANGE_TO_EMPTY,
  }
}

export const getCurrentNutrients = (nutrients) => {
  return {
    type: GET_CURRENT_NUTRIENTS,
    payload: nutrients
  }
}

export const getTotalIngrToBuy = () => {
  let totalIngr = axios.get('/api/totaling').then(res => {
    return parseInt(res.data[0].sum);
  })
  console.log(totalIngr)

  return {
    type: GET_TOTAL_INGR_TO_BUY,
    payload: totalIngr
  }
}

export const getMyRecipe = () => {
  let ownRecipe = axios.get('/api/ownrecipe').then(res => {
    return res.data
  })
  console.log(ownRecipe)
  return {
    type: GET_MY_RECIPE,
    payload: ownRecipe
  }
}
export default reducer;