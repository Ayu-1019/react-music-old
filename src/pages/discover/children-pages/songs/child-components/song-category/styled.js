import styled from 'styled-components';

export const SongCategoryWrapper = styled.div`
  position: absolute;
  top: 195px;
  left:280px;
  z-index: 5;
  height:385px;
  width: 700px;
  border:rgb(199,199,199) 1px solid;
  border-radius:3px;
  background-color: #fff;
  box-shadow: 0 0 10px rgb(190,190,190);
  .head-icon{
    i{
      position: absolute;
      top: -11px;
      left: 120px;
      display: inline-block;
      width: 24px;
      height: 11px;
      background-position: -48px 0;
      vertical-align: middle;
    }
  }
`