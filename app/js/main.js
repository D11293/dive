// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {

  $(function(){

    var $window = $(window);

    // Disable certain links in docs
    $('section [href^=#]').click(function (e) {
      e.preventDefault();
    })

    // side bar
    setTimeout(function () {
      $('.bs-docs-sidenav').affix({
        offset: {
          top: function () { return $window.width() <= 980 ? 290 : 210 }, bottom: 270
        }
      })
    }, 100)

    // Hide/Show Back To Top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').removeClass('is-hidden');
        } else {
            $('#back-to-top').addClass('is-hidden');
        }
    });

    // Animate scroll to topp
    $('#back-to-top').each(function(){
        $(this).click(function(e){
            e.preventDefault();
            $('html,body').animate({ scrollTop: 0 }, 'fast');
            return false;
            $(this).addClass('is-hidden');
        });
    });

    // make code pretty
    window.prettyPrint && prettyPrint()

    // add-ons
    $('.add-on :checkbox').on('click', function () {
      var $this = $(this)
        , method = $this.attr('checked') ? 'addClass' : 'removeClass'
      $(this).parents('.add-on')[method]('active')
    })

    // add tipsies to grid for scaffolding
    if ($('#gridSystem').length) {
      $('#gridSystem').tooltip({
          selector: '.show-grid > [class*="span"]'
        , title: function () { return $(this).width() + 'px' }
      })
    }

    // tooltip demo
    $('.tooltip-demo').tooltip({
      selector: "a[data-toggle=tooltip]"
    })

    $('.tooltip-test').tooltip()
    $('[data-toggle="tooltip"]').tooltip()
    $('.popover-test').popover()

    // popover demo
    $("a[data-toggle=popover]")
      .popover()
      .click(function(e) {
        e.preventDefault()
      })

    // button state demo
    $('#fat-btn')
      .click(function () {
        var btn = $(this)
        btn.button('loading')
        setTimeout(function () {
          btn.button('reset')
        }, 3000)
      })

    // carousel demo
    $('#myCarousel').carousel()

    // javascript build logic
    var inputsComponent = $("#components.download input")
      , inputsPlugin = $("#plugins.download input")
      , inputsVariables = $("#variables.download input")

    // toggle all plugin checkboxes
    $('#components.download .toggle-all').on('click', function (e) {
      e.preventDefault()
      inputsComponent.attr('checked', !inputsComponent.is(':checked'))
    })

    $('#plugins.download .toggle-all').on('click', function (e) {
      e.preventDefault()
      inputsPlugin.attr('checked', !inputsPlugin.is(':checked'))
    })

    $('#variables.download .toggle-all').on('click', function (e) {
      e.preventDefault()
      inputsVariables.val('')
    })

  })



  // Masonry Initializer for /examples/masonry/
  if(jQuery().masonry) {

    var $container = $('#masonry-container');
    // initialize Masonry after all images have loaded
    $container.imagesLoaded( function() {
      $container.masonry({
        columnWidth: 400,
        itemSelector: '.msnry',
        gutter: 20,
        isFitWidth: true
      });
    });
  }

  // Ion.RangeSlider Initializer
  $('#range_1').ionRangeSlider();
  $('#range_2').ionRangeSlider();




}(window.jQuery)
