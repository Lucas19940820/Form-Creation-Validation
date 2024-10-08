// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Function to fetch user data from the public API
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';  // Correct API URL
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch the user data
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const users = await response.json();

            // Clear the "Loading" text
            dataContainer.innerHTML = '';

            // Create and append user list
            const userList = document.createElement('ul');
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.name;
                userList.appendChild(li);
            });
            dataContainer.appendChild(userList);

        } catch (error) {
            // Handle errors
            dataContainer.textContent = 'Failed to load user data. Error: ' + error.message;
        }
    }

    // Call the function to fetch user data once the DOM is fully loaded
    fetchUserData();
});
