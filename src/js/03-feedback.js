import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('input'),
};
let formData = {
  email: '',
  message: '',
};
populateTextarea();

refs.form.addEventListener('input', throttle(onFormInput, 500));

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  if (formData.email && formData.message) {
      console.log('Form submitted:', formData);

    localStorage.removeItem(STORAGE_KEY);
    e.currentTarget.reset();
    formData = {};

  } else {
    alert('Please fill in both fields (email and message) before submitting the form.');
  }
});

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  const stringifiedData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, stringifiedData);
}
function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage === null) {
    return;
  }

  refs.textarea.value = savedMessage.message || '';
  refs.input.value = savedMessage.email || '';
  formData.email = savedMessage.email || '';
  formData.message = savedMessage.message || '';
}