import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector,shallowEqual } from 'react-redux';

import { getSearchSongsAction } from '../../store/actionCreators'

const ZXYSearchSounddj = memo((props) => {

  const { searchContent,searchVideos } = useSelector(state => ({
    searchContent: state.getIn(["search","searchContent"]),
    searchVideos: state.getIn(["search","searchVideos"])
  }),shallowEqual);
  console.log(searchVideos);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getSearchVideoAction(searchContent))
  },[dispatch,searchContent])

  return (
    <div>
      ZXYSearchSounddj
    </div>
  )
})

export default ZXYSearchSounddj;