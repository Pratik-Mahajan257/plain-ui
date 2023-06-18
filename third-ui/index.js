// Create a component function
function CustomersComponent(customers) {
  return customers.map((customer) => `
    <div class="customers">
      <p class="p-1 ${customer.bold ? 'bold' : ''}" style="margin-right: ${customer.customerNameMarginRight}px;">${customer.customerName}</p>
      <p class="p-1" style="margin-right: ${customer.startDateMarginRight}px;">${customer.startDate}</p>
      <p class="p-1" style="margin-right: ${customer.endDateMarginRight}px;">${customer.endDate}</p>
      <p class="p-1" style="margin-right: ${customer.statusMarginRight}px;">${customer.status}</p>
      <a href="${customer.editLink}" class="link">Edit</a>
    </div>
  `).join('');
}

// Render the component
const container = document.getElementById('container');

const customerData = [
 
  {
    customerName: 'G K Founders',
    startDate: '01 January 2020',
    endDate: '31 December 2022',
    status: 'Active',
    editLink: 'https://example.com/edit',
    customerNameMarginRight: 225,
    startDateMarginRight: 180,
    endDateMarginRight: 195,
    statusMarginRight: 233,
    bold: true,
  },
  {
    customerName: 'Hindustan Pecils',
    startDate: '01 January 2020',
    endDate: '31 December 2022',
    status: 'Active',
    editLink: 'https://example.com/edit',
    customerNameMarginRight: 200,
    startDateMarginRight: 183,
    endDateMarginRight: 195,
    statusMarginRight: 233,
    bold: true,
  },
    {
    customerName: 'PT Mitra Akses Globalindo',
    startDate: '01 September 2022',
    endDate: '30 October 2022',
    status: 'Inactive',
    editLink: 'https://example.com/edit',
    customerNameMarginRight: 127,
    startDateMarginRight: 170,
    endDateMarginRight: 200,
    statusMarginRight: 226,
    bold: true,
  },
    {
    customerName: 'SMERK',
    startDate: '15 September 2022',
    endDate: '15 November 2022',
    status: 'Inactive',
    editLink: 'https://example.com/edit',
    customerNameMarginRight: 270,
    startDateMarginRight: 165,
    endDateMarginRight: 190,
    statusMarginRight: 225,
    bold: true,
  },
    {
    customerName: 'Tata Projects',
    startDate: '01 October 2022',
    endDate: '30 November 2022',
    status: 'Active',
    editLink: 'https://example.com/edit',
    customerNameMarginRight: 233,
    startDateMarginRight: 185,
    endDateMarginRight: 190,
    statusMarginRight: 236,
    bold: true,
  },
];

container.innerHTML = CustomersComponent(customerData);
