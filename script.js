let no=1;
//this variable will store the list item number
myFunction = () => {
       
let listaelem =  $('#input').val();
//get the input from the box
if ( listaelem.trim() !== '') 
//do not get it if empty or just spaces
{
$('.rovidkek').append('<p class="'+no+'">'+listaelem+' <i class="fas fa-check-circle pipa" id="'+no+'"></i> <i class="fas fa-trash kuka" id="'+no+'"></i></p>');
//add the input and the icons, also give them numbers to the class and id respectively

$('form #input').val('');
$('form #input').focus();

$( "#text-val" ).val( function( index, val ) {
  return val + listaelem + ";";
  //add all values to the textbox to print later in a csv
});


//remove the value after sumbit from the input and focus the cursor back there
no = no + 1;
//new number for he next input

}
  }

  $('.rovidkek').on('click', '.kuka', function() {
    //if you click on any trash icons
  var szam = this.id;
  //get the id of the clicked icon
  $('p.'+ szam).remove();
  // remove the paragraph next to the clicked icon   
  });

    
  $('.rovidkek').on('click', '.pipa', function() {
  
  var szam = this.id;
 


  // $('p.'+ szam).css('text-decoration','none');
  // $('i#'+ szam).css('color','#BABABA');
   // $('p.'+ szam).css('text-decoration','line-through');
  // $('i#'+ szam).css('color','green');
  $('i#'+ szam).toggleClass('green');
  $('p.'+ szam).toggleClass('checked');

  });

  // kod a lista mentesere
  function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
document.getElementById("dwn-btn").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    var text = document.getElementById("text-val").value;
    var filename = "todo.csv";
    
    download(filename, text);
}, false);