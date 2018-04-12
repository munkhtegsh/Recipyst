select * from weekly
where user_id = $1
order by day
