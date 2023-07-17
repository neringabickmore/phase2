$(document).ready(function(){
    /* This function changes the style of 
    navbar bars when the user clicks on the bars.
    */ 
    $("#barsContainer").click(function () {
        changeBars(this);
    });

    function changeBars(i) {
        i.classList.toggle("change");
    };
});