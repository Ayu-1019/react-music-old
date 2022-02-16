import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState= Map({
  // 播放列表
  playList:[
    {
      "name": "雅俗共赏",
      "id": 411214279,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 5771,
          "name": "许嵩",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": null,
      "fee": 8,
      "v": 31,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 34749138,
        "name": "青年晚报",
        "picUrl": "https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg",
        "tns": [],
        "pic": 3431575794705764
      },
      "dt": 249621,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9987177,
        "vd": -22200
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5992323,
        "vd": -19600
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3994896,
        "vd": -17800
      },
      "a": null,
      "cd": "1",
      "no": 2,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 5302271,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 14026,
      "publishTime": 1461723397683
    }, 
    {
      "name": "嚣张",
      "id": 1382596189,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 32220939,
          "name": "en",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 10,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 80816891,
        "name": "嚣张",
        "picUrl": "https://p2.music.126.net/NhkuFBphLFaSmYMeW1-frQ==/109951164271814514.jpg",
        "tns": [],
        "pic_str": "109951164271814514",
        "pic": 109951164271814510
      },
      "dt": 253994,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 10162605,
        "vd": -55669
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 6097581,
        "vd": -53082
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 4065069,
        "vd": -51369
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1372818,
      "publishTime": 0
    }
  ],

  // 当前播放歌曲索引值
  currentSongIndex:0,

  // 当前播放歌曲
  currentSong:{},

  /**
   * 播放顺序 
   *   顺序播放 0
   *   随机播放 1
   *   单曲循环 2 
   */
  sequence:0,

  //歌词列表
  lyricList:[],

  // 当前正在播放的歌词索引值
  currentLyricIndex:0,

  // 当前正在播放歌曲的相似歌曲
  similarSongs:[]
})

function reducer(state = defaultState,action) {
  switch(action.type){
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong",action.currentSong);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList",action.playList);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex",action.index);
    case actionTypes.CHANGE_SEQUENCE:
      return state.set("sequence",action.sequence);
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set("lyricList",action.lyricList);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex",action.index);
    case actionTypes.CHANGE_SIMILAR_SONGS:
      return state.set("similarSongs",action.similarSongs);
    default:
      return state;
  }
}

export default reducer;
