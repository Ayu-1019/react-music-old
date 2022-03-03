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
  .list-head{
    border-bottom:1px solid rgb(230,230,230);
    padding:20px 0 10px 25px;
    .list-head-all{
      background-color:rgb(246,246,246);
      border:1px solid rgb(195,195,195);
      border-radius:3px;
      width: 75px;
      height:26px;
      line-height:26px;
      text-align:center;
      cursor: pointer;
    }
  }
  .list-content{
    .list-content-language{
      display:flex;
      .language-left{
        border-right:1px solid rgb(230,230,230);
        font-weight:700;
        color:#333;
        width: 70px;
      }
      .language-right{

      }
    }
    .list-content-style{}
    .list-content-scene{}
    .list-content-emotion{}
    .list-content-theme{}
  }
`