document.addEventListener("DOMContentLoaded", function () {
    const correctPassword = "igor1234";

    window.checkPassword = function () {
        const passwordInput = document.getElementById("password").value;
        if (passwordInput === correctPassword) {
            document.getElementById("login-container").style.display = "none";
            document.getElementById("form-container").style.display = "block";
        } else {
            document.getElementById("error-message").style.display = "block";
        }
    };

    const form = document.querySelector("form");

    // Função para salvar os dados no localStorage
    window.saveFormData = function() {
        const childName = document.getElementById("child-name").value;
        if (!childName) {
            alert("Por favor, insira o nome da criança.");
            return;
        }

        const formData = {};
        const elements = form.elements;
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            if (element.name) {
                formData[element.name] = element.value;
            }
        }
        localStorage.setItem(`formData-${childName}`, JSON.stringify(formData));
        alert("Dados salvos com sucesso!");
    };

    // Função para carregar os dados do localStorage
    window.loadFormData = function() {
        const childName = document.getElementById("child-name").value;
        if (!childName) {
            alert("Por favor, insira o nome da criança.");
            return;
        }

        const savedData = localStorage.getItem(`formData-${childName}`);
        if (savedData) {
            const formData = JSON.parse(savedData);
            const elements = form.elements;
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                if (element.name && formData[element.name]) {
                    element.value = formData[element.name];
                }
            }
            alert("Dados carregados com sucesso!");
        } else {
            alert("Nenhum dado encontrado para esta criança.");
        }
    };
});

