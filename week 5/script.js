document.getElementById('recommendation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Show the popup
    document.getElementById('popup').style.display = 'block';
  });

  document.getElementById('ok-button').addEventListener('click', function() {
    // Hide the popup
    document.getElementById('popup').style.display = 'none';
  });