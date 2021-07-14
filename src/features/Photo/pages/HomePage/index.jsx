import React,{useState,useEffect,useRef,useCallback} from 'react'
import './HomePage.scss';
import ImageBox from '../../components/ImageBox';
import LoadingPage from 'components/LoadingPage';
import Masonry from 'react-masonry-css';
import axios from 'axios';
import { message } from 'antd';


const breakpointColumnsObj = {
  default: 4,
  1120: 3,
  830: 2,
  560: 1
};
export default function HomePage() {
  const [listPics, setListPics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const observer = useRef();
  const lastBookElementRef = useCallback(
    // we will add ref for the last item of ImgBox.
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      // when you scroll down to 
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setPageNumber(prev=>prev+1);
        }
      })

      if (node) observer.current.observe(node);
    }, [loading])
  
  useEffect(() => {
    
    fetchImageList();
  }, []);

  useEffect(() => {
    fetchImageList();
  },[pageNumber])

  const fetchImageList = async () => {
    setLoading(true);
    const apiLink = 'https://picsum.photos/v2/list';
    try {
      const response = await axios({
        method: 'GET',
        url:apiLink,
        params: {
          page: pageNumber,
          limit: 40,
        }
      });
      setListPics(prev=>[...prev, ...response.data]);
      setLoading(false);
    } catch (error) {
      message.error('something is wrong');
    }
  }

  const renderImageList = () => {
    return listPics.map((item, index) => {
      const imageBox = (<ImageBox key={index} data={item} />)
      if (listPics.length == index + 1) {
        // if you put ref in actual Component, it will not work(don't know why, i think it will become a props but it not)
        // so i had to put a div around my ImageBox
        return <div ref={lastBookElementRef} index={index} style = {{borderRadius:'10px'}}>{imageBox }</div>
      } else {
        return <div style={{ borderRadius: '10px' }}>{imageBox}</div>
      }
     })
  }
  return (
    <div className="page">
        <div className="container">
        <div className="image-list">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {renderImageList()}
          </Masonry>
        </div>

        {loading && <LoadingPage />}
      </div>
    </div>
  )
}
