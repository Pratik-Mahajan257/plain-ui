
  // Sample data
  const data = [
    {
      srNo: "1",
      clientName: "Customer 1",
      deviceStatus: "14/14",
      licenseExpiry: "31st December 2023",
      boxColor: "#d5e8d4", 
      borderColor: "#abcc99",
       marginRight :"610px"
      
    },
 {
      srNo: "2",
      clientName: "Customer 2",
      deviceStatus: "2/2",
      licenseExpiry: "31st December 2023",
      boxColor: "#d5e8d4", 
      borderColor: "#abcc99", 
    
      marginRight :"610px"
    },
     {
      srNo: "3",
      clientName: "Customer 3",
      deviceStatus: "7/7",
      licenseExpiry: "31st December 2023",
      boxColor: "#d5e8d4", 
      borderColor: "#abcc99", 
      marginRight:"610px" 
    },
     {
      srNo: "4",
      clientName: "Customer 4",
      deviceStatus: "0/1",
      licenseExpiry: "31st December 2023",
      boxColor: "#d5e8d4", 
      borderColor: "#abcc99", 
      marginRight: "610px"
    },
     {
      srNo: "5",
      clientName: "Customer 5",
      deviceStatus: "0/2",
      licenseExpiry: "31st December 2023",
      boxColor: "#f8cecc", 
      borderColor: "#d8a3a1",
      marginRight: "610px"
    },
     {
      srNo: "6",
      clientName: "Customer 6",
      deviceStatus: "0/2",
      licenseExpiry: "31st December 2023",
      boxColor: "#f8cecc", 
      borderColor: "#d8a3a1", 
      marginRight: "610px"
    },
  ];

  function generateComponent(data) {
    return `
      <div class="head-m">
        <p >${data.srNo}</p>
        <p style="margin-right: ${data.marginRight}">${data.clientName}</p>
        <p class="box-m" style="background-color: ${data.boxColor}; border-color: ${data.borderColor}">
          <span>${data.deviceStatus}</span>
        </p>
        <p  >${data.licenseExpiry}</p>
      </div>
    `;
  }


function renderComponents() {
  const container = document.getElementById("container");

  // Clear the container before rendering components
  container.innerHTML = "";

  fetch('https://backend-second.vercel.app/components')
    .then(response => response.json())
    .then(data => {
      data.forEach((item) => {
        const componentHTML = generateComponent(item);
        container.innerHTML += componentHTML;
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

renderComponents();