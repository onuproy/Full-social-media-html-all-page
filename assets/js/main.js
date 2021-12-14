jQuery(document).ready(function(){
    
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                    $('#imagePreview').hide();
                    $('#imagePreview').fadeIn(650);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
        jQuery("#imageUpload").change(function () {
            readURL(this);
        });


        jQuery(function () {
            jQuery("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
            jQuery$("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");
        });

    
        // Result Slider
        jQuery('.slider_cew_ss_area').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            margin:20,
            dot:true,
            nav: false,
            smartSpeed: 2500,
            items: 1,
            margin: 30,
        });

           // Result Slider
        jQuery('.job_slider_item_area').owlCarousel({
            loop: true,
            autoplay: false,
            autoplayTimeout: 5000,
            margin:20,
            dot:false,
            nav: false,
            nav: true,
            navText: ["<img src='assets/images/icon/job_left.png'>","<img src='assets/images/icon/job_right.png'>"],
            smartSpeed: 2500,
            items: 3,
            margin: 50,
            responsive:{
                0:{
                    items:1,
                },
                500:{
                    items:2,
                },
                768:{
                    items:2,
                },
                1140:{
                    items:3,

                }
            }
        });
            // Tab JS
      jQuery(function() {
        jQuery("#tabs").tabs();
      });
      jQuery(function() {
        jQuery("#tabs1").tabs();
      });


});

$(document).on('click', '.qty-plus', function () {
   $(this).prev().val(+$(this).prev().val() + 1);
});
$(document).on('click', '.qty-minus', function () {
   if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
});