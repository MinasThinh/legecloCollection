
//     fetch(url, {mode:"no-cors"})
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.text();
//       })
//       .then(text => {
//         let database = text.split("\n")
//         console.table(database)
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });

const infoUrl = 'https://raw.githubusercontent.com/feuberpvp/legecloCollection/main/database.db';
const videoUrl = 'file:///D:/C Apps/Legeclo Collection/Videos'
const thumbnailUrl = 'file:///D:/C Apps/Legeclo Collection/Thumbnails'
// load database
export const infoDB = [];
export const videoDB = [];
export const thumbnailDB = [];
(async() => {
        let res = await axios.get(infoUrl)
        let database = res.data.split('\n');
        // console.log(database)
        for(let data of database) {
            if (data[0] == '*' || data.length <= 5) continue
            let content = data.split(' | ')
            videoDB.push(`${videoUrl}/${content[0]}${content[1]}.mp4`)
            thumbnailDB.push(`${thumbnailUrl}/${content[0]}${content[1]}.png`)
            infoDB.push(data)
            // console.log(data)
        }
    })()