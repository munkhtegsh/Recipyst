require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const app = express();

// massive_____________________________________
massive(process.env.SERVER_SCRIPT).then(db => {
  app.set('db', db);
});

// session_____________________________________
app.use(bodyParser.json());
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: process.env.SECRET_SESSION,
}));

// Auth0_______________________________________
app.use(passport.initialize());
app.use(passport.session());
const { domain, clientID, clientSecret, callbackURL } = process.env;
passport.use(new Auth0Strategy({
    domain,
    clientID,
    clientSecret,
    callbackURL, //when failure happens,
  }, (accessToken, refreshToken, extraParams, profile, done) => {
    // check user exists in the table
    app.get('db').findUser([profile.id]).then(userInfo => {
      if (!userInfo[0]) {
        app.get('db').createUser([profile.displayName, profile.id, profile.picture]).then(user => {
          console.log(user)
          return done(null, user[0].id);
        });
      } else {
        return done(null, userInfo[0].id)
      }
    })
  } 
));

passport.serializeUser((id, done) => {
  done(null, id);
});

passport.deserializeUser((id, done) => {
  done(null, id);
});

app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: 'http://localhost:3000/#/home',
  failureRedirect: 'http://localhost:3000/'
}));

// getUserInfo
app.get('/api/userinfo', (req, res) => {
  const db = req.app.get('db');
  db.getUserInfo([req.user]).then(userInfo => {
    res.status(200).send(userInfo);
  })
});

// Login
app.get('/auth', passport.authenticate('auth0'));

// Logout
app.get('/auth/logout', (req, res) => {
  req.logout();
  res.redirect('http://localhost:3000/')
});

//=============================================================//
//                        WEEKLY FOOD                          //
//=============================================================//

// Get weekly food
app.get('/api/weekly', (req, res) => {
  const db = req.app.get('db');
  db.getWeeklyList([req.user]).then(weeklyList => {
    res.status(200).send(weeklyList)
  })
});

// Add to weeklyFood
app.post('/api/weekly', (req, res) => {
  const db = req.app.get('db');
  const { day, label, image, ingredients, calories, totalNutrients, totalTime, totalWeight, url } = req.body;
  const ing_num = ingredients.length + 1;
  const ingredientsArr = JSON.stringify(ingredients);
  const totalNutrientsArr = JSON.stringify(totalNutrients);
  // check if day is existed in the list?
    // if yes replace it with new food
    // else add item

  db.checkDateExistsInWeekly([day]).then(weeklyList => {
    if (weeklyList[0]) {
      db.updateWeeklyList([day, label, image, ing_num, ingredientsArr, calories, totalNutrientsArr, 
        totalTime, totalWeight, url]).then(response => {
          res.status(200).send(response);
        })
    } else {
      db.addToWeekly([day, label, image, ing_num, ingredientsArr, calories, req.user, totalNutrientsArr, 
        totalTime, totalWeight, url]).then( response => {
        res.status(200).send(response);
      })
    }
  })

});

//=============================================================//
//                        FAVORITE FOOD                        //
//=============================================================//

// Get favorite food
app.get('/api/favorite', (req, res) => {
  const db = req.app.get('db');
  db.getFavoriteList([req.user]).then(favoriteList => {
    res.status(200).send(favoriteList)
  })
});

// Add favorite food
app.post('/api/favorite', (req, res) => {
  const db = req.app.get('db');
  const { label, image, ingredients, calories, totalNutrients, totalTime, totalWeight, url
  } = req.body;
  const ing_num = ingredients.length + 1;
  const ingredientsArr = JSON.stringify(ingredients)
  const totalNutrientsArr = JSON.stringify(totalNutrients)
  console.log(label, image, ing_num, ingredients, calories, req.user)
  db.addToFavorite([label, image, ing_num, ingredientsArr, calories, req.user, totalNutrientsArr, 
    totalTime, totalWeight, url]).then( response => {
    res.status(200).send(response);
  })
});

//=============================================================//
//                        DAILY FOOD                           //
//=============================================================//

// Get daily food
app.get('/api/daily/:day', (req, res) => {
  const db = req.app.get('db');
  const { day } = req.params;
  db.getDailyItem([req.user, day]).then(item => {
    res.status(200).send(item);
  })
});

// Get total_nutrients 
app.get('/api/daily/di/:day', (req, res) => {
  const db = req.app.get('db');
  const { day } = req.params;
  console.log(day)
  db.getTotalNutrient([req.user, day]).then(nutrients => {
    res.status(200).send(nutrients);
  })
});

// Might need to delete below ============
// app.get('/api/daily/di/:day', (req, res) => {
//   const db = req.app.get('db');
//   const { day } = req.params;
//   console.log(day)
//   db.getDailyIngredient([req.user, day]).then(item => {
//     res.status(200).send(item);
//   })
// });

//=============================================================//
//                           CART                              //
//=============================================================//

// Get cart items from shoppingcart
app.get('/api/cart', (req, res) => {
  const db = req.app.get('db');
  db.getCartItems([req.user]).then(items => {
    res.status(200).send(items);
  })
});

// Add items into shoppingcart
app.post('/api/cart', (req, res) => {
  const db = req.app.get('db');
  const { name, quantity } = req.body;
  console.log(name, quantity);
  db.checkItemExists([name]).then(info => {
    if (info[0]) {
      db.addQuantityByNum([name, quantity]).then(item => {
        res.status(200).send(item)
      })
    } else {
      db.addItemToCart([name, quantity, req.user]).then(cart => {
        res.status(200).send(cart);
      })
    }
  })
});

// Delete items from shoppingcart
app.delete('/api/cart/:id', (req, res) => {
  const db = req.app.get('db');
  const { id } = req.params;
  db.removeItemFromCart([id, req.user]).then(item => {
    res.status(200).send(item);
  })
});

app.put('/api/cart/:id', (req, res) => {
  const db = req.app.get('db');
  const { name, quantity } = req.body;
  const { id } = req.params;
  console.log( name, quantity, id)
  if (name) {
    db.updateNameInCart([id, name]).then(item => {  // make more accurate
      res.status(200).send(item);
    })
  }

  if (quantity !== 1) {
    db.updateQuantityInCart([id, quantity]).then(item => {
      res.status(200).send(item);
    })
  }

  // db.updateItemInCart([id, name, quantity]).then(item => {
  //   res.status(200).send(item);
  // })
});

// Quickpick
app.post('/api/quickpick', (req, res) => {
  const db = req.app.get('db');
  const { name, quantity } = req.body;
  // first check the item in the table
  db.checkItemExists([name]).then(info => {
    if (info[0]) {
      db.addQuantityByOne([name]).then(item => {
        res.status(200).send(item)
      })
    } else {
      // might quantity will be add by one here
      db.addItemToCart([name, quantity, req.user]).then(cart => {
        res.status(200).send(cart);
      })
    }
  })
  // if yes add the quantity by 1 
  // else create one
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is up on: ${PORT}`));


