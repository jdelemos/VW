window.onload = setMaxDate();
function setMaxDate(){
    const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        document.getElementById('bday').max = `${year}-${month}-${day}`;
  }
  function checkValid(event) {
    var inputElement = event.target;
  
    if (inputElement.tagName === 'INPUT' && inputElement.form) {
      if (inputElement.id === 'name') {
        var inputValue = inputElement.value.trim();
  
        if (inputValue === '') {
          // Blank input: set border color to white
          inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid white';
        } else {
          var isValid = /^[A-Z a-z]+$/.test(inputValue);
  
          if (!isValid) {
            // Invalid input: set border color to red
            inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid red';
          } else {
            // Valid input: set border color to green
            inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid green';
          }
        }
      }
      if (inputElement.id === 'email') {
        var inputValue = inputElement.value.trim();
  
        if (inputValue === '') {
          // Blank input: set border color to white
          inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid white';
        } else {
          var isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputValue);
  
          if (!isValid) {
            // Invalid input: set border color to red
            inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid red';
          } else {
            // Valid input: set border color to green
            inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid green';
          }
        }
      }
      if (inputElement.id === 'phone') {
        var inputValue = inputElement.value.trim();
  
        if (inputValue === '') {
          // Blank input: set border color to white
          inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid white';
        } else {
          var isValid = /^[0-9]{10}$/.test(inputValue);
  
          if (!isValid) {
            // Invalid input: set border color to red
            inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid red';
          } else {
            // Valid input: set border color to green
            inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid green';
          }
        }
      }
      if (inputElement.id === 'address') {
        var inputValue = inputElement.value.trim();
  
        if (inputValue === '') {
          // Blank input: set border color to white
          inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid white';
        } else {
          var isValid = /^[a-zA-Z0-9\s,'\-#]+$/.test(inputValue);
  
          if (!isValid) {
            // Invalid input: set border color to red
            inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid red';
          } else {
            // Valid input: set border color to green
            inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid green';
          }
        }
      }
      if (inputElement.id === 'city') {
        var inputValue = inputElement.value.trim();
  
        if (inputValue === '') {
          // Blank input: set border color to white
          inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid white';
        } else {
          var isValid = /^[A-Za-z\s-]+$/.test(inputValue);
  
          if (!isValid) {
            // Invalid input: set border color to red
            inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid red';
          } else {
            // Valid input: set border color to green
            inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid green';
          }
        }
      }
      if (inputElement.id === 'zipcode') {
        var inputValue = inputElement.value.trim();
  
        if (inputValue === '') {
          // Blank input: set border color to white
          inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid white';
        } else {
          var isValid = /^[0-9]{5}$/.test(inputValue);
  
          if (!isValid) {
            // Invalid input: set border color to red
            inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid red';
          } else {
            // Valid input: set border color to green
            inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid green';
          }
        }
      }
      if (inputElement.id === 'ename') {
        var inputValue = inputElement.value.trim();
  
        if (inputValue === '') {
          // Blank input: set border color to white
          inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid white';
        } else {
          var isValid = /^[A-Z a-z]+$/.test(inputValue);
  
          if (!isValid) {
            // Invalid input: set border color to red
            inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid red';
          } else {
            // Valid input: set border color to green
            inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid green';
          }
        }
      }
      if (inputElement.id === 'ephone') {
        var inputValue = inputElement.value.trim();
  
        if (inputValue === '') {
          // Blank input: set border color to white
          inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid white';
        } else {
          var isValid = /^[0-9]{10}$/.test(inputValue);
  
          if (!isValid) {
            // Invalid input: set border color to red
            inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid red';
          } else {
            // Valid input: set border color to green
            inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid green';
          }
        }
      }
      if (inputElement.id === 'bday') {
        
        var maxDate = new Date(document.getElementById('bday').max);
        var inputValue = inputElement.value.trim();
  
        if (inputValue === '') {
          // Blank input: set border color to white
          inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid white';
        } else {
          var isValid = /^\d{4}-\d{2}-\d{2}$/.test(inputValue);
          if(new Date(document.getElementById('bday').value) > maxDate){
            inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid red';
          }
  
          if (!isValid) {
            // Invalid input: set border color to red
            inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid red';
          } else {
            // Valid input: set border color to green
            inputElement.style.borderBottom = 'calc(5px*var(--scaling-factor)) solid green';
          }
        }
      }
    }
   
    }
  
  
  document.addEventListener('input', checkValid);
  
            
          document.getElementById('myForm').addEventListener('submit', function (event) {
              event.preventDefault();
              var inputs = this.querySelectorAll('input');
              for(var i = 0; i < inputs.length; i++){
		      console.log(inputs[i]);
                if(window.getComputedStyle(inputs[i]).getPropertyValue('border-bottom-color') === 'red' || window.getComputedStyle(inputs[i]).getPropertyValue('border-bottom-color') === 'rgb(255, 0, 0)'){
                  event.preventDefault();
                  alert("Please make changes to red fields.");
                  return;
                }
              }
  
              const formData = {
		  userId: localStorage.getItem('googleId'),
                  name: document.getElementById('name').value,
                  email: document.getElementById('email').value,
                  phone: document.getElementById('phone').value,
		              address: document.getElementById('address').value,
		              city: document.getElementById('city').value,
		              zipcode: document.getElementById('zipcode').value,
		              ename: document.getElementById('ename').value,
		              enumber: document.getElementById('ephone').value,
		              bday: document.getElementById('bday').value
              };
  
              fetch('https://vast-wave-12355-e83778ef23ea.herokuapp.com/user-submit', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formData),
              })
              .then(response => response.text())
              .then(data => {
                  console.log('Success:', data);
                  alert('Data submitted successfully!');
		  window.location.href = "./apply.html";
              })
              .catch((error) => {
                  console.error('Error:', error);
                  alert('Error submitting data');
              });
          });
