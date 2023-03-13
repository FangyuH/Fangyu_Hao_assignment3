/*
Question 1
1. Given the following array and implement the table dynamically(you need to create the table via JavaScript)
2. And then you should implement a form(focus on the logic only, you DON'T need to create the form via JavaScript) for taking the some format input form users(Student Name，Age，Phone,Address). When the user clicks the Add button, the data will be added into the existing table(after the existing data), and the user input in the form should be cleared. 
*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

// create table
let Q1 = document.getElementById("Q1");
let table = document.createElement("table");
table.id = "table-hw";
Q1.appendChild(table);

// create table header
let thead = document.createElement("thead");
thead.id = "thead-th";
table.appendChild(thead);

let tr = document.createElement("tr");
thead.appendChild(tr);

// pass table headers of tableInfo and insert to the table
for (let i = 0; i < tableInfo.tableHeader.length; i++) {
  let th = document.createElement("th");
  th.scope = "col";
  th.textContent = tableInfo.tableHeader[i];
  tr.appendChild(th);
}

// create table body
let tbody = document.createElement("tbody");
tbody.id = "tbody-tb";
table.appendChild(tbody);

// pass table body info of tableInfo and insert to the table
for (let rowData of tableInfo.tableContent) {
  const row = document.createElement("tr");
  for (let cellData of Object.values(rowData)) {
    const cell = document.createElement("td");
    cell.textContent = cellData;
    row.appendChild(cell);
  }
  tbody.appendChild(row);
}

// select form
const form = document.getElementById("myForm");

// actions when press the add button
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.elements["name"].value;
  const age = form.elements["age"].value;
  const phone = form.elements["phone"].value;
  const address = form.elements["address"].value;

  // new row for the table
  const newRow = document.createElement("tr");
  const nameCell = document.createElement("td");
  nameCell.textContent = name;
  const ageCell = document.createElement("td");
  ageCell.textContent = age;
  const phoneCell = document.createElement("td");
  phoneCell.textContent = phone;
  const addressCell = document.createElement("td");
  addressCell.textContent = address;

  // add the new info to the new row
  newRow.appendChild(nameCell);
  newRow.appendChild(ageCell);
  newRow.appendChild(phoneCell);
  newRow.appendChild(addressCell);

  // add the new row to the table body
  const tableBody = table.querySelector("tbody");
  tableBody.appendChild(newRow);

  // reset the form inputs
  form.reset();
});

/*
Question 2
Given the array and generate order list and unordered list dynamically as following:
*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

function createListItem(item) {
  let li = document.createElement("li");
  li.textContent = item;
  return li;
}

let Q2 = document.getElementById("Q2");

let header1 = document.createElement("h3");
header1.textContent = "An ordered technologies list";
Q2.appendChild(header1);

let ol = document.createElement("ol");
ol.id = "ordered-list";
Q2.appendChild(ol);

// the ordered list
let ordered = document.getElementById("ordered-list");
for (let i = 0; i < list.length; i++) {
  ordered.appendChild(createListItem(list[i]));
}

let header2 = document.createElement("h3");
header2.textContent = "An unordered technologies list";
Q2.appendChild(header2);

// the unordered list
let ul = document.createElement("ul");
ul.id = "unordered-list";
Q2.appendChild(ul);

let unordered = document.getElementById("unordered-list");
for (let i = 0; i < list.length; i++) {
  unordered.appendChild(createListItem(list[i]));
}

/*
Question 3
1. Given the array and implement a dropdown list with the following options dynamically 
2. Console the value, when the user select one option
*/

const dropDownList = [
  { value: "", content: "Please select" },
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let Q3 = document.getElementById("Q3");

let select = document.createElement("select");
select.id = "select-cities";
Q3.appendChild(select);

let selectCities = document.getElementById("select-cities");

for (let i = 0; i < dropDownList.length; i++) {
  const option = document.createElement("option");
  option.value = dropDownList[i].value;
  option.textContent = dropDownList[i].content;
  selectCities.appendChild(option);
}

selectCities.addEventListener("change", (event) => {
  console.log(event.target.value);
});
