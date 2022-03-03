// 正则表达式
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export function parseLyric (lyricString){

  // 对歌词进行分割
  const lineStrings = lyricString.split("\n");

  const lyrics = [];

  // 拿到分割后的每行歌词
  for (let line of lineStrings){
    if(line){
      const result = parseExp.exec(line);
      if (!result) 
        continue;
      const time1 = result[1] * 60 * 1000;
      const time2 = result[2] * 1000;
      const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10;
      const time = time1 + time2 + time3;
      const content = line.replace(parseExp,"").trim();
      const obj = {time,content};
      lyrics.push(obj);
    }
  }
  return lyrics;
}