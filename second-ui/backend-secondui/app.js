const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


let data = [
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

// Get all components
app.get('/components', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json(data);
});

// Update a component by ID
app.put('/components/:id', (req, res) => {
  const componentId = req.params.id;
  const { clientName, deviceStatus, licenseExpiry } = req.body;

  // Find the component in the data array
  const component = data.find((item) => item.srNo === componentId);
  if (!component) {
    return res.status(404).json({ message: 'Component not found' });
  }

  // Update the properties
  if (clientName) {
    component.clientName = clientName;
  }
  if (deviceStatus) {
    component.deviceStatus = deviceStatus;
  }
  if (licenseExpiry) {
    component.licenseExpiry = licenseExpiry;
  }

  res.json(component);
});

module.exports = app;
// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
