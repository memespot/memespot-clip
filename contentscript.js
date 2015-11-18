var LEAST_IMAGE_SIZE = {
    WIDTH: 100,
    HEIGHT: 100
};

function getImagesOfPage(){
  return Array.prototype.slice.call(document.images);
}

function setupClippingEvent( images ){
  images.forEach( function(image){
    if( checkImageSize( image ) ){
      addEventShowClippingButton( image );
    }
  });
}

function checkImageSize( image ){
  var image_width = Number(image.width);
  var image_height = Number(image.height);
  var min_width = Number(LEAST_IMAGE_SIZE.WIDTH);
  var min_height = Number(LEAST_IMAGE_SIZE.HEIGHT);

  if( min_width > 0 && image_width < min_width ) return false;
  if( min_height > 0 && image_height < min_height ) return false;

  return true;
}

function addEventShowClippingButton( image ){
  image.addEventListener("mouseover", function(){
    alert(this);
    // chrome.extension.sendRequest( {
    //   type : "is_bookmark",
    //   url : image.src
    // });

    // chrome.extension.onRequest.addListener( function(request, sender, sendResponse){
    //   if( request.type === "is_bookmark_callback" ){
    //     var json = eval("(" + request.response.responseText + ")");
    //     pickingButton = createPickingButton( image, json.is_bookmark );
    //     image.parentNode.insertBefore( pickingButton );
    //   }
    // });

  });
}

(function(){
  var images = getImagesOfPage();
  setupClippingEvent( images );
})();
