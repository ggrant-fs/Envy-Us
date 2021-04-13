//import the Articles schema 
import Subscribe from ('../models/subscription')
//import the db connection logic
import db from ('../db/connection')
//create the db instance and establish the connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
//create controller routes

//create subscriptions
const newSubscription = async(req,res) =>{
    try {
        const subscribe = await new Subscribe(req.body)
        await subscribe.save()
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error.message})
    }
}

module.exports = newSubscription;
