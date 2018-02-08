const User = require('db/models/User');

exports.checkEmail = async (ctx) => {
  const { email } = ctx.params;

  if(!email){
    ctx.status = 400;
    return;
  }

  try {
    const account = await User.findByEmail(email);
    ctx.body = {
      exists: account
    };
  }catch(e){
    ctx.throw(500, e);
  };
};

exports.localRegister = async (ctx) => {
  const { body } = ctx.request;
  
  //검증로직 필요함

  const { displayName, email, password } = body;

  try {
    const exists = await User.findExistancy({
      displayName,
      email
    });

    if(exists) {
      ctx.status = 409;
      const key = exists.email === email ? 'email': 'displayName';
      ctx.body = {
        key
      };
      return;
    }

    const user = await User.localRegister({
      displayName, email, password
    });
    ctx.body = {
      displayName,
      _id: user._id
    };

    const accessToken = await user.generateToken();

    // configure accessToken to httpOnly cookie
    ctx.cookies.set('access_token', accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7
    });
  } catch(e) {
    ctx.throw(e, 500);
  }
}

exports.localLogin = async (ctx) => {
  const { body } = ctx.request;
  const { email, password } = body;

  try{
    const user = await User.findByEmail(email);

    if(!user) {
      ctx.status = 403;
      return;
    }

    const validated = user.validatePassword(password);
    if(!validated){
      ctx.status = 403;
      return;
    }

    const accessToken = await user.generateToken();

    ctx.cookies.set('access_token', accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7
    });

    const { displayName, _id } = user;

    ctx.body = {
      _id,
      displayName
    };

  }catch(e){
    ctx.throw(500, e);
  }
};

exports.check = async (ctx) => {
  const { user } = ctx.request;
  
  if(!user) {
    ctx.status = 401;
    return;
  }

  try {
    const exists = await User.findById(user._id);
    if(!exists) {
      // invalid user
      ctx.cookies.set('access_token', null, {
        maxAge: 0,
        httpOnly: true
      });
      ctx.status = 401;
      return;
    }
  } catch (e) {
    ctx.throw(500, e);
  }
  
  ctx.body = {
    user
  };
};

exports.logout = (ctx) => {
  ctx.cookies.set('access_token', null, {
    maxAge: 0,
    httpOnly: true
  });
  ctx.status = 204;
};
