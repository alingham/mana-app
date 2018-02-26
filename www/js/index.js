if (ons.platform.isIPhoneX()) { // Utility function
  // Add empty attribute to the <html> element
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
}
if (ons.platform.isIPhoneX()) { // Utility function
  // Add empty attribute to the <html> element
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
}

//Search Function
var search = function(input) {
	$("#results").html('');
		$("#progress").removeClass("hidden").addClass("show");
		setTimeout(function(){ 
		
 //
// getting the value that user typed
        var searchString    = input.value;
        // forming the queryString
        var data            = 'search='+ searchString;
         
        // if searchString is not empty
        if(searchString) {
            // ajax call
            $.ajax({
                type: "POST",
                url: "http://www.arakura.school.nz/pb4l/db/search.php",
                data: data,
                beforeSend: function(html) { // this happens before actual call
                    $("#results").html(''); 
                    $("#searchresults").show();
                    $(".word").html(searchString);
               },
               success: function(html){ // this happens after we get results
                    $("#results").show();
                    $("#results").append(html);
                    
              }
            });    
        }
        $("#progress").removeClass("show").addClass("hidden");
        return false;
  }, 1200);
};

// Load External Links
function inAppBrowser(link) {
   window.open(link, '_system');
 }



// Open Menu Pages
window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};

// Value AND Setting Selection
function vs(event) {
		$("#results").html('');
		$("#progress").removeClass("hidden").addClass("show");
		setTimeout(function(){ 
		
 		var value = document.getElementById('choose-value').value;
 		var setting = document.getElementById('choose-setting').value;
  // forming the queryString
        var data            = 'setting='+ setting +'&value=' + value;
         
        // if searchString is not empty
        if(event) {
            // ajax call
            $.ajax({
                type: "POST",
                url: "http://www.arakura.school.nz/pb4l/db/vs.php",
                data: data,
                beforeSend: function(html) { // this happens before actual call
                    $("#results").html(''); 
                    $("#searchresults").show();
                    //$(".value").html(value);
               },
               success: function(html){ // this happens after we get results
                    $("#results").show();
                    $("#results").append(html);
                    
              }
            });    
        }
        $("#progress").removeClass("show").addClass("hidden");
        return false;
 	}, 1200);
 	
}
//Scroll to Top - http://www.tricedesigns.com/2013/10/08/status-tapscroll-to-top-in-phonegap-apps-on-ios/
    window.addEventListener("statusTap", function () {
    	//ons.notification.alert("status tap");
    	
    });