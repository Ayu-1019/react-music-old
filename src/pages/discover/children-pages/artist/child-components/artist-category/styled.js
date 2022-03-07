import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  padding:30px 10px 0 10px;
  border-right: 1px solid #d3d3d3;
  background-color: rgb(249,249,249);
  width:18%;
  div:nth-child(6){
    border:none;
  }
  .category-title{
    border-bottom:1px solid #d3d3d3;
    padding-bottom:5px;
    padding-top:20px;
    .category-title-name{
      margin-left:15px;
      font-size:16px;
      color:#333;
      font-weight:bold;
    }
  }
`
export const CategoryItem = styled.div`
  .category-item{

    font-size:12px;
    color:#333;
    padding-left:25px;
    background-position: 0 -30px;
    width: 160px;
    height: 29px;
    line-height: 29px;
    span{
      cursor: pointer;
    }
    &.active {
      span {
        color: red;
        background-position: 0 0;
      }
    }
    &:hover{
      text-decoration:underline;
    }
  }
  
`