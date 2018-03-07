function myFunction() {
    
    var nodelist = document.body.childNodes;
    const assignElementsAudio = function(nodes){
      nodes.forEach(function(node){
          playSoundFor(node);
      })
  };

  function playSoundFor(node){
      console.log(node.nodeName)
      switch(node.nodeName){
          case "#text":
              return playStomachThumps();
          break;
          case "#comment":
              return playStomachThumps();
          break;
          case "P":
                return playKick();
          default:
              return "no sound"

      }
  }

  function playSound(file){
      var x = document.createElement("AUDIO");
      if (x.canPlayType("audio/mpeg")) {
          x.setAttribute("src",file);
      }
      x.setAttribute("controls", "controls");
      document.body.appendChild(x);
  }

  function playStomachThumps(){
      return playSound("media/Stomach_Thumps.mp3")
  }
  
  function playKick(){
      return playsound("media/Crash_Layer_Kick_Drum.mp3")
  }
  function playDrumset(){
      return playsound("media/Crash_Layer_Drumset.mp3")
  }

    assignElementsAudio(nodelist);}