$('nav button').on('click', function(){
    var color= $(this).attr('filter-color');

    $('.filter-box-div').removeClass().addClass('filter-box-div').addClass(color)
})
