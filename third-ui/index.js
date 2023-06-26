function CustomersComponent(customers) {
  return customers.map((customer, index) => `
    <div class="customers">
      <p class="p-1 ${customer.bold ? 'bold' : ''}" style="margin-right: ${customer.customerNameMarginRight}px;">${customer.customerName}</p>
      <p class="p-1" style="margin-right: ${customer.startDateMarginRight}px;">${customer.startDate}</p>
      <p class="p-1" style="margin-right: ${customer.endDateMarginRight}px;">${customer.endDate}</p>
      <p class="p-1" style="margin-right: ${customer.statusMarginRight}px;">${customer.status}</p>
      <button href="#" class="link edit-link" data-index="${index}">Edit</button>
    </div>

    <div class="modal" id="modal-${index}">
      <div class="modal-content">
         <div class="navbar1">
        <div class="brand1">
            <p class="pre">
                Edit
            </p>

        </div>
        </div>
        <div class="content">
        <label for="customerName-${index}" class="cust">Customer Name:</label>
        <input class="c-name" type="text" id="customerName-${index}" value="${customer.customerName}">
        <label for="startDate-${index}" >Start Date:</label>
        <input type="text" id="startDate-${index}" class="date-picker" value="${customer.startDate}">
        <label for="endDate-${index}">End Date:</label>
        <input type="text" id="endDate-${index}" class="date-picker" value="${customer.endDate}">
        <label for="status-${index}">Status:</label>
        <select id="status-${index}">
        <option value="Active" ${customer.status === 'Active' ? 'selected' : ''}>Active</option>
        <option value="Inactive" ${customer.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
        </select>
        <button class="update-btn" data-index="${index}">Update</button>
        </div>
      </div>
    </div>
  `).join('');
}

 
    const container = document.getElementById('container');
    const customerData = [
    
       {
    customerName: 'Customer 1',
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
    customerName: 'Customer 2',
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
    customerName: 'Customer 3',
    startDate: '01 January 2020',
    endDate: '31 December 2022',
    status: 'Active',
    editLink: 'https://example.com/edit',
    customerNameMarginRight: 225,
    startDateMarginRight: 183,
    endDateMarginRight: 195,
    statusMarginRight: 231,
    bold: true,
  },
    {
    customerName: 'Customer 4',
    startDate: '01 September 2022',
    endDate: '30 October 2022',
    status: 'Inactive',
    editLink: 'https://example.com/edit',
    customerNameMarginRight: 225,
    startDateMarginRight: 168,
    endDateMarginRight: 200,
    statusMarginRight: 224,
    bold: true,
  },
    {
    customerName: 'Customer 5',
    startDate: '15 September 2022',
    endDate: '15 November 2022',
    status: 'Inactive',
    editLink: 'https://example.com/edit',
    customerNameMarginRight: 220,
    startDateMarginRight: 165,
    endDateMarginRight: 190,
    statusMarginRight: 225,
    bold: true,
  },
    {
    customerName: 'Customer 6',
    startDate: '01 October 2022',
    endDate: '30 November 2022',
    status: 'Active',
    editLink: 'https://example.com/edit',
    customerNameMarginRight: 233,
    startDateMarginRight: 185,
    endDateMarginRight: 190,
    statusMarginRight: 225,
    bold: true,
  },
    ];
    container.innerHTML = CustomersComponent(customerData);

    
const datePickers = document.querySelectorAll('.date-picker');
datePickers.forEach((datePicker) => {
  flatpickr(datePicker, {
    dateFormat: 'd F Y',
  });
});


container.addEventListener('click', handleEditClick);
container.addEventListener('click', handleUpdateClick);

function handleEditClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('edit-link')) {
    const index = event.target.getAttribute('data-index');
    openModal(index);
  }
}


function handleUpdateClick(event) {
  if (event.target.classList.contains('update-btn')) {
    const index = event.target.getAttribute('data-index');
    updateCustomerData(index);
    closeModal(index);
  }
}


function openModal(index) {
  const modal = document.getElementById(`modal-${index}`);
  modal.style.display = 'block';
}


function closeModal(index) {
  const modal = document.getElementById(`modal-${index}`);
  modal.style.display = 'none';
}


function updateCustomerData(index) {
  const customerNameInput = document.getElementById(`customerName-${index}`);
  const startDateInput = document.getElementById(`startDate-${index}`);
  const endDateInput = document.getElementById(`endDate-${index}`);
  const statusSelect = document.getElementById(`status-${index}`);

  customerData[index].customerName = customerNameInput.value;
  customerData[index].startDate = startDateInput.value;
  customerData[index].endDate = endDateInput.value;
  customerData[index].status = statusSelect.value;

  container.innerHTML = CustomersComponent(customerData);
}