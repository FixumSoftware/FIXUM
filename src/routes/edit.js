const express = require('express')
const router = express.Router()

const userController = require('../controllers/user.controller')
const mailController = require('../controllers/mail.controller')
const assetController = require('../controllers/asset.controller')
const assetTypeController = require('../controllers/asset-type.controller')
const locationController = require('../controllers/location.controller')
const userPosition = require('../controllers/userPosition.controller')
const SendmailTransport = require('nodemailer/lib/sendmail-transport')
const auth = require ('../middlewares/authJwt')



router.get('/location',auth.verifyToken,auth.isAdmin,async (req,res,next)=>{
    res.render('./edits/location.ejs',{title: ' | Edit ',locations:await locationController.list(), navBar: await auth.navigationBar(req)})
})
router.get('/AssetTypes',auth.verifyToken,auth.isAdmin,async (req,res,next)=>{
    res.render('./edits/AssetTypes.ejs',{title: ' | Edit ',AssetTypes:await assetTypeController.list(), navBar: await auth.navigationBar(req)})
})
router.get('/Users',auth.verifyToken,auth.isAdmin,async (req,res,next)=>{
    res.render('./edits/Users.ejs',{title: ' | Edit ',Users:await userController.list(), navBar: await auth.navigationBar(req)})
})
router.get('/Assets',auth.verifyToken,auth.isAdminOrUser,async (req,res,next)=>{
    res.render('./edits/Assets.ejs',{title: ' | Edit ',Assets:await assetController.list(), navBar: await auth.navigationBar(req)})
})
router.get('/UserPosition',auth.verifyToken,auth.isAdminOrUser,async (req,res,next)=>{
    res.render('./edits/UserPosition.ejs',{title: ' | Edit ',userPosition:await userPosition.list(), navBar: await auth.navigationBar(req)})
})


module.exports=router