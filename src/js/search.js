import { qs, on } from "./helpers.js";
import {data} from "../../config.js"

const $search = qs(".w-100.mr-2.pl-2")
on($search, "keyup", (event)=> ytSearch(event))


async function ytSearch(event){
  console.log(event.target.value)
  // let data
  if(event.keyCode === 13){
    const str = encodeURI(event.target.value)
    const a = await fetchData(str)
    // console.log(a.items[0].id.videoId)
  }
}

function fetchData(str){
  return fetch(`https://www.googleapis.com/youtube/v3/search?key=${data.KEY1}&q=${str}&maxResults=1&order=date`)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      // console.log(JSON.stringify(myJson))
      return myJson
    });
}