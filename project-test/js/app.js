class Painting {
    ID;
    name;
    img;
    artist;
    year;
    intro;
    artist_year;
    artist_img;
    artist_intro;

    constructor(ID) {
        this.ID = ID;
   }
}

//reference: https://stackoverflow.com/questions/24681127/play-animation-then-load-next-page
if (document.URL.includes("index")){
    $(document).ready(function() {
        const fade_out = [
            'animate__animated',
            'animate__fadeOut'
          ];
          const fade_in = [
            'animate__animated',
            'animate__fadeIn'
          ];
        const zoom_in = [
            'animate__animated',
            'animate__zoomIn'
        ];
      
        $("#Neoclassicism").click(function() {
            $(".timeline-bar")
                .addClass(zoom_in);
            $(".intro-container")
                .addClass(fade_out);
            $(".movement-container")
                .addClass(fade_out)
                .bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                    function() {
                    window.location.href = "movement.html"; 
                });
        });

        // $("#Neoclassicism").mouseover(function(){
        //     $('.background')
        //         .removeClass("fade-out")
        //         .addClass("fade-in");
        

        //     // $('body,html').css({backgroundColor: 'red'})
        // });

        // $("#Neoclassicism").mouseleave(function(){
        //     $('.background')
        //         .removeClass("fade-in")
        //         .addClass("fade-out");
        //     // $('body,html').css({backgroundColor: 'red'})
        // });

        $(".movement-box").mouseover(function(){
            let img = $(this).attr('id');

            img = movements[img]['img'];

            let imgURL = "url(assets/" + img + ")";
            console.log(imgURL);
            $('.background')
                .css("background-image",imgURL)
                .removeClass("fade-out")
                .addClass("fade-in");
                // .css("background-image",'url("assets/Impression_Sunrise.png")');
        });

        $(".movement-box").mouseleave(function(){
            $('.background')
                // .css("background-image","")
                .removeClass("fade-in")
                .addClass("fade-out");
                // .css("background-image",'url("assets/Impression_Sunrise.png")');
        });

    })
}


// update the painting page based on id
function updatePainting(currentPainting){
    let painting = currentPainting;
    let imgElement = document.querySelector(".painting-full");
    imgElement.src = "assets/"+painting['img'];

    let textElementHeading = document.querySelector(".painting-container-text h3");
    console.log(textElementHeading);
    textElementHeading.innerText = painting['name'];
    let textElementHeading2 = document.querySelector(".painting-container-text > h4");
    textElementHeading2.innerText = painting['artist']+', '+painting['year'];    
    let textElementParagraph = document.querySelector(".painting-container-text > p");
    textElementParagraph.innerText = painting['intro'];

    let artistImg = document.querySelector(".artist-profile");
    artistImg.src = "assets/"+painting['artist_img'];

    let artistName = document.querySelector(".artist-container-left > p");
    artistName.innerHTML = painting['artist']+"<br>"+painting['artist_year'];

    let artistIntro = document.querySelector(".artist-container-right > p");
    artistIntro.innerText = painting['artist_intro'];
}


if(document.URL.includes("painting")){
    // get parameter from URL
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const paintingID = params.get('id');

    let currentPainting = paintings[paintingID];
    console.log(currentPainting);
    updatePainting(currentPainting);
    html = document.querySelector("html");

    //To do: relace with other colors using variables
    html.style.backgroundColor = '#FCD9D9'; 


    $(".painting-container-arrow").click(function(){

        $("main")
            .addClass("fadeOut");
        $(".painting-container-arrow")
            .addClass("fadeOut")
            .bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
            function() {
                const transition_el = document.querySelector('.transition');
                window.location.href = "movement.html";
            });
    })
}
    
if(document.URL.includes("movement")){
    const transition_el = document.querySelector('.transition');

    // if user jump to this page from the painting page, then use the slide animation
    if(document.referrer.includes("painting")){
        transition_el.classList.add('is-active');
        setTimeout(() => {
            transition_el.classList.remove('is-active');
        }, 500);   
    }
    
    window.onload = () => {
        const anchors = document.querySelectorAll('.painting-box a');
            
        for(let i=0; i<anchors.length; i++){
            const anchor = anchors[i];
            anchor.addEventListener('mouseover', e=>{
                // let s = "#"+e.target.parentNode.id;
                // let p = document.querySelector("#I1");
                // p.classList.add('shadow');
                anchor.classList.add('shadow');

            });
            anchor.addEventListener('mouseleave', e=>{
                anchor.classList.remove('shadow');
            });
            anchor.addEventListener('click', e => {
                e.preventDefault();    
                console.log(anchor);


        
                transition_el.classList.add('is-active');
                // console.log(anchor.href);
                setInterval(() => {
                    window.location.href = anchor.href;
                //  window.location.href = "painting.html?id=I1";
                },500);
            });
        }
        
}}



