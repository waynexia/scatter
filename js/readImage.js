function newImage(image){
    var file = image.files[0];

    //alert(file.size);

    var reader = new FileReader();

    reader.onload = function(e){
        var img = document.getElementById("image");
        img.src = e.target.result;
    }

    reader.readAsDataURL(file);

    //reader.onloadend = load();
}