function shout(string) {
    // todo
    return string.toUpperCase ()
  }
  function whisper(string) {
    // todo
    return string.toLowerCase()
  }
  function logShout(string){
    console.log(string.toUpperCase())
  }
  function logWhisper(string){
    console.log(string.toLowerCase())
  }
  
function sayHiToHeadphonedRoommate(string){
  // todo
    let noAnswer= "I can\'t hear you!" 
    let yesAnswer= "YES INDEED!" 
    let loveAnswer = "I would love to!"

    if(string.toLowerCase(string)===string){
      return noAnswer
    }
    else if (string.toUpperCase(string)===string){
      return yesAnswer
    }
    else if("Let's have dinner together!"===string){
      return loveAnswer
    }
  }