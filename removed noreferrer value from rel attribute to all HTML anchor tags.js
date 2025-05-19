document.addEventListener("DOMContentLoaded", function () {
   var anchors = document.querySelectorAll('a[rel="noopener"], a[rel="noreferrer"], a[rel="noreferrer noopener"]');

   anchors.forEach(function (anchor) {
      // Get the current 'rel' attribute
      var rel = anchor.getAttribute("rel");

      // Remove 'noreferrer' from the 'rel' attribute
      if (rel.includes("noreferrer")) {
         rel = rel.replace("noreferrer", "").trim(); // Remove 'noreferrer' and trim any extra spaces
         anchor.setAttribute("rel", rel); // Update the 'rel' attribute
      }
   });
});
