var Link = {
    setColor: function(color) {
        var aList = document.querySelectorAll('a');
var i = 0;
while(i < aList.length) {
    aList[i].style.color = color;
    i = i + 1;
}
    }
}
var Body = {
    setColor: function(color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function(color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}
function nightDayHandler(self) {
    
                                                                   var target = document.querySelector('body');
                                                                   if(self.value === 'night') {
                                                                   // target.style.backgroundColor='black';
                                                                       Body.setBackgroundColor('black');
                                                    // target.style.color='white';
                                                                       Body.setColor('white');
                                                                   self.value = 'day';
                                                                   
                                                                   Link.setColor('powderblue');
                                                                   
                                                                   } else {
                                                                   Body.setBackgroundColor('white');
                                                  Body.setColor('black');
                                                                   self.value = 'night';
                                                                   
                                                                   Link.setColor('blue');
                                                                   
                                                                   }
                                                                   
}