// Verifica se há dados salvos no armazenamento local
document.addEventListener('DOMContentLoaded', function () {
    var savedData = localStorage.getItem('formData');
    if (savedData) {
        var formData = JSON.parse(savedData);
        document.getElementById('name').value = formData.name;
        document.getElementById('email').value = formData.email;
    }
});

// Salva os dados do formulário no armazenamento local quando o formulário é enviado
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Dados salvos com sucesso!');
});