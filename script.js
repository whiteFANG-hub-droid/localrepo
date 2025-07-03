// When user clicks, switch body background and button theme
const button = document.getElementById('changeColorBtn');
button.addEventListener('click', function () {
  document.body.style.backgroundColor = 'yellow';
  button.style.backgroundColor = 'black';
  button.style.color = 'yellow';
});

// Task 5: API Integration (Custom Values)
const customNames = [
  "Rohit  Kamal Chakraborty",
  "Shadow Coder",
  "Maverick Dev",
  "Byte Bandit",
  "Frontend King",
  "React Ranger",
  "CSS Samurai",
  "DOM Slayer",
  "Pixel Prophet",
  "JS Jedi"
];

const customEmails = [
  "rohit@devmail.com",
  "shadow@codeverse.net",
  "maverick@devhub.org",
  "byte@banditzone.io",
  "king@frontendlabs.com",
  "ranger@reacthub.dev",
  "samurai@cssdojo.com",
  "dom@slayersquad.xyz",
  "prophet@pixelmagic.co",
  "jedi@jsforce.net"
];

const customCities = [
  "Kolkata",
  "Codeville",
  "Debug City",
  "Binary Town",
  "Frontend Falls",
  "Reacton",
  "Samuraipur",
  "DOM City",
  "Pixel Plains",
  "JavaScript Jungle"
];

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('apiData');
    data.forEach((user, index) => {
      const card = document.createElement('div');
      card.className = 'user-card';

      const fakeName = customNames[index] || user.name;
      const fakeEmail = customEmails[index] || user.email;
      const fakeCity = customCities[index] || user.address.city;

      card.innerHTML = `
        <h3>${fakeName}</h3>
        <p><strong>Email:</strong> ${fakeEmail}</p>
        <p><strong>City:</strong> ${fakeCity}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error('API Error:', err);
    document.getElementById('apiData').innerText = 'Failed to load data.';
  });

// Task 6: Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const msg = document.getElementById('message');
  const error = document.getElementById('formError');

  if (name.value === '' || email.value === '' || msg.value === '') {
    error.textContent = 'Please fill all fields.';
  } else if (!email.value.includes('@')) {
    error.textContent = 'Please enter a valid email.';
  } else {
    error.textContent = '';
    alert('Form submitted successfully!');
    name.value = '';
    email.value = '';
    msg.value = '';
  }
});


