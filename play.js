// Get current web link address
let webUrl = window.location.href
// Get VideoID 
videoID = webUrl.split("?id=")[1].split("?name=")[0]
{/* <iframe width="1280" height="720" src="" allow="autoplay; fullscreen" allowfullscreen> */}
document.title = webUrl.split("?name=")[1].replaceAll("%20"," ")
let elmt = document.createElement("iframe")
elmt.width = "1080"
elmt.height = "520"
elmt.src = `https://drive.google.com/file/d/${videoID}/preview`
elmt.allowFullscreen = 1
elmt.allow = "autoplay; fullscreen"
elmt.style.position = "absolute"
elmt.style.top = '50px'
elmt.style.left = '410px'
elmt.style.outline = "15px ridge grey"
elmt.style.boxShadow = "30px 35px 0 0 rgba(181, 185, 197, 0.671)"
document.body.append(elmt)