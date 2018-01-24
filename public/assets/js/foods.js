// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour").on("click", function(event) {
      console.log("Devoured!");
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
  
      var newDevouredState = {
        devoured: newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/foods/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      console.log("Form Created");
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newFood = {
        food_name: $("#inputFoodName").val().trim(),
        allergens: $("#inputAllergens").val().trim()
        // $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/foods", {
        type: "POST",
        data: newFood
      }).then(
        function() {
          console.log("created new food");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete").on("click", function(event) {
      console.log("Deleted!");
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/foods/" + id, {
        type: "DELETE",
      }).then(
        function() {
          console.log("deleted food", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  