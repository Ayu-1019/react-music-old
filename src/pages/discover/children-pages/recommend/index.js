import React, { memo} from 'react';

import ZXYTopBanner from './child-components/top-banner';
import ZXYHotRecommend from './child-components/hot-recommend';
import ZXYNewAlbum from './child-components/new-album';
import ZXYRecommendRanking from './child-components/recommend-ranking';

import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';

function ZXYRecommend(props) {

  return (
    <RecommendWraper>
      <ZXYTopBanner/>
      <Content className='wrap-v2'>

        <RecommendLeft>
          <ZXYHotRecommend/>
          <ZXYNewAlbum/>
          <ZXYRecommendRanking/>
        </RecommendLeft>

        <RecommendRight>

        </RecommendRight>

      </Content>
    </RecommendWraper>
  )
}

export default memo(ZXYRecommend);

// import React, { memo, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { getTopBannerAction } from './sotre/actionCreators';

// function ZXYRecommend(props) {

//   const {getBanners,topBanners} = props;

//   useEffect(() => {
//     getBanners();
//   },[getBanners])

//   return (
//     <div>
//       {topBanners.length}
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners:state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners:() => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps,mapDispatchToProps)(memo(ZXYRecommend));