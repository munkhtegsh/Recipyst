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
    food_name VARCHAR (200),
    food_img text,
    ingredient_number integer,
    ingredients json,
    calories integer,
    user_id integer references users(id)
)

insert into weekly (food_name, food_img, ingredient_number, ingredients, calories, user_id)
values ('Roast Beef', 'https://www.edamam.com/web-img/98a/98aa5d5cc0d88b28c2b9221a099b1a14.jpg', 2, 
'[{"text": "Coarse salt and freshly ground black pepper", "weight": 21.772433760000002},
{"text": "Coarse salt and freshly ground black pepper", "weight": 10.886216880000001}]'
,7212, 5)

create table favorite (
    id SERIAL PRIMARY KEY,
    food_name VARCHAR (200),
    food_img text,
    ingredient_number integer,
    ingredients json,
    calories integer,
    user_id integer references users(id)
)

insert into favorite (food_name, food_img, ingredient_number, ingredients, calories, user_id)
values ('Roast Beef', 'https://www.edamam.com/web-img/98a/98aa5d5cc0d88b28c2b9221a099b1a14.jpg', 2, 
'[{"text": "Coarse salt and freshly ground black pepper", "weight": 21.772433760000002},
{"text": "Coarse salt and freshly ground black pepper", "weight": 10.886216880000001}]'
,7212, 5)
