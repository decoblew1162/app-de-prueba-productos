var serviceURL = "http://localhost/appempleados/services/";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'getemployees.php', function(data) {
		$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#employeeList').append('<li><a href="employeedetails.html?id=' + employee.id + '">' +
					'<img src="pics/' + employee.picture + '"/>' +
					'<img src="pics/' + employee.firstName + '"/>' +
					//'<h4>'  + employee.lastName + '</h4>' +
					'<h4 style="display:none">'  + employee.lastName + '</h4>' +
					
					
					//'<p>' + employee.title + '</p>
					'</a></li>');
					
					//'<span class="ui-li-count">' + employee.reportCount + '</span></a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}