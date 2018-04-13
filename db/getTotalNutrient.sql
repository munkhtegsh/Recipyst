select total_nutrients from weekly
where user_id = $1
and day = $2