document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://api.github.com/users';
    const dataContainer = document.getElementById('api-data');

    async function fetchUserData() {
        try {
            const response = await fetch(apiUrl);
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            const userList = document.createElement('ul');
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            dataContainer.appendChild(userList);
        } catch (error) {
            dataContainer.textContent = 'Failed to load user data.';
        }
    }

    fetchUserData();
});
