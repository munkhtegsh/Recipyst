select * from cart 
where user_id = $1
order by id;