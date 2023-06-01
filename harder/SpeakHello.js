
(function(window) {
  const speakWord = "Hello";
  const helloSpeaker = {}
  helloSpeaker.speak = function(name) {
    console.log(`%c ${speakWord} ${name}`, "font-size: 20px; font-weight: bold; color: Lime;")
  }
  window.helloSpeaker = helloSpeaker
})(window)