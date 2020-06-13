(function(window){
    var hellospeaker = {};
    var speakWord = "Hello";

    hellospeaker.speak = function(){
    	return(speakWord);
    }

    window.hellospeaker = hellospeaker;

})(window);