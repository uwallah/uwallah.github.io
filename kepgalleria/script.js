 var folder = "https://welwerin.github.io/kepgalleria/images/";
 var kepek = [];
 var filename =[];
 var img = [];
 var number = 0;
 let current = 0;
 var thumb = 1;
 
$.ajax({
  async: false, 
    url : folder,
    success: function (data) {
    
        $(data).find("a").attr("href", function (i, val) {
            // if( val.match(/\.(jpe?g|png|gif)$/) ) { 
             
              if( val.match(/\.(jpg|JPG|jpeg|JPG|PNG|png)$/) ) { 
                       
          number = number + 1;
          kepek.push(val); 
          // $('.container').append(`<img src='${kepek[number]}' id='kep${number}' height="60px"></img>`);
         
         filename.push(val.slice(8));

          // $('.container').append(`<img src='${val}' id='kep${number}' style="display:none"></img>`);
          $('.thumbnails').append(`<img src='${val}' id='kep${number}' width="120px" height="80px"></img>`);
          $('.szoveg').append(`<pre class="photoinfo" id="photoinfo${number}">Time:<span id="makeAndModel${number}"></span> </span></pre>  `); 
          $('.szoveg').append(`<pre class="photoinfo" id="photoloc${number}"><span id="map-link${number}"></span></pre>  `); 
          // $('.szoveg').append(`<pre class="photoinfo" id="photoinfo${filename}">Make and model: <span id="makeAndModel${number}"></span></pre>  `);     
          // img[number] = document.getElementById('kep'+number);
         
          window.onload=getExif;
          function getExif() {
            var exifnum;
            var hanyszor2 = 1;   
            var hanyszor = 1;   
            for (exifnum = 1; exifnum < number+1; exifnum++) {
                     
             img[hanyszor] = document.getElementById('kep'+hanyszor);
            
          EXIF.getData( img[hanyszor] , function() {
            
            make = EXIF.getTag(this, "DateTimeOriginal");
          
          var gps = EXIF.getTag(this, "GPSLongitudeRef");
          
       
            makeAndModel = document.getElementById("makeAndModel"+hanyszor2);
            makeAndModel.innerHTML = `${make}`;
          var  model = EXIF.getTag(this, "ImageDescription");
// Calculate latitude decimal
if (gps !== undefined) {
myData = this;
var latDegree = myData.exifdata.GPSLatitude[0].numerator;
var latMinute = myData.exifdata.GPSLatitude[1].numerator;
var latSecond = myData.exifdata.GPSLatitude[2].numerator;
var latDirection = myData.exifdata.GPSLatitudeRef;

var latFinal = ConvertDMSToDD(latDegree, latMinute, latSecond, latDirection);
// Calculate longitude decimal
var lonDegree = myData.exifdata.GPSLongitude[0].numerator;
var lonMinute = myData.exifdata.GPSLongitude[1].numerator;
var lonSecond = myData.exifdata.GPSLongitude[2].numerator;
var lonDirection = myData.exifdata.GPSLongitudeRef;

var lonFinal = ConvertDMSToDD(lonDegree, lonMinute, lonSecond, lonDirection);
// Create Google Maps link for the location
console.log(hanyszor2); 
document.getElementById('map-link'+hanyszor2).innerHTML = '<a href="http://www.google.com/maps/place/'+latFinal+','+lonFinal+'" target="_blank">Map to location</a>';
}
// else {
//   if (model  === '' ){
//     document.getElementById('map-link'+hanyszor2).innerHTML = model;
// }
// else { document.getElementById('map-link'+hanyszor2).innerHTML = filename[hanyszor2];}

// }
//   model = EXIF.getTag(this, "ImageDescription");
//   console.log(model);
//   if (model  === '' || model==='undefined' ){
   

//   document.getElementById('map-link'+hanyszor2).innerHTML = model;

//   }
//   else{ 
  
//     document.getElementById('map-link'+hanyszor2).innerHTML = filename[hanyszor2];}
// }

   hanyszor2 = hanyszor2 +1;
  
        });
      
          hanyszor = hanyszor +1;
         
            }
      }

         } 
   });

        $('#kep').attr('src', kepek[current]);
  
        $('.photoinfo').css('display','none');
        $('#photoinfo1').css('display','block');
        $('#photoloc1').css('display','block');
        // $('#title').append(imagesData.title[0]);
        // $('#motivacio').append(imagesData.description[0]);
        const interval = setInterval(function() {
         // ide jon majd a rightclick tartalma.          
        }, 10000);


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
      $('.photoinfo').css('display','none');
    var alairas = current+1;
 
      $('#photoinfo' + alairas).css('display','block');
      $('#photoloc' + alairas).css('display','block');
    // for ( thumb = thumb; thumb > 5;  thumb = thumb-5) {   }
  
      $('#' + thumb).css('border','solid green 1px');
      
       });

       $('.left').on('click', '#leftclick', function() {
  
        if (current < 1){ current = number-1;}
        else{ current = current -1;}
     
          
    
 
    

     $('#kep').attr('src', kepek[current]);
     


    // for ( thumb = thumb; thumb > 5;  thumb = thumb-5) {   }
    $('.thumbnails img').css('border','none');
    $('#' + current).css('border','solid green 1px');
    
    $('.photoinfo').css('display','none');
    var alairas = current+1;
  
    $('#photoinfo' + alairas).css('display','block');
    $('#photoloc' + alairas).css('display','block');
     });
     
   
  $('.thumbnails').on('click', 'img', function() {
    current = this.id.slice(3)-1;

   
   // $('#title').html(imagesData.title[current]);
   // $('#motivacio').html(imagesData.description[current]); 
  // kepek[current] = "images/kep"+this.id +".jpg"
 //get the id of the clicked icon
 // $('#kep').attr('src', imagesData.photo[current]);
 $('#kep').attr('src', kepek[current]);
$('.thumbnails img').css('border','none');
$('#' + this.id).css('border','solid green 1px');
$('.photoinfo').css('display','none');
var alairas = current+1;

$('#photoinfo' + alairas).css('display','block');
$('#photoloc' + alairas).css('display','block');

 });
    
   
    }

});



        
  function ConvertDMSToDD(degrees, minutes, seconds, direction) {
    
    var dd = degrees + (minutes/60) + (seconds/3600);
    
    if (direction == "S" || direction == "W") {
        dd = dd * -1; 
    }
    
    return dd;
}