window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('#kep');  // $('img')[0]
          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
          img.onload = imageIsLoaded;
      }
  });
});

function imageIsLoaded() { 
 // alert(this.src);  // blob url
  // update width and height ...
  var annotation2 = new easyannotation.AnnotatorContainer(document.querySelector('#kep'), {
    drawStyle: {
      color: '#FFFFFF', // default line color
      width: 3
    }
    
  
  });
  
  annotation2.show(function(res2){
    document.querySelector('#save').src = res2;
  });
  

}

//let imagesData = {

 //   photo:  ["images/kep1.jpg", "images/kep2.jpg", "images/kep3.jpg", "images/kep4.jpg, images/kep5.jpg"],
 //   title: ["Title for the first picture", "Title for the second picture", "Title for the third picture", "Title for the fourt picture", "Title for the fifth picture"],
 //   description: ["Title for the first picture", "Title for the second picture", "Title for the third picture", "Title for the fourt picture", "Title for the fifth picture"]
// };


// let current = 0;
// $('#kep').attr('src', imagesData.photo[0]);

// $('#title').append(imagesData.title[0]);
// $('#motivacio').append(imagesData.description[0]);



//var annotation2 = new easyannotation.AnnotatorContainer(document.getElementById('kep'), {
 //   hideElement: false 
 // });
//annotation2.show(function(res){
 //   console.log(res);
