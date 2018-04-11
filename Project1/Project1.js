function validateForm() {
    var x = document.forms["Welcome Customers"]["First Name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
	
    }
}