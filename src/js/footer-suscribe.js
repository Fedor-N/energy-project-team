document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо стандартну відправку форми

    const emailInput = document.getElementById('email');
    if (emailInput.checkValidity()) {
        const email = emailInput.value;
        
        // Відправка даних на backend
        fetch('https://your-energy.b.goit.study/api/subscription', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => {
            // Обробка відповіді від backend
            alert('Subscription successful!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Subscription failed. Please try again later.');
        });
    } else {
        alert('Please enter a valid email address.');
    }
});