//}, easyannotation.ExportType.JSON);
//annotation2.loadJSON('{"v":"1.0","data":[{"xtype":"blur","x":3.75,"y":153.5,"w":108.5,"h":86,"dw":2,"dt":0,"dc":"#000","sa":0,"ea":0,"ft":0,"fc":"#000","b":"2"},{"xtype":"callout","x":0,"y":0,"w":112.5,"h":84.375,"dw":1,"dt":0,"dc":"#000","sa":0,"ea":0,"ft":0,"fc":"#21f159","op":77,"dx":286.75,"dy":14.8125,"r":112.5,"b":54.84375,"cx":12.678749999999999,"cy":82.0546875,"d":3},{"xtype":"text","x":299,"y":18,"dw":2,"dt":0,"dc":"#000","sa":0,"ea":0,"ft":0,"fc":"#0163da","op":100,"t":"Hallstatt","fn":"Freestyle Script","fs":22,"fi":0,"fb":0},{"dw":2,"dt":0,"dc":"#ffc107","sa":0,"ea":0,"ft":0,"fc":"#C1DDFF","op":100,"xtype":"freeDraw","points":[{"x":"298.9","y":"198.0"},{"x":"299.9","y":"198.0"},{"x":"300.9","y":"196.8"},{"x":"301.5","y":"196.3"},{"x":"302.9","y":"195.2"},{"x":"304.0","y":"193.7"},{"x":"305.0","y":"192.0"},{"x":"306.2","y":"190.5"},{"x":"307.4","y":"189.3"},{"x":"308.2","y":"188.3"},{"x":"309.0","y":"188.2"},{"x":"309.9","y":"188.5"},{"x":"310.7","y":"189.3"},{"x":"311.2","y":"190.7"},{"x":"311.5","y":"192.2"},{"x":"311.9","y":"193.7"},{"x":"311.9","y":"195.0"},{"x":"311.9","y":"196.3"},{"x":"311.9","y":"197.5"},{"x":"311.9","y":"198.5"},{"x":"311.9","y":"199.8"},{"x":"311.9","y":"201.5"},{"x":"311.5","y":"203.3"},{"x":"311.2","y":"205.3"},{"x":"310.9","y":"207.3"},{"x":"310.2","y":"209.5"},{"x":"309.4","y":"211.5"},{"x":"308.2","y":"213.2"},{"x":"307.0","y":"214.7"},{"x":"305.9","y":"216.0"},{"x":"304.2","y":"217.5"},{"x":"302.5","y":"218.8"},{"x":"300.7","y":"220.2"},{"x":"298.9","y":"221.7"},{"x":"297.4","y":"223.3"},{"x":"295.5","y":"225.2"},{"x":"294.0","y":"226.7"},{"x":"292.5","y":"228.0"},{"x":"291.4","y":"228.8"},{"x":"290.5","y":"229.0"},{"x":"289.9","y":"228.7"},{"x":"289.9","y":"228.0"},{"x":"290.2","y":"227.5"},{"x":"291.2","y":"227.2"},{"x":"292.7","y":"227.2"},{"x":"294.4","y":"227.5"},{"x":"296.4","y":"228.3"},{"x":"298.2","y":"229.2"},{"x":"300.2","y":"230.0"},{"x":"302.0","y":"230.7"},{"x":"303.5","y":"231.2"},{"x":"305.2","y":"231.7"},{"x":"306.7","y":"231.8"},{"x":"308.4","y":"232.0"},{"x":"310.2","y":"231.8"},{"x":"312.0","y":"231.7"},{"x":"313.7","y":"231.5"},{"x":"NaN","y":"NaN"},{"x":"337.9","y":"191.0"},{"x":"335.5","y":"192.7"},{"x":"333.3","y":"194.6"},{"x":"332.4","y":"195.5"},{"x":"330.7","y":"197.2"},{"x":"329.4","y":"198.8"},{"x":"328.0","y":"200.7"},{"x":"327.4","y":"202.5"},{"x":"326.4","y":"203.8"},{"x":"325.7","y":"205.2"},{"x":"324.9","y":"206.5"},{"x":"324.2","y":"207.7"},{"x":"323.7","y":"209.0"},{"x":"323.4","y":"210.3"},{"x":"323.7","y":"211.8"},{"x":"324.0","y":"213.3"},{"x":"324.9","y":"215.0"},{"x":"325.9","y":"216.5"},{"x":"327.0","y":"217.8"},{"x":"328.2","y":"218.8"},{"x":"329.0","y":"219.8"},{"x":"330.0","y":"220.8"},{"x":"330.7","y":"221.7"},{"x":"331.4","y":"222.5"},{"x":"332.0","y":"223.2"},{"x":"332.7","y":"223.8"},{"x":"333.5","y":"224.3"},{"x":"334.9","y":"224.7"},{"x":"336.9","y":"224.7"},{"x":"338.9","y":"224.5"},{"x":"341.0","y":"224.2"},{"x":"343.4","y":"223.7"},{"x":"345.5","y":"223.0"},{"x":"347.0","y":"222.2"},{"x":"348.0","y":"221.2"},{"x":"348.9","y":"220.2"},{"x":"349.4","y":"219.0"},{"x":"349.5","y":"217.5"},{"x":"349.7","y":"215.7"},{"x":"350.2","y":"213.8"},{"x":"350.5","y":"212.0"},{"x":"350.9","y":"210.0"},{"x":"351.2","y":"207.8"},{"x":"351.5","y":"206.0"},{"x":"351.9","y":"204.5"},{"x":"351.9","y":"202.8"},{"x":"351.9","y":"201.3"},{"x":"351.9","y":"200.0"},{"x":"351.7","y":"198.8"},{"x":"351.4","y":"197.7"},{"x":"350.9","y":"196.7"},{"x":"350.2","y":"196.0"},{"x":"349.4","y":"195.5"},{"x":"348.2","y":"195.2"},{"x":"346.9","y":"194.7"},{"x":"345.4","y":"194.0"},{"x":"343.9","y":"193.3"},{"x":"342.0","y":"192.5"},{"x":"340.2","y":"191.7"},{"x":"338.5","y":"190.8"},{"x":"336.9","y":"190.5"},{"x":"335.4","y":"190.5"},{"x":"333.9","y":"190.5"},{"x":"332.7","y":"190.7"},{"x":"331.7","y":"190.8"},{"x":"NaN","y":"NaN"},{"x":"359.9","y":"201.0"},{"x":"360.9","y":"201.0"},{"x":"362.1","y":"201.0"},{"x":"362.9","y":"201.0"},{"x":"364.4","y":"201.0"},{"x":"365.9","y":"201.0"},{"x":"367.4","y":"201.0"},{"x":"369.2","y":"200.8"},{"x":"371.0","y":"200.7"},{"x":"372.5","y":"200.3"},{"x":"373.7","y":"199.8"},{"x":"374.9","y":"199.0"},{"x":"376.0","y":"198.2"},{"x":"376.7","y":"197.3"},{"x":"377.0","y":"196.3"},{"x":"377.4","y":"195.3"},{"x":"377.7","y":"194.2"},{"x":"378.0","y":"193.3"},{"x":"378.2","y":"192.2"},{"x":"378.4","y":"191.3"},{"x":"378.5","y":"191.0"},{"x":"378.5","y":"192.0"},{"x":"378.5","y":"194.0"},{"x":"378.4","y":"196.3"},{"x":"378.0","y":"199.2"},{"x":"377.4","y":"202.3"},{"x":"376.5","y":"205.5"},{"x":"375.7","y":"207.8"},{"x":"374.7","y":"209.8"},{"x":"373.5","y":"211.7"},{"x":"372.4","y":"213.8"},{"x":"371.2","y":"215.7"},{"x":"370.0","y":"217.3"},{"x":"368.7","y":"219.2"},{"x":"367.5","y":"220.8"},{"x":"366.4","y":"222.3"},{"x":"365.4","y":"223.3"},{"x":"NaN","y":"NaN"},{"x":"392.9","y":"192.0"},{"x":"393.9","y":"193.3"},{"x":"394.1","y":"196.2"},{"x":"394.0","y":"198.2"},{"x":"394.0","y":"201.2"},{"x":"393.9","y":"204.3"},{"x":"393.5","y":"207.3"},{"x":"393.2","y":"209.8"},{"x":"393.2","y":"211.8"},{"x":"393.5","y":"212.8"},{"x":"394.2","y":"213.5"},{"x":"395.0","y":"213.8"},{"x":"396.4","y":"214.0"},{"x":"397.9","y":"214.0"},{"x":"399.4","y":"214.0"},{"x":"400.9","y":"214.2"},{"x":"402.5","y":"214.3"},{"x":"404.2","y":"214.5"},{"x":"405.5","y":"214.7"},{"x":"406.9","y":"214.5"},{"x":"408.2","y":"214.0"},{"x":"409.4","y":"213.2"},{"x":"410.2","y":"212.0"},{"x":"410.9","y":"210.5"},{"x":"411.4","y":"208.8"},{"x":"411.7","y":"207.2"},{"x":"411.9","y":"205.7"},{"x":"411.9","y":"204.0"},{"x":"411.9","y":"202.5"},{"x":"412.0","y":"201.2"},{"x":"412.2","y":"199.8"},{"x":"412.4","y":"198.7"},{"x":"412.5","y":"197.3"},{"x":"412.5","y":"196.3"},{"x":"412.2","y":"195.2"},{"x":"411.2","y":"193.8"},{"x":"409.9","y":"192.3"},{"x":"408.2","y":"190.8"},{"x":"406.2","y":"189.3"},{"x":"404.2","y":"187.8"},{"x":"402.4","y":"186.7"},{"x":"400.7","y":"185.7"},{"x":"399.0","y":"185.0"},{"x":"397.4","y":"184.5"},{"x":"395.9","y":"184.5"},{"x":"394.5","y":"185.0"},{"x":"393.0","y":"185.8"},{"x":"391.7","y":"187.2"},{"x":"390.5","y":"188.5"},{"x":"389.7","y":"190.0"},{"x":"389.0","y":"191.7"},{"x":"388.4","y":"193.0"},{"x":"388.0","y":"194.3"},{"x":"387.9","y":"195.7"},{"x":"387.9","y":"197.2"},{"x":"387.9","y":"198.7"},{"x":"387.9","y":"200.2"},{"x":"388.0","y":"201.5"},{"x":"388.4","y":"202.5"},{"x":"388.9","y":"203.2"},{"x":"389.5","y":"203.8"},{"x":"390.2","y":"204.3"},{"x":"NaN","y":"NaN"},{"x":"410.9","y":"203.0"},{"x":"410.9","y":"206.3"},{"x":"410.5","y":"209.6"},{"x":"409.9","y":"211.3"},{"x":"409.2","y":"214.3"},{"x":"408.4","y":"217.2"},{"x":"407.4","y":"219.5"},{"x":"406.4","y":"221.7"},{"x":"405.4","y":"223.2"},{"x":"404.5","y":"224.2"},{"x":"403.5","y":"225.3"},{"x":"402.7","y":"226.3"},{"x":"401.9","y":"227.2"},{"x":"400.9","y":"227.8"},{"x":"400.0","y":"228.3"},{"x":"399.0","y":"228.8"},{"x":"398.0","y":"229.0"},{"x":"396.7","y":"229.0"},{"x":"395.2","y":"229.0"},{"x":"393.5","y":"229.0"},{"x":"391.9","y":"229.0"},{"x":"390.4","y":"229.0"},{"x":"388.7","y":"229.0"},{"x":"387.2","y":"229.0"},{"x":"385.9","y":"229.0"},{"x":"384.7","y":"229.0"},{"x":"383.7","y":"229.0"},{"x":"NaN","y":"NaN"}]}]}');
/*
new easyannotation.AnnotatorContainer(document.querySelector('#kep'), {
  drawStyle: {
      color: '#FFFFFF', // default line color
      endArrow: ArrowTypeOPEN_ARROW,
      width: 3
},
toolbarItems: [
  {
      //clear button to delete selected or all elements
      itemId: 'delete',
      iconSVG: EraseIcon,
      title: 'Delete selected or all elements'
  },
  new TextToolbarItem(),     //text element
  new LineToolbarItem(),     //line element
  new ArrowToolbarItem(),    //arrow element
  new EllipseToolbarItem(),   //ellipse/circle element
   new BlurToolbarItem(),      //bluring element to blur parts of the image
  new FreeDrawToolbarItem(me.config), //free draw element
  {
      //save element
      itemId: 'save',
      iconSVG: SaveIcon,
      title: 'Save changes and close annotator'
  }]

})
    show(function(res){
    //  document.querySelector('#sample4Res').src = res;
    });
*/
// $('#photo').attr('src', imagesData[currentPhoto].photo);

