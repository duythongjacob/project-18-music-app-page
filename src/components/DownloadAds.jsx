import React from 'react'
import appStore from '../img/App Store.png'
import googleStore from '../img/Google Play.png'
function DownloadAds() {
    const downloadImgStyle = 'border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]'
  return (
    <div className="download">
        <div className="download_images flex">
        <img
          src={appStore}
          alt=""
          className={downloadImgStyle + ` mr-[2rem]`}
        />
        <img
          src={googleStore}
          alt=""
          className={downloadImgStyle}
        /> 
        </div>
    </div>
    )
}

export default DownloadAds