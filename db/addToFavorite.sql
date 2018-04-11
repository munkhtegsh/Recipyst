INSERT INTO favorite (food_name, food_img, ingredient_number, ingredients, calories, user_id, total_nutrients, total_time, total_weight, url)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)

returning *