//   $('.thumbnails').on('click', 'img', function() {
//      current = (this.id)-1;
  
    
//     $('#title').html(imagesData.title[current]);
//     $('#motivacio').html(imagesData.description[current]); 
//     imagesData.photo[current] = "images/kep"+this.id +".jpg"
//   //get the id of the clicked icon
//   $('#kep').attr('src', imagesData.photo[current]);

// $('.thumbnails img').css('border','none');
// $('#' + this.id).css('border','solid green 1px');

//   });

//   $('.right').on('click', '#rightclick', function() {
    
//     if (current > 4){ current = 1;}
//     else{ current = current +1;}
//    $('#title').html(imagesData.title[current-1]);
//    $('#motivacio').html(imagesData.description[current-1]); 
//    imagesData.photo[current] = "images/kep"+current+".jpg"
  
// $('#kep').attr('src', imagesData.photo[current]);

// $('.thumbnails img').css('border','none');
// $('#' + current).css('border','solid green 1px');
//  });


//  $('.left').on('click', '#leftclick', function() {
    
//     if (current < 2){ current = 5;}
//     else{ current = current -1;}
//    $('#title').html(imagesData.title[current-1]);
//    $('#motivacio').html(imagesData.description[current-1]); 
//    imagesData.photo[current] = "images/kep"+current+".jpg"
//   $('#kep').attr('src', imagesData.photo[current]);
 

// $('.thumbnails img').css('border','none');
// $('#' + current).css('border','solid green 1px');

//  });
 



