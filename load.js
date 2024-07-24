// databaseLoader.js
const infoUrl = 'https://raw.githubusercontent.com/feuberpvp/legecloCollection/main/database.db';

export const videoDB = [];
export const thumbDB = [];

(async () => {
    try {
        let res = await axios.get(infoUrl);
        let database = res.data.split('\n');
        
        for (let data of database) {
            if (data[0] == '*' || data.length <= 5) continue; // Skipping lines that start with '*' or are too short
            
            let content = data.split(' | ');
            let videoPath = content[0]
            let thumbnailPath = content[1];
            
            videoDB.push(videoPath);
            thumbDB.push(thumbnailPath)
        }
        
        console.log('Database loaded successfully.');
    } catch (error) {
        console.error('Error loading database:', error);
    }
})();
