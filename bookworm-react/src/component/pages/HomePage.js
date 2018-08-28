import React, { Component } from 'react';
const appStyle = {
  width: '100%'
}
const imgStyle= {
  maxHeight: '738px',
  width: '100%'
}
class HomePage extends Component {
  
  render() {
    return (
      <div className="App" style={appStyle}>
        <img style={imgStyle} src='https://desk-fd.zol-img.com.cn/t_s1600x900c5/g5/M00/0F/06/ChMkJltRVFCIIeh2AAFU4yhapy8AAp4IwGotQ0AAVT7843.jpg'/>
      </div>
    );
  }
}

export default HomePage;
