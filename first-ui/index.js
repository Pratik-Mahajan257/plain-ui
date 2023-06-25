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

        responsive: false, 
        maintainAspectRatio: false, 
        width: 200, 
        height: 200 
    
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

        responsive: false, 
        maintainAspectRatio: false, 
        width: 200, 
        height: 200 
        }
    });


const customersData = [
  {
    name: "Customer 1",
    spans: ["#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077",
      "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077",
      "#97d077", "#97d077", "#97d077", "#97d077", "#97d077"],
  },
 {
    name: "Customer 2",
    spans: ["#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077",
      "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077",
      "#97d077", "#97d077", "#97d077", "#97d077", "#97d077"],
  },
  {
    name: "Customer 3",
    spans: ["#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077",
      "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#e51400", "#e51400", "#e51400", "#e51400",
      "#e51400", "#e51400", "#e51400", "#e51400", "#e51400"],
  },
  {
    name: "Customer 4",
    spans: ["#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#e51400", "#e51400", "#e51400",
      "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077",
      "#97d077", "#97d077", "#97d077", "#97d077", "#97d077"],
  },
  {
    name: "Customer 5",
    spans: ["#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077", "#97d077",
      "#97d077", "#97d077", "#97d077", "#97d077", "#e51400", "#97d077", "#97d077", "#97d077", "#97d077", "#e51400",
      "#e51400", "#97d077", "#97d077", "#97d077", "#97d077"],
  },
];


function generateCustomersComponent(data) {
  const customersContainer = document.getElementById("customers");

  data.forEach((customer, customerIndex) => {
    const customerElement = document.createElement("div");
    customerElement.classList.add("customers");

    const nameElement = document.createElement("p");
    nameElement.classList.add("c1");
    nameElement.id = `customer-name-${customerIndex}`; // Add an ID to identify the customer name element
    nameElement.innerText = customer.name;
    customerElement.appendChild(nameElement);

    customer.spans.forEach((spanColor, dotIndex) => {
      const spanElement = document.createElement("span");
      spanElement.classList.add("c1-span");
      spanElement.style.backgroundColor = spanColor;
      spanElement.id = `customer-dot-${customerIndex}-${dotIndex}`; // Add an ID to identify the dot color element
      spanElement.addEventListener("click", () => {
        toggleDotColor(customerIndex, dotIndex);
      });

      customerElement.appendChild(spanElement);
    });

    customersContainer.appendChild(customerElement);
  });
}

function fetchAndUpdateData() {
  fetch('http://localhost:3000/customers')
    .then(response => response.json())
    .then(data => {
      // Call the function to update the frontend with the new data
      generateCustomersComponent(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

// Fetch and update data initially
fetchAndUpdateData();

// Fetch and update data every 5 seconds


