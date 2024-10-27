const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};
saveValueOfInput();
setValueOfUserData();

form.addEventListener('input', saveValueOfLocalStorage);

function saveValueOfLocalStorage(e) {
  setValueOfUserData();
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}
function saveValueOfInput() {
  const gettingValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (gettingValue) {
    form.elements.email.value = gettingValue.email;
    form.elements.message.value = gettingValue.message;
  }
}

function setValueOfUserData() {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
}

form.addEventListener('submit', submitForm);

function submitForm(e) {
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    alert('Fill please all fields');
    e.preventDefault();
  } else {
    console.log(formData);
    e.preventDefault();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    e.currentTarget.reset();
  }
}
