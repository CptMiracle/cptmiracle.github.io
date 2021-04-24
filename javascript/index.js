function myFunction() {
    document.getElementById("main-card-id1").onmouseover = function() {
        document.getElementById("main-card-image-image1").src = this.src='/gifs/jensenmath3.gif';
    }
    document.getElementById("main-card-id1").onmouseout = function() {
        document.getElementById("main-card-image-image1").src = this.src='/img/StudyHelper home image.jpeg';
    }

    document.getElementById("main-card-id2").onmouseover = function() {
        document.getElementById("main-card-image-image2").src = this.src='/gifs/jensenmath3.gif';
    }
    document.getElementById("main-card-id2").onmouseout = function() {
        document.getElementById("main-card-image-image2").src = this.src='/img/StudyHelper home image.jpeg';
    }

    document.getElementById("main-card-id3").onmouseover = function() {
        document.getElementById("main-card-image-image3").src = this.src='/gifs/jensenmath3.gif';
    }
    document.getElementById("main-card-id3").onmouseout = function() {
        document.getElementById("main-card-image-image3").src = this.src='/img/StudyHelper home image.jpeg';
    }
  }
    
myFunction();

// var numberofcards = 2;
// function myFunction() {
//     for (var i=1; i<numberofcards; i++) {
//         document.getElementById("main-card-id"+i).onmouseover = function() {
//             document.getElementById("main-card-image-image"+i).src = this.src='/gifs/jensenmath3.gif';
//         }
//         document.getElementById("main-card-id"+i).onmouseout = function() {
//             document.getElementById("main-card-image-image"+i).src = this.src='/img/StudyHelper home image.jpeg';
//         }
//     }
// }
    
// myFunction();