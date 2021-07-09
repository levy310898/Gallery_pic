import React,{useEffect} from 'react'
import './ImageBox.scss';
function ImageBox(props) {
  const { id, author, width, height, download_url} = props.data;
  
  useEffect(() => {
    console.log(`get height image ${id} = `, getHeight());
  }, []);

  const getHeight = () => {
    return Math.floor(height/width*250)
  }
  return (
    <div className="homepage__card">
      <img src={download_url} alt="" style={{ width: '100%', height: '100%' }} className= 'homepage__card__image'/>
    
    </div>
  )
}

export default ImageBox
