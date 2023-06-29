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

var startHour = 0; // Default starting hour

function fetchStartingHour() {
  // Make a request to the backend API to get the starting hour
  fetch('https://backend-first.vercel.app/getStartingHour')
    .then(response => response.json())
    .then(data => {
        startHour = data.startHour;
          generateHours();
    })
    .catch(error => {
      console.error('Error fetching starting hour:', error);
    });
}

function generateHours() {
  const numElement = document.getElementById("numbers");
  numElement.innerHTML = ''; 
  for (let i = 0; i < 24; i++) {
    const spanElement = document.createElement("span");
    spanElement.classList.add("n");
    spanElement.innerText = ("0" + ((startHour + i) % 24)).slice(-2); 
    numElement.appendChild(spanElement);
  }
}

fetchStartingHour();


function generateCustomersComponent(data) {
  const customersContainer = $("#customers"); 

  data.forEach((customer, customerIndex) => {
    const customerElement = $("<div>").addClass("customers"); 

    const nameElement = $("<p>").addClass("c1").attr("id", `customer-name-${customerIndex}`).text(customer.name);
    customerElement.append(nameElement);

    customer.spans.forEach((spanColor, dotIndex) => {
      const spanElement = $("<span>").addClass("c1-span").css("background-color", spanColor).attr("id", `customer-dot-${customerIndex}-${dotIndex}`); // Use jQuery to create span element
      spanElement.on("click", () => {
        toggleDotColor(customerIndex, dotIndex);
      });

      customerElement.append(spanElement);
    });

    customersContainer.append(customerElement);
  });


 $(document).ready(function() {
    $('#customersTable').DataTable();
  });
}

function fetchAndUpdateData() {
  fetch("https://backend-first.vercel.app/customers")
    .then((response) => response.json())
    .then((data) => {
      generateCustomersComponent(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

fetchAndUpdateData();
