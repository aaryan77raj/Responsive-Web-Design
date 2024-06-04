function validateForm() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name="platform"]:checked');
    if (checkboxes.length < 2) {
      alert("Please select at least two platforms.");
      return false;
    }
    return true;
  }  