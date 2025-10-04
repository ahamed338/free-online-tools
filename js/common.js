function calculateAge() {
    const dobInput = document.getElementById('dob');
    const ageResult = document.getElementById('age');
    
    if (!dobInput.value) {
        alert('Please enter your birthdate.');
        return;
    }
    
    const birthDate = new Date(dobInput.value);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    // Adjust age if birthday hasn't occurred this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    ageResult.textContent = age;
}

// Add event listener for date input changes
document.addEventListener('DOMContentLoaded', function() {
    const dobInput = document.getElementById('dob');
    if (dobInput) {
        dobInput.addEventListener('change', calculateAge);
    }
});