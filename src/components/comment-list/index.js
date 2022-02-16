import React, { memo,useEffect } from 'react';
import { useDispatch,shallowEqual, useSelector } from 'react-redux';

import { getCommentListcAction } from './store/actionCreators';

import { CommentWrapper } from './styled'

const ZXYCommentList = memo((props) => {

  const { id } = props;

  const { 
    hotCommentList,
    commentList
   } = useSelector(state => ({
    hotCommentList: state.getIn(["comment","hotCommentList"]),
    commentList: state.getIn(["comment","commentList"])
  }),shallowEqual);
  const dispatch = useDispatch();
  // console.log(hotCommentList);

  useEffect(() => {
    dispatch(getCommentListcAction(id));
  },[dispatch,id]);

  return (
    <CommentWrapper>
      <div>
        热门评论
        {
          hotCommentList.map((item,index) => {
            return (
              <div key={index}>
                { item.content }
              </div>
            )
          })
        }
      </div>
      <div>
        评论
        {
          commentList.map((item,index) => {
            return (
              <div key={index}>
                { item.content }
              </div>
            )
          })
        }
      </div>
    </CommentWrapper>
  )
})

export default ZXYCommentList