import React from 'react'

const drum = ({audioClip}) => {
    const playSound=(clip)=>{
        document.getElementById(clip.keyTrigger)
        .play()
        .catch(e=>console.log(e) )
        document.getElementById("display").innerText=clip.description;
    }
  return (
    <button
    className="drum-pad"
    id={`drum-${audioClip.keyTrigger}`}
    onClick={() => playSound(audioClip)}
  >
    <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip" />
    {audioClip.keyTrigger}
  </button>
  )
}

export default drum;