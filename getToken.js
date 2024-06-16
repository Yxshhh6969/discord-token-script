(function() {
    function getToken() {
        try {
            // Access the token directly from localStorage
            let token = localStorage.getItem('token');
            if (token) {
                token = JSON.parse(token);
                console.log('Token retrieved:', token); // For educational purposes
            } else {
                console.log('Token key not found in localStorage');
            }
        } catch (e) {
            console.error('Error accessing localStorage:', e);
        }
    }

    // Retrieve and log the token
    getToken();
})();
