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





generateCustomersComponent(customersData);

// ...
// Function to fetch updated customer data from the backend
async function fetchCustomersData() {
  const response = await fetch('/api/customers');
  const data = await response.json();
  return data;
}

// ...

// Function to update the customer name in the UI
function updateCustomerName(id, name) {
  const nameElement = document.getElementById(`customer-name-${id}`);
  if (nameElement) {
    nameElement.innerText = name;
  }
}

// Function to update the dot color in the UI
function updateDotColor(customerId, dotIndex, color) {
  const dotElement = document.getElementById(`customer-dot-${customerId}-${dotIndex}`);
  if (dotElement) {
    dotElement.style.backgroundColor = color;
  }
}

// ...

// Periodically fetch updated data and update the UI
async function updateDataAndUI() {
  const data = await fetchCustomersData();

  data.forEach((customer, customerIndex) => {
    // Update customer name
    updateCustomerName(customerIndex, customer.name);

    // Update dot colors
    customer.spans.forEach((spanColor, dotIndex) => {
      updateDotColor(customerIndex, dotIndex, spanColor);
    });
  });
}

// Fetch initial data and update the UI on page load
updateDataAndUI();

// Periodically update the data and UI every 5 seconds
setInterval(updateDataAndUI, 5000);
