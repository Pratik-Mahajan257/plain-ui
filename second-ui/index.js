
  // Sample data
  const data = [
    {
      srNo: "1",
      clientName: "Alexander John",
      deviceStatus: "14/14",
      licenseExpiry: "31st December 2023",
      boxColor: "#d5e8d4", 
      borderColor: "#abcc99",
      
    },
 {
      srNo: "2",
      clientName: "Tata Projects",
      deviceStatus: "2/2",
      licenseExpiry: "31st December 2023",
      boxColor: "#d5e8d4", 
      borderColor: "#abcc99", 
    
      marginRight :"600px"
    },
     {
      srNo: "3",
      clientName: "HPPL",
      deviceStatus: "7/7",
      licenseExpiry: "31st December 2023",
      boxColor: "#d5e8d4", 
      borderColor: "#abcc99", 
      marginRight:"650px" 
    },
     {
      srNo: "4",
      clientName: "SMERK Technologies",
      deviceStatus: "0/1",
      licenseExpiry: "31st December 2023",
      boxColor: "#d5e8d4", 
      borderColor: "#abcc99", 
      marginRight: "535px"
    },
     {
      srNo: "5",
      clientName: "GK Founders",
      deviceStatus: "0/2",
      licenseExpiry: "31st December 2023",
      boxColor: "#f8cecc", 
      borderColor: "#d8a3a1",
      marginRight: "596px"
    },
     {
      srNo: "6",
      clientName: "PT Mitra Akses Globalindo",
      deviceStatus: "0/2",
      licenseExpiry: "31st December 2023",
      boxColor: "#f8cecc", 
      borderColor: "#d8a3a1", 
      marginRight: "505px"
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

    data.forEach((item) => {
      const componentHTML = generateComponent(item);
      container.innerHTML += componentHTML;
    });
  }


  renderComponents();
