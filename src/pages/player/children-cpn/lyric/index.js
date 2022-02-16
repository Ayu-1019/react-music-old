import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { LyricWrapper } from './styled';

const Lyric = memo(() => {

  const { lyricList } = useSelector(state => ({
    lyricList:state.getIn(["player","lyricList"]),
  }),shallowEqual);

  return (
    <LyricWrapper>
      {
        lyricList.map((item,index) => {
          return (
            <div className='lineLyric' key={index}>
              {item.content}
            </div>
          )
        })
      }
    </LyricWrapper>
  )
})

export default Lyric;