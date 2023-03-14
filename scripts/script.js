/* eslint-env browser, jquery */
/* eslint-disable no-console */

/*
let navbar = document.querySelector("#header");

let lastScrollValue = 0;

document.addEventListener('scroll',() => {
	let top  = document.documentElement.scrollTop;
    
    if(top >= lastScrollValue) {
    	navbar.classList.add("hidden");
    } else {
    	navbar.classList.remove("hidden");
    }
    lastScrollValue = top;
});
*/
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    console.log("this");
  } else {
    mybutton.style.display = "none";
    console.log("that");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



var btntri = document.getElementsByClassName("lesboutons");

for (var i = 0; i < btntri.length; i++) {
    btntri[i].addEventListener('click', function(e) {
    let div3D = document.querySelectorAll('.div3D');
    let divCM = document.querySelectorAll('.divCM');
    let divGraph = document.querySelectorAll('.divGraph');
    let divPAO = document.querySelectorAll('.divPAO');
    let divPhoto = document.querySelectorAll('.divPhoto');
    let divProg = document.querySelectorAll('.divProg');
    let divVideo = document.querySelectorAll('.divVideo');

    let tous = document.getElementById('tous');
    let TD = document.getElementById('troisD');
    let CM = document.getElementById('CM');
    let Graph = document.getElementById('Graph');
    let PAO = document.getElementById('PAO');
    let Photo = document.getElementById('Photo');
    let Prog = document.getElementById('Prog');
    let Video = document.getElementById('Video');
    


    if(this.getAttribute('data-btn') === "tous"){
        tous.classList.add("btnSelector");
        TD.classList.remove("btnSelector");
        CM.classList.remove("btnSelector");
        Graph.classList.remove("btnSelector");
        PAO.classList.remove("btnSelector");
        Photo.classList.remove("btnSelector");
        Prog.classList.remove("btnSelector");
        Video.classList.remove("btnSelector");

        for (var i = 0; i < div3D.length; i++) {
            div3D[i].style.display = 'block';
        }
        for (var i = 0; i < divCM.length; i++) {
            divCM[i].style.display = 'block';
        }
        for (var i = 0; i < divGraph.length; i++) {
            divGraph[i].style.display = 'block';
        }
        for (var i = 0; i < divPAO.length; i++) {
            divPAO[i].style.display = 'block';
        }
        for (var i = 0; i < divPhoto.length; i++) {
            divPhoto[i].style.display = 'block';
        }
        for (var i = 0; i < divProg.length; i++) {
            divProg[i].style.display = 'block';
        }
        for (var i = 0; i < divVideo.length; i++) {
            divVideo[i].style.display = 'block';
        }
    } else if(this.getAttribute('data-btn') === "3D"){
        tous.classList.remove("btnSelector");
        TD.classList.add("btnSelector");
        CM.classList.remove("btnSelector");
        Graph.classList.remove("btnSelector");
        PAO.classList.remove("btnSelector");
        Photo.classList.remove("btnSelector");
        Prog.classList.remove("btnSelector");
        Video.classList.remove("btnSelector");

        for (var i = 0; i < div3D.length; i++) {
            div3D[i].style.display = 'block';
        }
        for (var i = 0; i < divCM.length; i++) {
            divCM[i].style.display = 'none';
        }
        for (var i = 0; i < divGraph.length; i++) {
            divGraph[i].style.display = 'none';
        }
        for (var i = 0; i < divPAO.length; i++) {
            divPAO[i].style.display = 'none';
        }
        for (var i = 0; i < divPhoto.length; i++) {
            divPhoto[i].style.display = 'none';
        }
        for (var i = 0; i < divProg.length; i++) {
            divProg[i].style.display = 'none';
        }
        for (var i = 0; i < divVideo.length; i++) {
            divVideo[i].style.display = 'none';
        }
    } else if(this.getAttribute('data-btn') === "CM"){
        tous.classList.remove("btnSelector");
        TD.classList.remove("btnSelector");
        CM.classList.add("btnSelector");
        Graph.classList.remove("btnSelector");
        PAO.classList.remove("btnSelector");
        Photo.classList.remove("btnSelector");
        Prog.classList.remove("btnSelector");
        Video.classList.remove("btnSelector");
         
        for (var i = 0; i < div3D.length; i++) {
            div3D[i].style.display = 'none';
        }
        for (var i = 0; i < divCM.length; i++) {
            divCM[i].style.display = 'block';
        }
        for (var i = 0; i < divGraph.length; i++) {
            divGraph[i].style.display = 'none';
        }
        for (var i = 0; i < divPAO.length; i++) {
            divPAO[i].style.display = 'none';
        }
        for (var i = 0; i < divPhoto.length; i++) {
            divPhoto[i].style.display = 'none';
        }
        for (var i = 0; i < divProg.length; i++) {
            divProg[i].style.display = 'none';
        }
        for (var i = 0; i < divVideo.length; i++) {
            divVideo[i].style.display = 'none';
        }
    } else if(this.getAttribute('data-btn') === "Graph"){
        tous.classList.remove("btnSelector");
        TD.classList.remove("btnSelector");
        CM.classList.remove("btnSelector");
        Graph.classList.add("btnSelector");
        PAO.classList.remove("btnSelector");
        Photo.classList.remove("btnSelector");
        Prog.classList.remove("btnSelector");
        Video.classList.remove("btnSelector");
         
        for (var i = 0; i < div3D.length; i++) {
            div3D[i].style.display = 'none';
        }
        for (var i = 0; i < divCM.length; i++) {
            divCM[i].style.display = 'none';
        }
        for (var i = 0; i < divGraph.length; i++) {
            divGraph[i].style.display = 'block';
        }
        for (var i = 0; i < divPAO.length; i++) {
            divPAO[i].style.display = 'none';
        }
        for (var i = 0; i < divPhoto.length; i++) {
            divPhoto[i].style.display = 'none';
        }
        for (var i = 0; i < divProg.length; i++) {
            divProg[i].style.display = 'none';
        }
        for (var i = 0; i < divVideo.length; i++) {
            divVideo[i].style.display = 'none';
        }
    } else if(this.getAttribute('data-btn') === "PAO"){
        tous.classList.remove("btnSelector");
        TD.classList.remove("btnSelector");
        CM.classList.remove("btnSelector");
        Graph.classList.remove("btnSelector");
        PAO.classList.add("btnSelector");
        Photo.classList.remove("btnSelector");
        Prog.classList.remove("btnSelector");
        Video.classList.remove("btnSelector");
         
        for (var i = 0; i < div3D.length; i++) {
            div3D[i].style.display = 'none';
        }
        for (var i = 0; i < divCM.length; i++) {
            divCM[i].style.display = 'none';
        }
        for (var i = 0; i < divGraph.length; i++) {
            divGraph[i].style.display = 'none';
        }
        for (var i = 0; i < divPAO.length; i++) {
            divPAO[i].style.display = 'block';
        }
        for (var i = 0; i < divPhoto.length; i++) {
            divPhoto[i].style.display = 'none';
        }
        for (var i = 0; i < divProg.length; i++) {
            divProg[i].style.display = 'none';
        }
        for (var i = 0; i < divVideo.length; i++) {
            divVideo[i].style.display = 'none';
        }
    } else if(this.getAttribute('data-btn') === "Photo"){
        tous.classList.remove("btnSelector");
        TD.classList.remove("btnSelector");
        CM.classList.remove("btnSelector");
        Graph.classList.remove("btnSelector");
        PAO.classList.remove("btnSelector");
        Photo.classList.add("btnSelector");
        Prog.classList.remove("btnSelector");
        Video.classList.remove("btnSelector");
         
        for (var i = 0; i < div3D.length; i++) {
            div3D[i].style.display = 'none';
        }
        for (var i = 0; i < divCM.length; i++) {
            divCM[i].style.display = 'none';
        }
        for (var i = 0; i < divGraph.length; i++) {
            divGraph[i].style.display = 'none';
        }
        for (var i = 0; i < divPAO.length; i++) {
            divPAO[i].style.display = 'none';
        }
        for (var i = 0; i < divPhoto.length; i++) {
            divPhoto[i].style.display = 'block';
        }
        for (var i = 0; i < divProg.length; i++) {
            divProg[i].style.display = 'none';
        }
        for (var i = 0; i < divVideo.length; i++) {
            divVideo[i].style.display = 'none';
        }
    } else if(this.getAttribute('data-btn') === "Prog"){
        tous.classList.remove("btnSelector");
        TD.classList.remove("btnSelector");
        CM.classList.remove("btnSelector");
        Graph.classList.remove("btnSelector");
        PAO.classList.remove("btnSelector");
        Photo.classList.remove("btnSelector");
        Prog.classList.add("btnSelector");
        Video.classList.remove("btnSelector");
         
        for (var i = 0; i < div3D.length; i++) {
            div3D[i].style.display = 'none';
        }
        for (var i = 0; i < divCM.length; i++) {
            divCM[i].style.display = 'none';
        }
        for (var i = 0; i < divGraph.length; i++) {
            divGraph[i].style.display = 'none';
        }
        for (var i = 0; i < divPAO.length; i++) {
            divPAO[i].style.display = 'none';
        }
        for (var i = 0; i < divPhoto.length; i++) {
            divPhoto[i].style.display = 'none';
        }
        for (var i = 0; i < divProg.length; i++) {
            divProg[i].style.display = 'block';
        }
        for (var i = 0; i < divVideo.length; i++) {
            divVideo[i].style.display = 'none';
        }
    } else if(this.getAttribute('data-btn') === "Video"){
        tous.classList.remove("btnSelector");
        TD.classList.remove("btnSelector");
        CM.classList.remove("btnSelector");
        Graph.classList.remove("btnSelector");
        PAO.classList.remove("btnSelector");
        Photo.classList.remove("btnSelector");
        Prog.classList.remove("btnSelector");
        Video.classList.add("btnSelector");
         
        for (var i = 0; i < div3D.length; i++) {
            div3D[i].style.display = 'none';
        }
        for (var i = 0; i < divCM.length; i++) {
            divCM[i].style.display = 'none';
        }
        for (var i = 0; i < divGraph.length; i++) {
            divGraph[i].style.display = 'none';
        }
        for (var i = 0; i < divPAO.length; i++) {
            divPAO[i].style.display = 'none';
        }
        for (var i = 0; i < divPhoto.length; i++) {
            divPhoto[i].style.display = 'none';
        }
        for (var i = 0; i < divProg.length; i++) {
            divProg[i].style.display = 'none';
        }
        for (var i = 0; i < divVideo.length; i++) {
            divVideo[i].style.display = 'block';
        }
    }



})
}
