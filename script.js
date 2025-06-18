function submitData() {
            const inputs = document.querySelectorAll('input');
            for (let input of inputs) {
                if (input.value.trim() === '' || isNaN(input.value)) {
                    alert("Please fill all fields with valid numbers.");
                    return;
                }
            }
            alert("Data submitted successfully!");
        }

        function generateChart() {
            const ctx = document.getElementById('financeChart').getContext('2d');
            const data = {
                labels: ["Bills", "Transport", "Food", "Personal Care", "Entertainment", "Savings"],
                datasets: [{
                    label: 'Expenses',
                    data: [
                        parseFloat(document.getElementById('bills').value) || 0,
                        parseFloat(document.getElementById('transport').value) || 0,
                        parseFloat(document.getElementById('food').value) || 0,
                        parseFloat(document.getElementById('care').value) || 0,
                        parseFloat(document.getElementById('entertainment').value) || 0,
                        parseFloat(document.getElementById('savings').value) || 0
                    ],
                    backgroundColor: [
                        '#4fc3f7', '#29b6f6', '#0288d1', '#0277bd', '#01579b', '#00bcd4'
                    ],
                    borderColor: '#fff',
                    borderWidth: 1
                }]
            };
            
            new Chart(ctx, {
                type: 'bar',
                data: data,
                options: {
                    plugins: {
                        legend: {
                            labels: {
                                color: '#fff'
                            }
                        }
                    },
                    scales: {
                        x: {
                            ticks: { color: '#fff' }
                        },
                        y: {
                            ticks: { color: '#fff' }
                        }
                    }
                }
            });
        }