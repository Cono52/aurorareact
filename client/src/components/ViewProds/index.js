import React, { Component } from 'react';
import './index.css';
class ViewProds extends Component {
    state = {  }
    render() {
        return (
            <div className="ViewProds">
                <div className='creator'>
                    <p>Alba Hansen</p>
                </div>
                <div className='products'>Products
                    <div className='lookItem'>Urban Decay All nighter Foundation</div>
                    <div className='lookItem'>NYX HD concealer</div>
                    <div className='lookItem'>Rimmel stay matte translucent powder</div>
                    <div className='lookItem'>Natural bronzer rimmel</div>
                    <div className='lookItem'>Maybellene brow this way</div>
                    <div className='lookItem'>Mac: mascara matte upward lash</div>
                    <div className='lookItem'>Eyeshadow annestasia beverly hills: modern renaissance</div>
                    <div className='lookItem'>Milane blusher</div>
                    <div className='lookItem'>NYX butter gloss</div>
                    <div className='lookItem'>Rimmel Scandeleyes</div>
                </div>
                <div className='method'>Method/Tips:
                    1. To apply foundation use a brush, for example Real Techqniques Face Brush
                    2. To apply concelear use a beauty blender.

                    Tip: The foundation for this look is very performs better on oily combination skin
                </div>
            </div>
        )
    }
}

export default ViewProds