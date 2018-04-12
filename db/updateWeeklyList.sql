update weekly
set food_name = $2,
food_img = $3,
ingredient_number = $4,
ingredients = $5,
calories = $6,
total_nutrients = $7,
total_time = $8,
total_weight = $9,
url = $10
where day = $1