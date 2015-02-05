/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$('document').ready(function(){
    
    $('.what').css('background-color','pink');
    
    $('.jumbotron').css('background-color', 'purple');
    
    $('div:last p:nth-child(3)').css('background-color', 'black');
    
    $('p:last').css('color', 'black');
    
    $('h1').bind('mouseover', mouseOverMe).bind('mouseout',mouseOutMe);
    
    $('p:gt(1)').css('border-style', 'dotted solid double dashed');
    
    $('p:gt(1)').css({'border-color':'black'});
    
    $('p:first').css({'background-color':'black', 'color':'yellow'});
    
    $('h1').bind('mouseover',mouseOverMe).bind('mouseout',mouseOutMe);
    
    $('h1').bind('click',mouseClick);
    
    $('replaceWText').bind('click',replaceWText);
    
    $('#randPara').bind('click', addAPara);
    
    $('#removePara').bind('click', removeAPara);
});

  $(function() {
    $( "#accordion" ).accordion();
  });

function removeAPara(){
    }
    $('#randPara p:last').remove();
    $('#logo').bind('click',hideTheImage);
    $("li[class='']").css("border","2px solid red");


function addAPara(){
    $('#randPara').append('<p>Follow me on instagram: @yung.lay </p>');
}

function replaceWText(){
    $('#replaceWText').text('Your Not Bae Cause Your Duke');
}

function mouseOverMe(){
    $('h1').html('Jordans Are Bae');
}

function mouseOutMe(){
    $('h1').html('Football Is Bae!');
}

function mouseClick(){
    
    $('p').html('Yung Lay Is Bae');
}
function hideTheImage(){
    $('#logo').hide('explode', {}, 2500);
}

function showTheImage(){
    $('#logo').show('fold', {}, 2500);
    
}

function toggleTheText(){
    $('#logo').fadeOut(2500);
}

function fadeTheImage(){
    $('#logo').fadeOut(2500);
}
function fadeALittle(){
    $('#logo').fadeTo(2500, .30);
}

  $(function() {
    $(".rslides").responsiveSlides();
  });
  
  $("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

$("#slideshow > div:gt(0)").hide();

var index = 1;
var maxindex = $('#slideshow > div').length;

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    $('ul li').removeClass('active');
    $('ul li:eq(' + index + ')').addClass('active');
    index = index < maxindex - 1 ? index + 1 : 0;
}, 3000);

for (var i = 0; i < maxindex; i++) {
    $('ul').append('<li class="' + (i == 0 ? 'active' : '') + '"></li>');
}