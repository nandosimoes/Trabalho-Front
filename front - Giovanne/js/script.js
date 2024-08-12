  const nome = document.querySelector("#nome");
  const email = document.querySelector("#email");
  const tel = document.querySelector("#tel");
  const button = document.querySelector("button");
  const listaNomes = document.querySelector(".listaNomes");
  const listaEmails = document.querySelector(".listaEmails");
  const listaTels = document.querySelector(".listaTels");
  const deleteButtons = document.querySelector(".deleteButtons");

  button.addEventListener("click", (event) => {
      event.preventDefault();

      const inputNameValue = nome.value.trim();
      const inputEmailValue = email.value.trim();
      const inputTelValue = tel.value.trim();

      if (inputNameValue === "" || inputNameValue.length < 2 || inputNameValue.length > 30 || /\d/.test(inputNameValue)) {
          alert("Digite um nome válido com no mínimo 2 e no máximo 30 caracteres");
          return false;
      }

      const parteEmail = inputEmailValue.split("@");
      const dominios = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com"];
      if (inputEmailValue.length < 10 || inputEmailValue.length > 120 || parteEmail.length !== 2 || dominios.indexOf(parteEmail[1]) === -1) {
          alert("Digite um Email válido com no mínimo 10 caracteres e no máximo 120 caracteres e   use um domínio válido ");
          return false;
      }
      if (inputTelValue === "" || inputTelValue.length !== 14) {
          alert("Digite um telefone válido no formato (xx)xxxxx-xxxx.");
          return false;
      }

      const liName = document.createElement('li');
      liName.textContent = inputNameValue;
      listaNomes.appendChild(liName);

      const liEmail = document.createElement('li');
      liEmail.textContent = inputEmailValue;
      listaEmails.appendChild(liEmail);

      const liTel = document.createElement('li');
      liTel.textContent = inputTelValue;
      listaTels.appendChild(liTel);

      const liDelete = document.createElement('li');
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Deletar';
      deleteButton.classList.add('delete-button'); 
      deleteButton.addEventListener('click', () => {
          listaNomes.removeChild(liName);
          listaEmails.removeChild(liEmail);
          listaTels.removeChild(liTel);
          deleteButtons.removeChild(liDelete);
      });
      liDelete.appendChild(deleteButton);
      deleteButtons.appendChild(liDelete);

      nome.value = "";
      email.value = "";
      tel.value = "";
  });

  const telInput = document.getElementById('tel');
  telInput.addEventListener('input', function (event) {
      let tel = event.target.value;
      tel = tel.replace(/\D/g, '');
      tel = tel.replace(/^(\d{2})(\d)/g, '($1)$2');
      tel = tel.replace(/(\d)(\d{4})$/, '$1-$2');
      event.target.value = tel; 
  });

