async function convertDate() {
    const dateInput = document.getElementById('dateInput').value;
    const unixResult = document.getElementById('unixResult');
    const utcResult = document.getElementById('utcResult');

    try {
        const response = await fetch(`/api/${dateInput}`);
        const data = await response.json();

        if (data.error) {
            unixResult.textContent = 'Invalid Date';
            utcResult.textContent = 'Invalid Date';
            return;
        }

        unixResult.textContent = data.unix;
        utcResult.textContent = data.utc;
    } catch (error) {
        console.error('Error:', error);
        unixResult.textContent = 'Error occurred';
        utcResult.textContent = 'Error occurred';
    }
}

// Add event listener for Enter key
document.getElementById('dateInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        convertDate();
    }
}); 