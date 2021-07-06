import React, { Component } from 'react';

class comp extends Component {
  state = {
    numPerRender: 50,
    linkImg: [],
    startImgNum :237,
  }


  componentDidMount() {
    let linkImg = [];
    for (let i = 0; i < this.state.numPerRender; i++) {
      const newImgLink = `https://picsum.photos/id/${this.state.startImgNum + i}/200/300`;
      linkImg.push(newImgLink);
    }

    this.setState({ linkImg });
  }

  

  
  render() {
    const { list = [], dispatch = null } = this.props;
    console.log('list = ', list);
    console.log('dispatch = ', dispatch);
    console.log('list imge = ', this.state.linkImg);
    return (
      <div>
        
        {this.state.linkImg.length > 0 && this.state.linkImg.map((item, index) => (
          <img src={item} alt="img" />
        )
        )}
      </div>
    );
  }
}

export default comp;