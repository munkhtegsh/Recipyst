select userid.users,  ingr.cart
from users
join cart on users.userid=cart.userid