import React,{useState,useEffect} from 'react'
import './ImageBox.scss';
import { Button } from 'antd';
function ImageBox(props) {
  const { id, author, width, height, download_url } = props.data;
  const [saveImage, setSaveImage] = useState(false);
  // useEffect(() => {
  //   console.log(`get height image ${id} = `, getHeight());
  // }, []);

  const getHeight = () => {
    return Math.floor(height/width*250)
  }
  return (
    <div className="homepage__card" style = {{height:`${getHeight()}px`,width:'250px'}}>
      <img src={download_url} alt="" style={{ width: '100%', height: '100%' }} className='homepage__card__image' />
      <Button type={saveImage ? "primary" : "danger"} className="homepage__card__btn" onClick={() => setSaveImage(prev => !prev)}>{saveImage?'Saved':'Save'}</Button>
    </div>
  )
}

export default ImageBox
