
(function(window) {
  const speakWord = "Good Bye"
  const byeSpeaker = {}
  byeSpeaker.speak = function(name) {
    console.log(`%c ${speakWord} ${name}`, "font-size: 20px; font-weight: bold; color: Red;")
  }
  window.byeSpeaker = byeSpeaker
})(window)