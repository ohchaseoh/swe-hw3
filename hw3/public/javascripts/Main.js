
// The same code from hw#2 in a .js file
$(document).ready(function(){
    $("#orderSent").hide();
    $("#orderFinal").hide();
    $("#orderFinalNotes").hide();
  
    $("#drop-button").click(function() {
      monthList();
    });
  
    $("#orderButton").click(function() {
      orderPressed();
    });
  });
  
  function monthList() {
    $("#drop-button").val($("#dropdown-months").val());
  }
  
  function orderPressed() {
  
    // val: Notes
    var notesP = $("#notesArea").val();
    var word = "vegan";
    
    if (notesP.indexOf(word) !== -1) {
      alert("Warning: Cheesecake contains dairy products!");
  
    } else {
  
      // val: Quantity 	(1-12)
      var quantityP = $("#quantity").val();
  
      // val: Flavor 		(Plain, Cherry, Chocolate)
      var flavorP = $("#flavor").val();
  
      $("#orderFinal").append

    }
}