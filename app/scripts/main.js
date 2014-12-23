$.ajax ({
  type: 'GET',
  url: 'scripts/vendor/preload/filesmanifest.js',
  dataType: 'json',
  success: function(response, textStatus, jqXHR) {
      // delay each image and append the timestamp to prevent caching 
      var loader = new PxLoader(); 
      for(var x in response.filesManifest.files){
          // this time we'll create a PxLoaderImage instance instead of just 
          // giving the loader the image url 
          var pxImage = new PxLoaderImage(response.filesManifest.files[x].src); 
       
          // we can add our own properties for later use 
          pxImage.imageNumber = x + 1; 
          loader.add(pxImage);
      }
      // callback that runs every time an image loads 
      loader.addProgressListener(function(e) { 
          // log which image completed 
          // console.log('Image ' + e.resource.getName() + ' #' + e.resource.imageNumber + ' Loaded\r' + ' / ' + e.completedCount + ' / ' + e.totalCount); 
      }); 
      // log when all resources have completed 
      loader.addCompletionListener(function(e) { 
          $('.preload').hide();
          $('.animations').show();
      }); 
      loader.start(); 
  }
});

var GetURLParameter = function(sParam){
	return decodeURI(
		(RegExp(sParam + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
	);
};

$('.welcome h3').text(GetURLParameter('name'));