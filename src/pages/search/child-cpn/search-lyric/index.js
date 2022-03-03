import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector,shallowEqual } from 'react-redux';

import { getSearchSongsAction } from '../../store/actionCreators'

const ZXYSearchLyric = memo((props) => {
  console.log(props);
  const keywords = props.location.keywords;

  // const { searchSongs } = useSelector(state => ({
  //   currentSong: state.getIn(["search","searchSongs"]),
  // }),shallowEqual);
  // console.log(searchSongs);

  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(keywords,2);
    // getSearchSongsAction(keywords);
  },[dispatch,keywords])
  return (
    <div>
      ZXYSearchLyric
    </div>
  )
})

export default ZXYSearchLyric;