const app = express();
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const passport = require('passport');

const port=3000;
app.listen(3000,() => {
    console.log('Server is listening on port 3000')
});

const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;
const account = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret_key'
};

const strategy = new JWTStrategy(account, (Userid, next) => {
  if (Userid.username) {
    return next(null, { id: Userid.username });
  } else {
    return next(null, false,{ message: 'User not found' });
  }
});

const requireAuth = passport.authenticate('jwt', { session: false });

app.get('/protected', requireAuth, (req, res) => {
  res.send('Successfully authenticated and authorized');
});


const jwt = require('jsonwebtoken');

const payload = { username: ven };

const token = jwt.sign(payload, 'secret_key');

app.post("/user/generateToken", (req, res) => {

    let jwtSecretKey = JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: ven,
    }
  
    const token = jwt.sign(data, jwtSecretKey);
  
    res.json(userID, token);
});

app.get("/user/validateToken", (req, res) => {
    let tokenHeaderKey = TH_KEY;
    let jwtSecretKey = jwt_secret_key;
  
    try {
        const token = req.header(tokenHeaderKey);
  
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified){
            return res.send("Successfully Verified");
        }else{

            return res.send(error);
        }
    } catch (error) {

        return res.send(error);
    }
});





