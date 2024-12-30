// XMLHttpRequest object create karte hain
var xhr = new XMLHttpRequest();

// Request ko open karte hain (GET method aur URL specify karte hain)
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

// Request ko send karte hain
xhr.send();

// Jab response aayega
xhr.onload = function () {
    if (xhr.status === 200) { // Agar request successful ho
        // Response ko JSON mein convert karte hain
        var data = JSON.parse(xhr.responseText);
        
        // Data ko console par print karte hain
        console.log(data);
    } else {
        console.error('Error fetching data:', xhr.status);
    }
};

// Agar koi error ho toh
xhr.onerror = function () {
    console.error('Request failed');
};
