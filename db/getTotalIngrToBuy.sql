select sum(quantity) from cart
where user_id = $1