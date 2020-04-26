 var folder = "images/";
 var kepek = [];
 var number = 0;
 let current = 0;
 var thumb = 1;
 var kep ="";

 
$.ajax({
     url : folder,
    success: function (data) {
    
        $(data).find("a").attr("href", function (i, val) {
            // if( val.match(/\.(jpe?g|png|gif)$/) ) { 
             
              if( val.match(/\.(jpg|JPG|jpeg|JPG|PNG|png)$/) ) { 
                       
          number = number + 1;
          kepek.push(val); 
 
         
            } 
         
            
        });


 
        $('#kep').attr('src', kepek[0]);

// $('.thumbnails').append('<img id="ujkep" src="'+kepek[4]+'" height="60px"></img>');
// $('.ketto').append(`<p>Username: ${$('#name').val()}</p>`);
        $('#1').attr('src', kepek[0]);
        $('#2').attr('src', kepek[1]);
        $('#3').attr('src', kepek[2]);
        $('#4').attr('src', kepek[3]);
        $('#5').attr('src', kepek[4]);
       
          
 

        // $('#title').append(imagesData.title[0]);
        // $('#motivacio').append(imagesData.description[0]);


     
        $('.right').on('click', '#rightclick', function() {
    
          if (current > number-2){ current = 0;}
          else{ current = current +1;}
        //  $('#title').html(imagesData.title[current-1]);
        //  $('#motivacio').html(imagesData.description[current-1]); 
   
            
      $('#kep').attr('src', kepek[current]);
     
      $('#1').attr('src', kepek[current]);
        $('#2').attr('src', kepek[current+1]);
        $('#3').attr('src', kepek[current+2]);
        $('#4').attr('src', kepek[current+3]);
        $('#5').attr('src', kepek[current+4]);
     
      $('.thumbnails img').css('border','none');
     
      
    for ( thumb = thumb; thumb > 5;  thumb = thumb-5) {   }
  
      $('#' + thumb).css('border','solid green 1px');
      
       });

       $('.left').on('click', '#leftclick', function() {
  
        if (current < 1){ current = number-1;}
        else{ current = current -1;}
     
      //  $('#title').html(imagesData.title[current-1]);
      //  $('#motivacio').html(imagesData.description[current-1]); 
     
     $('#kep').attr('src', kepek[current]);
     $('#1').attr('src', kepek[current]);
     $('#2').attr('src', kepek[current+1]);
     $('#3').attr('src', kepek[current+2]);
     $('#4').attr('src', kepek[current+3]);
     $('#5').attr('src', kepek[current+4]);

    for ( thumb = thumb; thumb > 5;  thumb = thumb-5) {   }
    $('.thumbnails img').css('border','none');
    $('#' + current).css('border','solid green 1px');
    

    
     });
     
   
    
   
    }

});


  $('.thumbnails').on('click', 'img', function() {
    //  current = (this.id)-1;
  
    
    // $('#title').html(imagesData.title[current]);
    // $('#motivacio').html(imagesData.description[current]); 
    // imagesData.photo[current] = "images/kep"+this.id +".jpg"
  //get the id of the clicked icon
  // $('#kep').attr('src', imagesData.photo[current]);
  $('#kep').attr('src', kepek[current]);
$('.thumbnails img').css('border','none');
$('#' + this.id).css('border','solid green 1px');

  });


  