import axios from 'axios';

// state
const initialState = {
  userid: 0,
  username: '',
  profile_picture: '',
  chosenItem: {},
  searchedFood: [],
  weeklyFoodList: [],
  favoriteFoodList: [],
}

// actionTypes
const CHOSEN_ITEM = "CHOSEN_ITEM";
const SEARCHED_FOOD = "SEARCHED_FOOD";
const CREATE_USER_ID = "CREATE_USER_ID";
const GET_WEEKLY = "GET_WEEKLY";
const GET_FAVORITE = "GET_FAVORITE";
const GET_CART_ITEMS = "GET_CART_ITEMS";

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CHOSEN_ITEM:
      return Object.assign({}, state, {chosenItem: action.payload});
    case SEARCHED_FOOD + '_FULFILLED': 
      return Object.assign({}, state, {searchedFood: action.payload});
    case CREATE_USER_ID:
      return {...state, userid: action.payload};
    case GET_WEEKLY + '_FULFILLED':
      return Object.assign({}, state, {weeklyFoodList: action.payload});
    case GET_FAVORITE + '_FULFILLED':
      return {...state, favoriteFoodList: action.payload};
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
  // console.log(food, queries)
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

export const createId = (id) => {
  return {
    type: CREATE_USER_ID,
    payload: id
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

export default reducer;