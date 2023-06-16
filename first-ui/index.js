  var ctx = document.getElementById('pieChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            
            datasets: [{
                data: [13, 7],
                backgroundColor: ['#ea6b66', '#97d077'],
                borderColor: ['#5caef1'],
                
             }]
            
        },
        options: {

        responsive: false, // Disable responsiveness
        maintainAspectRatio: false, // Disable aspect ratio maintenance
        width: 200, // Set the width to 200 pixels
        height: 200 // Set the height to 200 pixels
    
        }
    });

    var ctx = document.getElementById('pieChart1').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            
            datasets: [{
                data: [10, 40],
                backgroundColor: ['#ea6b66', '#97d077'],
                borderColor: ['#5caef1'],
                
             }]
            
        },
        options: {

        responsive: false, // Disable responsiveness
        maintainAspectRatio: false, // Disable aspect ratio maintenance
        width: 200, // Set the width to 200 pixels
        height: 200 // Set the height to 200 pixels
    
        }
    });


