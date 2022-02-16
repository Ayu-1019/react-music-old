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
import ZXYAlbum from "../pages/discover/children-pages/album";
import ZXYPlayer from "../pages/player";

import ZXYMine from "@/pages/mine";
import ZXYFriend from "@/pages/friend";

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
    path:"/friend",
    component:ZXYFriend
  },
  
];

export default routes;