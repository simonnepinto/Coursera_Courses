(function(window){
   var byeSpeaker = {};

   var speakWord = "Good Bye";

   byeSpeaker.speak = function(){
   	   return(speakWord);
   }

   window.byeSpeaker = byeSpeaker;

})(window);