create table users (
    id SERIAL PRIMARY KEY,
    username text,
    auth_id text,
    profile_img text
)

insert into users (username, auth_id, profile_img)
values ('Potter', 'dfsjfksdjfsdf', 'src=fkdjfksjlfdss')
return *