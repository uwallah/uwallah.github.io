 

let imagesData = {

    photo:  ["images/kep1.jpg", "images/kep2.jpg", "images/kep3.jpg", "images/kep4.jpg, images/kep5.jpg"],
    title: ["Title for the first picture", "Title for the second picture", "Title for the third picture", "Title for the fourt picture", "Title for the fifth picture"],
    description: ["Title for the first picture", "Title for the second picture", "Title for the third picture", "Title for the fourt picture", "Title for the fifth picture"]
};


let current = 0;
$('#kep').attr('src', imagesData.photo[0]);

$('#title').append(imagesData.title[0]);
$('#motivacio').append(imagesData.description[0]);
// $('#photo').attr('src', imagesData[currentPhoto].photo);

  $('.thumbnails').on('click', 'img', function() {
     current = (this.id)-1;
  
    
    $('#title').html(imagesData.title[current]);
    $('#motivacio').html(imagesData.description[current]); 
    imagesData.photo[current] = "images/kep"+this.id +".jpg"
  //get the id of the clicked icon
  $('#kep').attr('src', imagesData.photo[current]);

$('.thumbnails img').css('border','none');
$('#' + this.id).css('border','solid green 1px');

  });

  $('.right').on('click', '#rightclick', function() {
    
    if (current > 4){ current = 1;}
    else{ current = current +1;}
   $('#title').html(imagesData.title[current-1]);
   $('#motivacio').html(imagesData.description[current-1]); 
   imagesData.photo[current] = "images/kep"+current+".jpg"
  
$('#kep').attr('src', imagesData.photo[current]);

$('.thumbnails img').css('border','none');
$('#' + current).css('border','solid green 1px');
 });


 $('.left').on('click', '#leftclick', function() {
    
    if (current < 2){ current = 5;}
    else{ current = current -1;}
   $('#title').html(imagesData.title[current-1]);
   $('#motivacio').html(imagesData.description[current-1]); 
   imagesData.photo[current] = "images/kep"+current+".jpg"
  $('#kep').attr('src', imagesData.photo[current]);
 

$('.thumbnails img').css('border','none');
$('#' + current).css('border','solid green 1px');

 });
 



