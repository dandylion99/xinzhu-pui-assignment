// update the painting page based on id
function updatePainting(paintingID,currentPainting){
    let painting = currentPainting;
    let imgElement = document.querySelector(".painting-full");
    imgElement.src = "assets/"+painting['img'];
    imgElement.alt = painting['alt'];

    let textElementHeading = document.querySelector(".painting-container-text h3");
    textElementHeading.innerText = painting['name'];
    let textElementHeading2 = document.querySelector(".painting-container-text > h4");
    textElementHeading2.innerText = painting['artist']+', '+painting['year'];    
    let textElementParagraph = document.querySelector(".painting-container-text > p");
    textElementParagraph.innerText = painting['intro'];

    let artistImg = document.querySelector(".artist-profile");
    artistImg.src = "assets/"+painting['artist_img'];
    artistImg.alt = painting['artist_alt'];

    let artistName = document.querySelector(".artist-container-left > p");
    artistName.innerHTML = painting['artist']+"<br>"+painting['artist_year'];

    let artistIntro = document.querySelector(".artist-container-right > p");
    artistIntro.innerText = painting['artist_intro'];


    $("#painting-title").text(painting['name']);
    let newURL = "painting.html?id="+paintingID;
    $("#painting-title").attr("href",newURL);

    movement = paintingID.replace(/[0-9]/g, ''); //reference: https://stackoverflow.com/questions/4993764/how-to-remove-numbers-from-a-string
    movement = findMovement(paintingID);

    $('#movement-name').text(movement);
    let mURL = "movement-"+movement+".html";
    $("#movement-name").attr("href", mURL);
}

function findMovement(paintingID){
    let movement = "";

        for (let m in movements){
            // get only the letters in painting ID, which is movement's short_code
            // reference: https://stackoverflow.com/questions/4993764/how-to-remove-numbers-from-a-string
            if (movements[m]['short_code'] == paintingID.replace(/[0-9]/g, '')){ 
                movement = m;
            }
        }
    return movement;
}

// js for index page
if (document.URL.includes("index")||(!(document.URL.includes("movement"))&&!(document.URL.includes("painting")))){
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

        $(".timedot")
            .addClass(fade_in);

        $(".timeline-bar")
            .removeClass("scaled")
            .addClass("scaled-off");   


        // page transition animation, reference: https://stackoverflow.com/questions/24681127/play-animation-then-load-next-page
        $(".movement-box").click(function(e) {
            e.preventDefault();    
            let id = $(this).attr('id');

            // pages other than thes two haven't been devleoped yet, so currently all other four pages point to Impressionism
            if ((id=="Impressionism")|(id=="Neoclassicism")){
                $(".timeline-bar")
                    .removeClass("scaled-off")
                    .addClass("scaled");
                $(".timedot")
                    .addClass(fade_out);
                $(".intro-container")
                    .addClass(fade_out);
                $(".movement-container")
                    .addClass(fade_out)
                    .bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                        function() {
                        window.location.href = "movement-"+id+".html"; 
                });
            }
        })
        $(".movement-box").mouseover(function(){

            let ID = $(this).attr('id');
            if ((ID=="Impressionism")|(ID=="Neoclassicism")){

                img = movements[ID]['img'];

                let imgURL = "url(assets/" + img + ")";
                console.log(imgURL);
                $(this).children(".movement-bar").addClass("hover");
                $('.background')
                    .css("background-image",imgURL);
                setTimeout(function(){
                    $('.background')   
                    .removeClass("fade-out")
                    .addClass("fade-in");
                    },10); //wait for the background image be replaced      
                    // .css("background-image",'url("assets/Impression_Sunrise.png")');
            }
    
        });

        $(".movement-box").mouseleave(function(){
            $(this).children(".movement-bar").removeClass("hover");

            $('.background')
                .removeClass("fade-in")
                .addClass("fade-out");
        });
          
        }) 
}
    
// js for movement pages
if(document.URL.includes("movement")){
    const transition_el = document.querySelector('.transition');
    
    // if user jump to this page from the painting page, then use the slide animation
    if(document.referrer.includes("painting")){
        transition_el.classList.add('is-active');
        setTimeout(() => {
            transition_el.classList.remove('is-active');
        }, 500);   
    }

    // when pinching on the touchpad, zoom out animation to go back to the homepage
    node = document.querySelector("body");
    node.addEventListener('wheel', (event) => {
        if(event.deltaY>0){
            window.location.href = "index.html";

        }
    });
        
    window.onload = () => {
        ID = $('body').attr('id');

        // set theme color
        $(':root').css('--theme-color', movements[ID]["theme_color"]);
        $(':root').css('--main-bg-color', movements[ID]["main_bg_color"]);

        // add alt text for each painting img
        $('.painting-box').each(function(i, obj) {
            ID = obj.id
            console.log($("#"+ID+" img"));
            $("#"+ID+" img").attr('alt', paintings[ID]['alt']);
        });

        // add animations
        const anchors = document.querySelectorAll('.painting-box a');
            
        for(let i=0; i<anchors.length; i++){
            const anchor = anchors[i];
            anchor.addEventListener('mouseover', e=>{
                anchor.classList.add('shadow');

            });
            anchor.addEventListener('mouseleave', e=>{
                anchor.classList.remove('shadow');
            });
            anchor.addEventListener('click', e => {
                e.preventDefault();    
                console.log(anchor);

                transition_el.classList.add('is-active');
                setInterval(() => {
                    window.location.href = anchor.href;
                },500);
            });          
        }   
    }
        
}

// js for painting pages
if(document.URL.includes("painting")){
    // get parameter from URL
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const paintingID = params.get('id');

    let currentPainting = paintings[paintingID];
    console.log(currentPainting);

    updatePainting(paintingID, currentPainting);
    html = document.querySelector("html");

    window.onload = () => {
        let movement = findMovement(paintingID);
        let backURL = "movement-"+movement+".html";
        movement = movements[movement];
   
        $(':root').css('--theme-color', movement["theme_color"]);
        $(':root').css('--main-bg-color', movement["main_bg_color"]);
        html.style.backgroundColor = movement["main_bg_color"]; 

        // animation when clicking the arrow
        $(".painting-container-arrow").click(function(){
            $("main")
                .addClass("fadeOut");
            $(".painting-container-arrow")
                .addClass("fadeOut")
                .bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function() {
                    const transition_el = document.querySelector('.transition');
                    window.location.href = backURL;
                });
        })
    }  
}






