create table users (
    id SERIAL PRIMARY KEY,
    username text,
    auth_id text,
    profile_img text
)

insert into users (username, auth_id, profile_img)
values ('Potter', 'dfsjfksdjfsdf', 'src=fkdjfksjlfdss')

create table weekly (
    id SERIAL PRIMARY KEY,
    day integer,
    food_name VARCHAR (200),
    food_img text,
    ingredient_number integer,
    ingredients json,
    calories integer,
    user_id integer references users(id),
    total_nutrients json,
    total_time integer,
    total_weight integer,
    url text
)

insert into weekly (day, food_name, food_img, ingredient_number, ingredients, calories, user_id, total_nutrients, total_time, total_weight, url)
values (1, 'Roast Beef', 'https://www.edamam.com/web-img/98a/98aa5d5cc0d88b28c2b9221a099b1a14.jpg', 2, 
'[{"text": "Coarse salt and freshly ground black pepper", "weight": 21.772433760000002},
{"text": "Coarse salt and freshly ground black pepper", "weight": 10.886216880000001}]', 7212, 5,
'[{"label": "Calcium", "quantity": 632.8729694643105, "unit": "mg"}, {"label": "Carbs", "quantity": 6.961735694760001, "unit": "g"}]',
127, 3656.49, 'http://www.saveur.com/article/Recipes/Roast-Beef')


update weekly
set food_name = 'test',
food_img = 'test',
ingredient_number = 3,
ingredients = '[{"test": "test"}]',
calories = 1,
total_nutrients = '[{"test": "test"}]',
total_time = 7,
total_weight = 8,
url = 'url'
where day = 4



create table favorite (
    id SERIAL PRIMARY KEY,
    food_name VARCHAR (200),
    food_img text,
    ingredient_number integer,
    ingredients json,
    calories integer,
    user_id integer references users(id),
    total_nutrients json,
    total_time integer,
    total_weight integer,
    url text
)

insert into favorite (food_name, food_img, ingredient_number, ingredients, calories, user_id, total_nutrients, total_time, total_weight, url)
values ('Roast Beef', 'https://www.edamam.com/web-img/98a/98aa5d5cc0d88b28c2b9221a099b1a14.jpg', 2, 
'[{"text": "Coarse salt and freshly ground black pepper", "weight": 21.772433760000002},
{"text": "Coarse salt and freshly ground black pepper", "weight": 10.886216880000001}]', 7212, 5,
'[{"label": "Calcium", "quantity": 632.8729694643105, "unit": "mg"}, {"label": "Carbs", "quantity": 6.961735694760001, "unit": "g"}]',
127, 3656.49, 'http://www.saveur.com/article/Recipes/Roast-Beef')

create table cart (
    id serial PRIMARY KEY,
    name varchar(150) NOT NULL,
    quantity int,
    user_id integer REFERENCES users(id)
)

insert into cart (name, quantity, user_id)
values ('Potato', 1, 5 )

