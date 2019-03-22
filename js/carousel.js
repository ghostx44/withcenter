var slider_content = document.getElementById('imgbox');

var image = ['a', 'b', 'c', 'd'];

var i = image.length;

function nxtImage(){
    if (i<image.length) {
        i = i + 1;
    }
    else {
        i = 1;
    }
    
    slider_content.innerHTML = '<img class="image-placeholder" src="img/' + image[i-1] + '.jpg">';
    
    //slider_content.innerHTML = "<img class=\"image-placeholder\" src=\"img/" + image[i-1] + ".jpg>";
    //slider_content.innerHTML = "<img class=\"image-placeholder\" src=\"img/b.jpg>";
    //<img class="image-placeholder" src="img/a.jpg">
}

function prvImage(){

    if (i<image.length+1 && i>1) {
        i = i-1;
    }else{
        i = image.length;
    }
      slider_content.innerHTML = '<img class="image-placeholder" src="img/' + image[i-1] + '.jpg">';

}

//setInterval(nxtImage, 2000);

