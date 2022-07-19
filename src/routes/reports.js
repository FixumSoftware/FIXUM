const express = require('express')
const router = express.Router()

const asset = require('../controllers/asset.controller')
const assetTypes=require('../controllers/asset-type.controller')

const auth = require('../middlewares/authJwt')

router.get('/',async (req,res,next) => {
    res.render('./reports/reports.ejs',{title: ' | Reportes', navBar: await auth.navigationBar(req)})
})
router.get('/last-10-added',async (req,res,next) => {
    const top10Assets = await asset.last10Added()
    res.render('./reports/last-10-added.ejs',{title: ' | Reportes', last10AssetAdded: await top10Assets, navBar: await auth.navigationBar(req)})
})
router.get('/totalByAssets',async (req,res,next) => {
    const totalByAssets = await asset.AssetsPrices()
    res.render('./reports/totalByAssets.ejs',{title: ' | Reportes', totalByAssets: await totalByAssets, navBar: await auth.navigationBar(req)})
})
router.get('/totalByAssetsTypes',async (req,res,next) => {
    const totalByAssetsTypes = await assetTypes.TotalByAssetsTypes()
    res.render('./reports/totalByAssetsTypes.ejs',{title: ' | Reportes', totalByAssetsTypes: await totalByAssetsTypes, navBar: await auth.navigationBar(req)})
})
router.get('/totalAssetsByLocation',async (req,res,next) => {
    const totalAssetsByLocation = await asset.TotalAssetsByLocation()
    res.render('./reports/totalAssetsByLocation.ejs',{title: ' | Reportes', totalAssetsByLocation: await totalAssetsByLocation, navBar: await auth.navigationBar(req)})
})




module.exports = router