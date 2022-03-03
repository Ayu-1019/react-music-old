import React, { memo } from 'react';

import { SongCategoryWrapper } from './styled'

const SongCategory = memo(() => {
  return (
    <SongCategoryWrapper>
      <div className='head-icon'>
        <i className='sprite_icon'></i>
      </div>
    </SongCategoryWrapper>
  )
})

export default SongCategory;