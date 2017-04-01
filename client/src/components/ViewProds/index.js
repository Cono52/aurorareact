import React, { Component } from 'react';
import arrow from '../arrow.svg'
import './index.css';
class ViewProds extends Component {
    state = {  }
    render() {
        return (
            <div className="ViewProds">
                <div className='products'>Products
                    <div className='lookItem'><a href="http://www.debenhams.ie/webapp/wcs/stores/servlet/prod_10052_10001_123932068099_-1">Urban Decay 'All Nighter Full Coverage Longwear' liquid foundation</a><img src={arrow} alt=""/></div>
                    <div className='lookItem'><a href="http://www.nyxcosmetics.com/hd-photogenic-concealer-wand/NYX_013.html">NYX HD Photogenic Concealer Wand</a><img src={arrow} alt=""/></div>
                    <div className='lookItem'><a href="http://www.boots.ie/rimmel-stay-matte-pressed-powder-10097901">Rimmel London Stay Matte Pressed Powder Transparent</a><img src={arrow} alt=""/></div>
                    <div className='lookItem'><a href="http://www.boots.ie/rimmel-natural-bronzer-10058661">Rimmel London Natural Bronzer</a><img src={arrow} alt=""/></div>
                    <div className='lookItem'><a href="http://www.boots.ie/rimmel-london-brow-this-way-eyebrow-kit-10182723">Rimmel London London Brow This Way Eyebrow Kit</a><img src={arrow} alt=""/></div>
                    <div className='lookItem'><a href="http://www.maccosmetics.com/product/13839/36168/products/makeup/eyes/mascara/upward-lash">MAC Upward Lash Mascara</a><img src={arrow} alt=""/></div>
                    <div className='lookItem'><a href="http://www.sephora.com/modern-renaissance-eye-shadow-palette-P409118">Anastasia Beverly Hills Modern Renaissance Eye Shadow Palette</a><img src={arrow} alt=""/></div>
                    <div className='lookItem'><a href="http://milanicosmetics.com/Baked-Blush.html">Milani Baked Blush</a><img src={arrow} alt=""/></div>
                    <div className='lookItem'><a href="http://www.boots.ie/nyx-professional-makeup-butter-gloss-10207772">NYX Butter Gloss</a><img src={arrow} alt=""/></div>
                    <div className='lookItem'><a href="http://www.ulta.com/scandaleyes-mascara?productId=xlsImpprod4090117">Rimmel London ScandelEyes Mascara</a><img src={arrow} alt=""/></div>
                </div>
                <div className='method'>Method/Tips:
                    <p>To apply foundation use a brush, for example Real Techqniques Face Brush.</p>
                    <p>To apply concelear use a beauty blender.</p>
                    <p>The foundation for this look performs better on oily/combination skin.</p>
                </div>
            </div>
        )
    }
}

export default ViewProds