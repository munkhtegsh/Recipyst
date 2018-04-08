INSERT INTO favorite (food_name, food_img, ingredient_number, ingredients, calories, user_id)
VALUES ($1, $2, $3, $4, $5, $6)

returning *