const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

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

// Get all customers
app.get('/customers', (req, res) => {
  res.json(customersData);
});

// Update customer name
app.put('/customers/:index/name', (req, res) => {
  const index = req.params.index;
  const newName = req.body.name;

  if (!customersData[index]) {
    return res.status(404).json({ message: 'Customer not found' });
  }

  customersData[index].name = newName;

  // Dispatch custom event to notify frontend about the name change
  const eventData = {
    index: index,
    name: newName
  };
  res.json(eventData);
});

// Update dot color
app.put('/customers/:index/dots/:dotIndex', (req, res) => {
  const index = req.params.index;
  const dotIndex = req.params.dotIndex;
  const newColor = req.body.color;

  if (!customersData[index] || !customersData[index].spans[dotIndex]) {
    return res.status(404).json({ message: 'Customer or dot not found' });
  }

  customersData[index].spans[dotIndex] = newColor;

  // Dispatch custom event to notify frontend about the dot color change
  const eventData = {
    index: index,
    dotIndex: dotIndex,
    color: newColor
  };
  res.json(eventData);
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
