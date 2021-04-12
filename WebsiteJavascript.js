// JavaScript source code

// Carasol Javascript "Homepage"
$(document).ready(function ()
{
    // Activate Carousel with a specified interval
    $("#myCarousel").carousel({ interval: 750 });

    // Enable Carousel Indicators
    $(".item1").click(function ()
    {
        $("#myCarousel").carousel(0);
    });

    $(".item2").click(function ()
    {
        $("#myCarousel").carousel(1);
    });

    $(".item3").click(function ()
    {
        $("#myCarousel").carousel(2);
    });

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function ()
    {
        $("#myCarousel").carousel("prev");
    });

    $(".carousel-control-next").click(function ()
    {
        $("#myCarousel").carousel("next");
    });
});

// Form validation "Contact Me" page
(function ()
{
    'use strict';
    window.addEventListener('load', function ()
    {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form)
        {
            form.addEventListener('submit', function (event)
            {
                if (form.checkValidity() === false)
                {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();