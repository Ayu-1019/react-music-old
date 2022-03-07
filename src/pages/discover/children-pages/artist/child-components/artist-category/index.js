import React, { memo } from 'react';
import { artistCategories } from '@/common/local-data';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import classNames from 'classnames';

import { 
  CategoryWrapper,
  CategoryItem 
} from './styled';
import { 
  changeCurrentAreaAction,
  changeCurrentTypeAction 
} from '../../store/actionCreators';

const ArtistCategory = memo(() => {

  const {currentArea, currentType} = useSelector(state => ({
    currentArea: state.getIn(["artist", "currentArea"]),
    currentType: state.getIn(["artist", "currentType"])
  }), shallowEqual);
  const dispatch = useDispatch();

  const selectArtist = (area, type) => {
    dispatch(changeCurrentAreaAction(area));
    dispatch(changeCurrentTypeAction(type));
  }

  const renderArtist = (artists,area) => {
    return (
      <CategoryItem>
        {
          artists.map(item => {
            const isSelect = currentArea === area && currentType.type === item.type;
            return (
              <div className={classNames('category-item sprite_singer',{"active": isSelect})}
                   key={item.name}>
                <span onClick={e => selectArtist(area, item.type)}>{item.name}</span>
              </div>
            )
          })
        }
      </CategoryItem>
    )
  }

  return (
    <CategoryWrapper>
      {
        artistCategories.map(item => {
          return (
            <div key={item.area} className='category-title'>
              <h2 className='category-title-name'>{item.title}</h2>
              {renderArtist(item.artists, item.area)}
            </div>
          )
        })
      }
    </CategoryWrapper>
  )
})

export default ArtistCategory;