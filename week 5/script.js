// JavaScript for pop-up message upon submitting recommendation
function showConfirmationMessage() {
    alert("Recommendation submitted successfully!");
}

// JavaScript for adding new recommendations
function addRecommendation() {
    const newRecommendation = document.getElementById('new-recommendation').value;
    if (newRecommendation.trim() !== '') {
        const recommendationList = document.getElementById('recommendation-list');
        const listItem = document.createElement('li');
        listItem.textContent = newRecommendation;
        recommendationList.appendChild(listItem);
    }
}

// Event listener for submitting recommendation
document.getElementById('recommendation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    addRecommendation(); // Add new recommendation
    showConfirmationMessage(); // Show confirmation message
});
