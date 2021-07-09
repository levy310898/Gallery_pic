import React,{useState,useEffect} from 'react'
import './HomePage.scss';
import ImageBox from '../../components/ImageBox';
import LoadingPage from '../../../../components/LoadingPage';
import Masonry from 'react-masonry-css';
const axios = require('axios');

const breakpointColumnsObj = {
  default: 4,
  1120: 3,
  830: 2,
  560: 1
};
export default function HomePage() {
  const [listPics, setListPics] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get('https://picsum.photos/v2/list')
      .then(res => {
        if (res && res.status == 200) {
          console.log(res);
          setListPics(res.data);
          setLoading(false);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const renderImageList = () => {
    return listPics.map(item=><ImageBox key ={item.id} data = {item} />)
  }
  return (
    <div className="page">
        <div className="container">
        {loading || !listPics || listPics.length == 0 ? (
          <LoadingPage />
        ) : (
            // <div className = "image-container">
            //   {renderImageList()}
            // </div>
            <div className="image-list">
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {renderImageList()}
              </Masonry>
            </div>
            
        )
          }
        
      </div>
    </div>
  )
}
