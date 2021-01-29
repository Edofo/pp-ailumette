const Player = require('./Player');


function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
} 



module.exports = async function Game() {

    try {
        console.log('A votre tour !');
        await sleep(500);
        return await Player();
    } catch(e) {
        console.error("Un problème est survenue ! ", e)
    };
        
}