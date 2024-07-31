// load database
import { videoDB } from './load.js'
import { thumbDB } from './load.js'

setTimeout(() => {
    // works here
    const videosID = videoDB
    const thumbsID = thumbDB
    console.table(videosID)
    console.table(thumbsID)
    let X = 110
    let Y = 200
    let posX = 0,posY = 0
    let ratioX = 250,ratioY = 250
    for(let i = 0;i<videosID.length;++i) {
        let thumbid = thumbsID[i].replaceAll(" ","%20")
        let thumbUrl = `https://raw.githubusercontent.com/feuberpvp/GlobalDatabase/main/Legeclo%20Collection/Thumbnails/${thumbid}.png`
        let name = thumbsID[i].charAt(0).toUpperCase() + thumbsID[i].slice(1,thumbsID[i].length-1) + " Eps " + thumbsID[i].charAt(thumbsID[i].length-1);
        CreateVideo(X + posX * ratioX,Y + posY * ratioY,thumbUrl,videosID[i],name) 
        if ((i+1) % 7 == 0) ++posY,posX = 0
        else ++posX
    }
},50);

function CreateVideo(X,Y,bg,video,name) {
    // add button
    // console.log('bg ',bg)
    let elmt = document.createElement("button")
    elmt.style.width = "200px";
    elmt.style.height = "200px";
    elmt.style.position = "absolute";
    elmt.style.top = `${Y}px`;
    elmt.style.left = `${X}px`;
    elmt.style.backgroundImage = `url(${bg})`; 
    elmt.style.backgroundSize = "contain";
    elmt.style.backgroundRepeat = "no-repeat"; 
    elmt.style.cursor = "pointer"
    elmt.onclick = function() {
        window.open(`play.html?id=${video}?name=${name}`,"_blank")
    }
    // add title
    let videoTitle = document.createElement("h1")
    // modify name not to exceed limit (lim: 14)
    let title = ""
    if (name.split(" Eps")[0].length > 14) 
        title = name.split(" Eps")[0].substring(0,11) + "... Eps " + name.split(" Eps")[1]
    else title = name
    videoTitle.textContent = title
    videoTitle.style.position = "absolute";
    videoTitle.style.top = `${Y + 110}px`
    videoTitle.style.left = `${X + 10}px`
    videoTitle.style.fontSize = "20px"
    // add Add to favorite
    let AddToFavorite = document.createElement("button")
    AddToFavorite.textContent = "Add to favorite"
    AddToFavorite.style.position = "absolute"
    AddToFavorite.style.top = `${Y + 155}px`
    AddToFavorite.style.left = `${X + 12}px`
    AddToFavorite.style.background = "pink"
    AddToFavorite.style.color = "black"
    AddToFavorite.style.cursor = "pointer"
    AddToFavorite.style.fontSize = "25px"
    document.body.appendChild(elmt)
    document.body.appendChild(videoTitle)
    document.body.appendChild(AddToFavorite)
    // console.log("New video added!")
    // const abtrs = {
    //     "Top": X,
    //     "Left": Y,
    //     "Background url": bg,
    //     "Video ID": video,
    // }
    // console.table(abtrs)
}
