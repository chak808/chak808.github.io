function checkIn(roomN, rA, lN) {
        var i = 0;
        var roomList = document.getElementById(roomN);
        var roomName = roomList.getElementsByTagName("li");
        if (roomName.length < 3) {
          var addName = document.createElement('li');
          var cIN = document.getElementById(rA).value;
          var newName = document.createTextNode(cIN);
          addName.appendChild(newName);
          var position = document.getElementsByTagName('ol')[lN];
          var addDate = document.createElement('p');
          var newDate = document.createTextNode("Check in at" + " " + Date());
          addDate.appendChild(newDate);
          addName.appendChild(addDate);
          position.appendChild(addName);
          document.getElementById(rA).value = "";
          addName.onclick = function () {
          if (i < 1) {
          i++;
          document.getElementsByTagName('span')[lN].innerHTML = "Are you sure?";
          var yButton = document.createElement('button');
          var yesB = document.createTextNode('Yes');
          var nButton = document.createElement('button');
          var noB = document.createTextNode('No');
          yButton.appendChild(yesB);
          nButton.appendChild(noB);
          addName.appendChild(yButton);
          addName.appendChild(nButton);
          
          //When someone clicks the Yes button//
          yButton.onclick = function () {
            this.parentNode.parentNode.removeChild(this.parentNode);
            document.getElementsByClassName('userInput')[lN].style.visibility = "visible";
            document.getElementsByClassName('userClick')[lN].style.visibility = "visible";
            document.getElementsByClassName('room')[lN].style.border = "";
            var space = document.getElementsByTagName('h2')[lN];
            space.innerHTML = "Available";
            space.style.color = "green";
            document.getElementsByTagName('span')[lN].innerHTML = "Click to check out";
            if (roomName.length === 0){
              document.getElementsByTagName('span')[lN].style.visibility = "hidden";
            }
          };
          
          //When someone clicks the No button//
          nButton.onclick = function () {
            document.getElementsByTagName('span')[lN].innerHTML = "Click to check out";
            this.parentNode.removeChild(yButton);
            this.parentNode.removeChild(nButton);
            setTimeout(function(){
              i -= 1;
            }, 100);
          };
          }
          };

          if (roomName.length === 3) {
              document.getElementsByClassName('room')[lN].style.border = "2.5px solid red";
              var space = document.getElementsByTagName('h2')[lN];
              space.innerHTML = "Unavailable";
              space.style.color = "red";
              document.getElementsByClassName('userInput')[lN].style.visibility = "hidden";
              document.getElementsByClassName('userClick')[lN].style.visibility = "hidden";
            }
          else if (roomName.length <= 3){
            document.getElementsByTagName('span')[lN].style.visibility = "visible";
          }
          }
        }
function enterIn(roomN, rA, lN) {
        if (window.event.keyCode == 13) {
          checkIn(roomN, rA, lN);
        }
      }
var myBG = setInterval(rBackground, 10000);
function rBackground() {
  var rN = Math.floor(Math.random() * 4);
  var bG = ["url('Room.jpg')",
            "url('Pool.jpg')",
            "url('Dining.jpg')",
            "url('Hotel.jpg')"
            ];
  document.body.style.backgroundImage=bG[rN];
}
