import React, { memo,useState } from 'react';
import { NavLink,useHistory,withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { headerLinks } from '@/common/local-data';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';
import { getSearchContentAction } from '../../pages/search/store/actionCreators';

const ZXYAppHeader = (props) => {
  // console.log(props);
  const [inputValue, setinputValue] = useState()
  
  //业务代码
  const showSelectItem = (item,index) => {
    if(index<3){
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className='icon sprite_01'></i>
        </NavLink>
      )
    }else{
      return <a href={item.link}>{item.title}</a>
    }
  }

  const onChange = (e) => {
    console.log(e.target.value);
    setinputValue(e.target.value);
  }

  const dispatch = useDispatch();
  let history = useHistory();
  const handleKeyUp = (e) => {
    if(e.keyCode === 13){
      history.push({
        pathname:'/search',
        state:{ keywords:inputValue }
      });
      dispatch(getSearchContentAction(inputValue));
    }
  }

  //返回的JSX
  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <div className='select-list'>
            {
              headerLinks.map((item,index) => {
                return (
                  <div key={item.title} className='select-item'>
                    {showSelectItem(item,index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input onChange={onChange} 
                 className='search' 
                 placeholder='音乐/视频/电台/用户' 
                 prefix={<SearchOutlined/>}
                 onKeyUp={e => handleKeyUp(e)} />
          <div className='center'>创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  );
};

export default withRouter(memo(ZXYAppHeader));