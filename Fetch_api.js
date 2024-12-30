

        const apiUrl = 'https://jsonplaceholder.typicode.com/users';


        fetch(apiUrl)
            .then(response => response.json()) // Parse JSON response
            .then(data => {
                // Get the table body element
                const tableBody = document.querySelector('#data-table tbody');
                
                // Loop through each user in the fetched data
                data.forEach(user => {
                    // Create a new row
                    const row = document.createElement('tr');
                    
                    // Create table cells for each property
                    const cellId = document.createElement('td');
                    cellId.textContent = user.id;
                    
                    const cellName = document.createElement('td');
                    cellName.textContent = user.name;
                    
                    const cellUsername = document.createElement('td');
                    cellUsername.textContent = user.username;
                    
                    const cellEmail = document.createElement('td');
                    cellEmail.textContent = user.email;
                    
                    // Append cells to the row
                    row.appendChild(cellId);
                    row.appendChild(cellName);
                    row.appendChild(cellUsername);
                    row.appendChild(cellEmail);
                    
                    // Append row to the table body
                    tableBody.appendChild(row);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    