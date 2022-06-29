import React from 'react';
import { Redirect } from "react-router-dom";

// const ZXYDiscover = React.lazy(() => import("@/pages/discover"));
// const ZXYRecommend = React.lazy(() => import("@/pages/discover/children-pages/recommend"));
// const ZXYRanking = React.lazy(() => import("../pages/discover/children-pages/ranking"));
// const ZXYSongs = React.lazy(() => import("@/pages/discover/children-pages/songs"));
// const ZXYDjradio = React.lazy(() => import("@/pages/discover/children-pages/djradio"));
// const ZXYArtist = React.lazy(() => import("@/pages/discover/children-pages/artist"));
// const ZXYAlbum = React.lazy(() => import("@/pages/discover/children-pages/album"));
// const ZXYPlayer = React.lazy(() => import("@/pages/player"));

// const ZXYMine = React.lazy(() => import('@/pages/mine'));
// const ZXYFriend = React.lazy(() => import('@/pages/friend'));


import ZXYDiscover from "@/pages/discover";
import ZXYRecommend from "../pages/discover/children-pages/recommend";
import ZXYRanking from "../pages/discover/children-pages/ranking";
import ZXYSongs from "../pages/discover/children-pages/songs";
import ZXYDjradio from "../pages/discover/children-pages/djradio";
import ZXYArtist from "../pages/discover/children-pages/artist";
import ZXYArtistDetail from "../pages/discover/children-pages/artist/child-components/artist-list/child-components/artist-detail";
import ZXYAlbum from "../pages/discover/children-pages/album";
import ZXYPlayer from "../pages/player";

import ZXYMine from "@/pages/mine";
import ZXYFocus from "@/pages/focus";
import ZXYSearch from '../pages/search';
import ZXYSearchSongs from '../pages/search/child-cpn/search-songs';
import ZXYSearchSinger from '../pages/search/child-cpn/search-singer';
import ZXYSearchAblum from '../pages/search/child-cpn/search-album';
import ZXYSearchLyric from '../pages/search/child-cpn/search-lyric';
import ZXYSearchPlaylist from '../pages/search/child-cpn/search-playlist';
import ZXYSearchSounddj from '../pages/search/child-cpn/search-sounddj';
import ZXYSearchUser from '../pages/search/child-cpn/search-user';
import ZXYSearchVideo from '../pages/search/child-cpn/search-video';

const routes = [
  {
    path:"/",
    exact: true,
    render: () => (
      <Redirect to="/discover"/>
    )
  },
  {
    path:"/discover",
    component:ZXYDiscover,
    routes:[
      {
        path:"/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path:"/discover/recommend",
        component:ZXYRecommend
      },
      {
        path:"/discover/songs",
        component:ZXYSongs
      },
      {
        path:"/discover/artist",
        component:ZXYArtist
      },
      {
        path:"/discover/ranking",
        component:ZXYRanking
      },
      {
        path:"/discover/djradio",
        component:ZXYDjradio
      },
      {
        path:"/discover/album",
        component:ZXYAlbum
      },
      {
        path:"/discover/player",
        component:ZXYPlayer
      }
    ]
  },
  {
    path:"/mine",
    component:ZXYMine
  },
  {
    path:"/focus",
    component:ZXYFocus
  },
  {
    path:"/search",
    component:ZXYSearch,
    routes:[
      {
        path:"/search",
        exact: true,
        render: () => (
          <Redirect to="/search/songs"/>
        )
      },
      {
        path:"/search/songs",
        component:ZXYSearchSongs
      },
      {
        path:"/search/singer",
        component:ZXYSearchSinger
      },
      {
        path:"/search/album",
        component:ZXYSearchAblum
      },
      {
        path:"/search/lyric",
        component:ZXYSearchLyric
      },
      {
        path:"/search/playlist",
        component:ZXYSearchPlaylist
      },
      {
        path:"/search/sounddj",
        component:ZXYSearchSounddj
      },
      {
        path:"/search/video",
        component:ZXYSearchVideo
      },
      {
        path:"/search/user",
        component:ZXYSearchUser
      },

    ]
  },
  {
    path:"/artistDetail",
    component:ZXYArtistDetail
  }
];

export default routes;