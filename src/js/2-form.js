let formData = {
    email: "",
    message: ""
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onFormInput);

populateFormFromStorage();

form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateFormFromStorage() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        formData = JSON.parse(savedData);
        form.elements.email.value = formData.email || ''; 
    form.elements.message.value = formData.message || ''; 
  }
}

function onFormSubmit(event) {
    event.preventDefault();
    if (!formData.email || !formData.message) {
    alert('Будь ласка, заповніть всі поля');
    return;
  }
    console.log(formData);
     localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  form.reset();
}
