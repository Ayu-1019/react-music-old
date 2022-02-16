import styled from 'styled-components';

export const PlayerWrapper = styled.div`

  .content {
    background: url(${require("@/assets/img/wrap-bg.png")}) repeat-y;
    background-color: #fff;
    display: flex;
    padding: 35px 30px 40px 39px;
  }
`

export const PlayerLeft = styled.div`
  width: 640px;
  .player-left-content{
    display:flex;
  }
`

export const PlayerRight = styled.div`
  width:270px;
  padding: 0px 0px 40px 62px;
`
export const PlayerImage = styled.div`
  width:210px;
  position:relative;
  .image {
    width: 130px;
    height: 130px;
    margin-left:38px;
    margin-top:38px;
  }
  .image-cover{
    position:absolute;
    left:0;
    width: 204px;
    height: 206px;
    background: url(${require("@/assets/img/sprite_cover.png")}) no-repeat;
    background-position:-140px -580px;
  }
  .image-link{
    margin-top:50px;
    text-align:center;
    i{
      display: inline-block;
      width: 16px;
      height: 16px;
      vertical-align: middle;
      background-position: -34px -863px;
    }
    a{
      text-decoration:underline;
      color: #0c73c2;
    }
  }
`

export const PlayerInfo = styled.div`
  width: 414px;
  margin-left: 20px;
  .header{
    display:flex;
    i{
      display: inline-block;
      width: 54px;
      height: 24px;
      background-position: 0 -463px;
    }
    .header-title{
      margin-top:-10px;
      margin-left:10px;
      .header-title-main{
        color:#333;
        font-size:24px;
      }
      .header-title-other{
        color:#bababa;
        font-size:14px;
      }
    }
  }
  .middle{
    margin-top:10px;
    .detail{
      padding-bottom:8px;
      a{
        color: #0c73c2;
      }
      span{
        font-size:12px;
        color:#999;
      }
    }
  }

`