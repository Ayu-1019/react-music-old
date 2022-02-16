import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getSizeImage } from '@/utils/data-format';

import ZXYLyric from './children-cpn/lyric'
import ZXYPlayerSongBar from '@/components/player-song-bar';
import ZXYCommentList from '@/components/comment-list';
import ZXYSimilar from './children-cpn/similar';
import { 
  PlayerWrapper,
  PlayerLeft,
  PlayerRight,
  PlayerImage,
  PlayerInfo
} from './style';

export default memo(function ZXYPlayer() {

  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player","currentSong"]),
  }),shallowEqual);
  console.log(currentSong);

  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <div className='player-left-content'>
            <PlayerImage>
              <img className='image' src={getSizeImage(currentSong.al.picUrl,130)} alt="" />
              <span className='image-cover'></span>
              <div className='image-link'>
                <i className='sprite_icon2'></i>
                <a href="todo">生成外链播放器</a>
              </div>
            </PlayerImage>
            <PlayerInfo>
              <div className='header'>
                <i className='sprite_icon2'></i>
                <div className='header-title'>
                  <div className='header-title-main'>
                    {currentSong.name}
                  </div>
                  <div className='header-title-other'>
                    {currentSong.alia[0]}
                  </div>
                </div>
              </div>
              <div className='middle'>
                <div className='detail'>
                  <span>歌手：</span>
                  <NavLink to="">
                    {currentSong.ar[0].name}
                  </NavLink>
                </div>
                <div className='detail'>
                  <span>所属专辑：</span>
                  <NavLink to="">
                    {currentSong.al.name}
                  </NavLink>
                </div>
              </div>
    
              <ZXYPlayerSongBar favorTitle="收藏"
                                shareTitle="分享"
                                downloadTitle="下载"
                                commentTitle="(167366)" />
              <ZXYLyric />

            </PlayerInfo>
          </div>
          <ZXYCommentList id={currentSong.id} />
        </PlayerLeft>

        <PlayerRight>
          <ZXYSimilar id={currentSong.id} />
        </PlayerRight>

      </div>
    </PlayerWrapper>
  )
});
