function navHashHistory(saveHash){
//Hash Hijack Method for SPA - a custom function written by Andrew Bingham 17/01/17 for SPA webapp development

//for each new SPA page, add the hash to the URL bar
//As we are using browser history method, there is no need to change it if the browser has aleady completed this as default--so lets
//evaluate what is there first.

    var hashValue = location.hash;
    hashValue = hashValue.replace(/^#/, '');
    if(hashValue!=saveHash){
    window.history.pushState("tmp", "POS Hash Test", "#"+saveHash);
    //alert("hash value DIFF");
  }else{

      //alert("hash value SAME");
  }





}



//Event Listener for back button press
$('.navBack').click(function() {

history.back();

//Only grab the current location.hash on change of url -- use onhashchange  (onpopstate not supported cross browser)
window.onhashchange = function() {
  var hashValue = location.hash;
  //we don't pass the # char - just return the value after the #
  hashValue = hashValue.replace(/^#/, '');
  //alert("change of hash detected");
  changeAppPage(hashValue);
  };

});


//for full recipe --track item id
function registerItemID(itemid){
$(".itemidstore").attr("_itemidstore", null);
var itemid ;
//will need to empty first
$(".itemidstore").attr("_itemidstore", itemid);
}



$('._viewAllRecipes').click(function() {

changeAppPage("_viewAllRecipes", 'false');

});

//get the full recipe -- will need to inject an id into a root attribute
$(document).on('click', '._viewFullRecipe', {}, function(e) {

var itemid = $(this).attr("_itemid");

registerItemID(itemid);

changeAppPage("_viewFullRecipe", 'false');

});

$(document).on('click', '.nextScreen', {}, function(e) {
    swiper.slideNext();
});

$(document).on('click', '.prevScreen', {}, function(e) {
    swiper.slidePrev();
});

$(document).on('click', '.returnToStart', {}, function(e) {
    swiper.slideTo(0, 1500, true);
});

$(document).on('click', '.createRecipeBtn', {}, function(e) {
    changeAppPage('_createRecipe', null);
});





//declare current step outside of function so that is global and accessible to other functions
var currentStep;

function changeAppPage(screen) {

    //reenable the progress bar
    $('.progress').css({"visibility": "visible"});
    $('.progressWrapper').css({"visibility": "visible"});
    //the screen to goto
    var screen;
    //the screen number
    var screenNum;



    switch (screen) {




      case '_register':
          swiper.destroy(true, true);
          $(".navBack").css("visibility", "hidden");

          $(".swiper-pagination").css("visibility", "visible");

          $(".contentRoot").empty();

          getScreenContent(screen);
          currentStep = screen;
          navHashHistory(screen);

          break;







        case '_dashboard':
            swiper.destroy(true, true);
            $(".navBack").css("visibility", "visible");

            $(".swiper-pagination").css("visibility", "visible");

            $(".contentRoot").empty();

            getScreenContent(screen);
            currentStep = screen;
            navHashHistory(screen);

            break;


            case '_createRecipe':
                swiper.destroy(true, true);
                $(".navBack").css("visibility", "visible");

                $(".swiper-pagination").css("visibility", "visible");

                $(".contentRoot").empty();

                getScreenContent(screen);
                currentStep = screen;
                navHashHistory(screen);

                break;



                case '_login':

                $(".navBack").css("visibility", "visible");

                $(".swiper-pagination").css("visibility", "visible");

                $(".contentRoot").empty();


                getScreenContent(screen);
                currentStep = screen;
                navHashHistory(screen);

                break;


                case '_addRecipeStep':

                $(".navBack").css("visibility", "visible");

                $(".swiper-pagination").css("visibility", "visible");

                $(".contentRoot").empty();


                getScreenContent(screen);
                currentStep = screen;
                navHashHistory(screen);

                break;




                case '_viewAllRecipes':

                $(".navBack").css("visibility", "visible");

                $(".swiper-pagination").css("visibility", "visible");

                $(".contentRoot").empty();


                getScreenContent(screen);
                currentStep = screen;
                navHashHistory(screen);

                break;



                case '_viewFullRecipe':

                $(".navBack").css("visibility", "visible");

                $(".swiper-pagination").css("visibility", "visible");

                $(".contentRoot").empty();


                getScreenContent(screen);
                currentStep = screen;
                navHashHistory(screen);



                break;


    } //close switch

} //end function
