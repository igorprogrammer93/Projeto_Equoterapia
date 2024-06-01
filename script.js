document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    // Carregar dados do localStorage quando a página é carregada
    loadFormData();

    // Salvar dados no localStorage sempre que um campo for alterado
    form.addEventListener("input", saveFormData);

    function saveFormData() {
        const formData = {};
        const elements = form.elements;
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            if (element.name) {
                formData[element.name] = element.value;
            }
        }
        localStorage.setItem("formData", JSON.stringify(formData));
    }

    function loadFormData() {
        const savedData = localStorage.getItem("formData");
        if (savedData) {
            const formData = JSON.parse(savedData);
            const elements = form.elements;
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                if (element.name && formData[element.name]) {
                    element.value = formData[element.name];
                }
            }
        }
    }
});

