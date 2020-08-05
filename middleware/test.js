const testMiddleware = (req,res,next)=>{
    console.log('Wazup mada fakaaaa ?');
    next();
}

module.exports = testMiddleware;