// json2html.js

export default function json2html(data) {
    // Start the table with the data-user attribute
    let tableHTML = '<table data-user="deepanvithamini@gmail.com">';

    // Add the table header (column names)
    tableHTML += '<thead><tr>';
    if (data.length > 0) {
        // Extract keys from the first object to create table headers
        Object.keys(data[0]).forEach(key => {
            tableHTML += `<th>${key}</th>`;
        });
    }
    tableHTML += '</tr></thead>';

    // Add the table body with rows of data
    tableHTML += '<tbody>';
    data.forEach(item => {
        tableHTML += '<tr>';
        // Iterate over the object's keys and create table data cells
        Object.keys(item).forEach(key => {
            tableHTML += `<td>${item[key]}</td>`;
        });
        tableHTML += '</tr>';
    });
    tableHTML += '</tbody>';

    // Close the table tag
    tableHTML += '</table>';

    // Return the constructed HTML table as a string
    return tableHTML;
}
