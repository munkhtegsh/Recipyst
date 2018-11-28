# Recipyst

This is a single page application that can used as a food recipe plan for anyone. All the user actions are performed via REST API at the client side using Axios.

## Features
1. Search engine can pull up more than 200,000 recipes /Edamam API/
    * Search by English or Spanish language
    * Search by ingredients names 
    * Search by calories 
    * Search with health identity
      * Vegetarian
      * Vegan
      * Sugar Conscious
      * Alcohol-Free
    * Search with diet
      * High-Protein
      * Low-Carb
      * Low-Fat
      * Balanced
    * Search with allergies
      * Gluten
      * Dairy
      * Eggs
      * Soy
      * Fish
      * Shellfish
      * Tree nuts
      * Peanuts
2. User is able to create an account and login to it. Username and password authentication is done through Auth0
3. Weekly food plan 
    * Edit the original recipe
    * Add specific ingredients to shopping bag
    * Instructions - let user to see the original source website
    * Nutrein info  - let user to monitore the nutrein data
4. Favorite food inventory 
5. User can implement his/her own food recipes /S3/
    * Recipe form
    * Save food images /AWS/
6. Recipe video search /Youtube API/
7. Note taking UX design
    * Vegetable
    * Meat
    * Fruit
    * Drinks
8. Shopping bag
    * Edit ingredients name
    * Edit ingredients quantity
    * Delete ingredients
9. Chat
    * Currently user can chat in broadcast /Socket.io/
    * User is able to share his/her favorite recipe with others
## Screenshot/GIF
### Share food with others

![share](https://user-images.githubusercontent.com/24214152/49121295-c9238600-f264-11e8-8c22-d84cd5daec6a.gif)

## Security 
  1. Access to API is protected by several middleware layer that if the client should be made access to recource
  2. Each input by the user protected from common security vulnerabilities
## API list
The following APIs can be called for registration and login purposes. No Authentication is required to call these APIs.
1. `GET /auth/login`
2. `GET /auth/logout`
3. `GET /api/userinfo`
2. `GET /api/weekly`
3. `POST /api/weekly`
4. `DELETE /api/weekly/:id`
5. `PUT /api/weekly/ingr/:id`
6. `GET /api/favorite`
7. `POST /api/favorite`
8. `GET /api/favorite/:id`
9. `DELETE /api/favorite/:id`
10. `GET /api/cart`
11. `POST /api/cart`
12. `DELETE /api/cart/:id`
13. `PUT /api/cart/:id`
14. `GET /api/totaling`
15. `GET /api/ownrecipe`
16. `POST /api/ownrecipe`
## Set Up
To set up the development environment, you need the following steps
  1. Download npm and node.js
  2. Download and install postrgesSQL
## Running the App
1. Run `npm install`
2. Run `nodemon start`
3. Open `localhost:3000` from your browswer

 


    
