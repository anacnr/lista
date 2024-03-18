document.addEventListener("DOMContentLoaded", function () {
  console.log("Script carregado!");

  /*Dados do usuário para emitir inicialmente*/
  let li_img = document.getElementById("image"); //Pega a li da imagem
  let image = document.getElementById("company-img"); //Pega o id da imagem
  let company = document.getElementById("span-name"); //Pega o id do span
  let manager = document.getElementById("span-manager");
  let cnpj = document.getElementById("span-cnpj");
  let local = document.getElementById("span-local");
  let tel_fix = document.getElementById("span-tel");
  let tel_priv = document.getElementById("span-private");
  let email = document.getElementById("span-email");
  let password = document.getElementById("span-password");

  /*Criação do novo formulário para passar os campos para o PHP e de lá apresentar os dados cadastrados da Empresa*/

  let dates = new FormData();

  dates.append("company-img", image);
  dates.append("span-name", company);
  dates.append("span-manager", manager);
  dates.append("span-cnpj", cnpj);
  dates.append("span-local", local);
  dates.append("span-tel", tel_fix);
  dates.append("span-private", tel_priv);
  dates.append("span-email", email);
  dates.append("span-password", password);

  //Exibe os dados do usuário. Requisição dos dados
  $.ajax({
    url: "../php/account-super.php",
    type: "POST",
    data: dates,
    processData: false,
    contentType: false,
  }).done(function (request) {
    console.log(request);

    //Vou fazer igual o cadastro da imagem
    //lista../php/enviadas/655d45ab71148.jpg
    /*background-image: url('/lista/php/enviadas/655d45ab71148.jpg');
    background-size: cover;
    background-position: center;*/

    li_img.style.backgroundImage = `url(../php/${request.imagem})`
    li_img.style.backgroundSize = 'cover'

    li_img.style.backgroundPosition = 'center'
    //image.src = `../php/${request.imagem}`
    company.textContent = `${request.empresa}`;
    manager.textContent = `${request.responsavel}`;
    cnpj.textContent = `${request.cnpj}`;
    local.textContent = `${request.local}`;
    tel_fix.textContent = `${request.tel_fixo}`;
    tel_priv.textContent = `${request.celular}`;
    email.textContent = `${request.email}`;
    password.textContent = `${request.senha}`;
  });

  /*Caso o usuário edite os dados*/

  let button_edit = document.getElementById("edit");
  button_edit.addEventListener("click", function () {
    /*Transformação dos campos em inputs*/

    let input_company = document.createElement("input");
    input_company.className = "par";
    input_company.id = "span-name";
    input_company.name = "span-name";
    input_company.style.color = "black";
    input_company.style.textShadow = "none";
    input_company.style.letterSpacing = "3px";
    input_company.style.textAlign = "center";

    company.style.display = "none";

    document.querySelector(
      "#company-dates > ul > #name"
    ).style.backgroundColor = "transparent";

    let span_company = company.parentNode;
    span_company.insertBefore(input_company, company.nextSibling);
    span_company.removeChild(company);

    let input_manager = document.createElement("input");
    input_manager.className = "par";
    input_manager.id = "span-manager";
    input_manager.name = "span-manager";
    input_manager.style.color = "black";
    input_manager.style.textShadow = "none";
    input_manager.style.letterSpacing = "3px";
    input_manager.style.textAlign = "center";

    manager.style.display = "none";

    document.querySelector(
      "#company-dates > ul > #manager"
    ).style.backgroundColor = "transparent";

    let span_manager = manager.parentNode;
    span_manager.insertBefore(input_manager, manager.nextSibling);
    span_manager.removeChild(manager);

    let input_cnpj = document.createElement("input");
    input_cnpj.className = "par";
    input_cnpj.id = "span-cnpj";
    input_cnpj.name = "span-cnpj";
    input_cnpj.style.color = "black";
    input_cnpj.style.textShadow = "none";
    input_cnpj.style.letterSpacing = "3px";
    input_cnpj.style.textAlign = "center";

    cnpj.style.display = "none";

    document.querySelector(
      "#company-dates > ul > #cnpj"
    ).style.backgroundColor = "transparent";

    let span_cnpj = cnpj.parentNode;
    span_cnpj.insertBefore(input_cnpj, cnpj.nextSibling);
    span_cnpj.removeChild(cnpj);

    let input_local = document.createElement("input");
    input_local.className = "par";
    input_local.id = "span-local";
    input_local.name = "span-local";
    input_local.style.color = "black";
    input_local.style.textShadow = "none";
    input_local.style.letterSpacing = "3px";
    input_local.style.textAlign = "center";

    local.style.display = "none";

    document.querySelector(
      "#company-dates > ul > #local"
    ).style.backgroundColor = "transparent";

    let span_local = local.parentNode;
    span_local.insertBefore(input_local, local.nextSibling);
    span_local.removeChild(local);

    let input_tel_fix = document.createElement("input");
    input_tel_fix.className = "par";
    input_tel_fix.id = "span-tel";
    input_tel_fix.name = "span-tel";
    input_tel_fix.style.color = "black";
    input_tel_fix.style.textShadow = "none";
    input_tel_fix.style.letterSpacing = "3px";
    input_tel_fix.style.textAlign = "center";

    tel_fix.style.display = "none";

    document.querySelector("#company-dates > ul > #tel").style.backgroundColor =
      "transparent";

    let span_tel_fix = tel_fix.parentNode;
    span_tel_fix.insertBefore(input_tel_fix, tel_fix.nextSibling);
    span_tel_fix.removeChild(tel_fix);

    let input_private = document.createElement("input");
    input_private.className = "par";
    input_private.id = "span-private";
    input_private.name = "span-private";
    input_private.style.color = "black";
    input_private.style.textShadow = "none";
    input_private.style.letterSpacing = "3px";
    input_private.style.textAlign = "center";

    tel_priv.style.display = "none";

    document.querySelector(
      "#company-dates > ul > #private"
    ).style.backgroundColor = "transparent";

    let span_private = tel_priv.parentNode;
    span_private.insertBefore(input_private, tel_priv.nextSibling);
    span_private.removeChild(tel_priv);

    let input_email = document.createElement("input");
    input_email.className = "par";
    input_email.id = "span-email";
    input_email.name = "span-email";
    input_email.style.color = "black";
    input_email.style.textShadow = "none";
    input_email.style.letterSpacing = "3px";
    input_email.style.textAlign = "center";

    email.style.display = "none";

    document.querySelector(
      "#company-dates > ul > #email"
    ).style.backgroundColor = "transparent";

    let span_email = email.parentNode;
    span_email.insertBefore(input_email, email.nextSibling);
    span_email.removeChild(email);

    let input_passw = document.createElement("input");
    input_passw.className = "par";
    input_passw.id = "span-password";
    input_passw.name = "span-password";
    input_passw.style.color = "black";
    input_passw.style.textShadow = "none";
    input_passw.style.letterSpacing = "3px";
    input_passw.style.textAlign = "center";

    password.style.display = "none";

    document.querySelector(
      "#company-dates > ul > #password"
    ).style.backgroundColor = "transparent";

    let span_passw = password.parentNode;
    span_passw.insertBefore(input_passw, password.nextSibling);
    span_passw.removeChild(password);

    /*Botão de salvar alterações*/

    let button_sav = document.createElement("button");
    button_sav.id = "save";
    button_sav.type = "submit";
    button_sav.textContent = "Salvar";

    const save = function sentNewDates() {
      setTimeout(() => {
        console.log("Dados novos enviados para o banco");

        button.insertBefore(button_edit, button_sav.nextSibling);
        button.removeChild(button_sav);
        button_edit.style.display = "block";

        /*Valores do input*/
        let input_name_val = input_company.value;
        let input_manager_val = input_manager.value;
        let input_cnpj_val = input_cnpj.value;
        let input_local_val = input_local.value;
        let input_tel_val = input_tel_fix.value;
        let input_private_val = input_private.value;
        let input_email_val = input_email.value;
        let input_passw_val = input_passw.value;

        /*Volta dos spans que estava com os novos dados*/
        let new_company = input_company.parentNode;
        new_company.insertBefore(company, input_company.nextSibling);
        new_company.removeChild(input_company);

        company.textContent = `${input_name_val}`;
        company.style.display = "block";
        document.querySelector(
          "#company-dates > ul > #name"
        ).style.backgroundColor = "rgba(98, 139, 146, 0.646)";

        let new_manager = input_manager.parentNode;
        new_manager.insertBefore(manager, input_manager.nextSibling);
        new_manager.removeChild(input_manager);

        manager.textContent = `${input_manager_val}`;
        manager.style.display = "block";
        document.querySelector(
          "#company-dates > ul > #manager"
        ).style.backgroundColor = "rgba(98, 139, 146, 0.646)";

        let new_cnpj = input_cnpj.parentNode;
        new_cnpj.insertBefore(cnpj, input_cnpj.nextSibling);
        new_cnpj.removeChild(input_cnpj);

        cnpj.textContent = `${input_cnpj_val}`;
        cnpj.style.display = "block";
        document.querySelector(
          "#company-dates > ul > #cnpj"
        ).style.backgroundColor = "rgba(98, 139, 146, 0.646)";

        let new_local = input_local.parentNode;
        new_local.insertBefore(local, input_local.nextSibling);
        new_local.removeChild(input_local);

        local.textContent = `${input_local_val}`;
        local.style.display = "block";
        document.querySelector(
          "#company-dates > ul > #local"
        ).style.backgroundColor = "rgba(98, 139, 146, 0.646)";

        let new_tel_fix = input_tel_fix.parentNode;
        new_tel_fix.insertBefore(tel_fix, input_tel_fix.nextSibling);
        new_tel_fix.removeChild(input_tel_fix);

        tel_fix.textContent = `${input_tel_val}`;
        tel_fix.style.display = "block";
        document.querySelector(
          "#company-dates > ul > #tel"
        ).style.backgroundColor = "rgba(98, 139, 146, 0.646)";

        let new_private = input_private.parentNode;
        new_private.insertBefore(tel_priv, input_private.nextSibling);
        new_private.removeChild(input_private);

        tel_priv.textContent = `${input_private_val}`;
        tel_priv.style.display = "block";
        document.querySelector(
          "#company-dates > ul > #private"
        ).style.backgroundColor = "rgba(98, 139, 146, 0.646)";

        let new_email = input_email.parentNode;
        new_email.insertBefore(email, input_email.nextSibling);
        new_email.removeChild(input_email);

        email.textContent = `${input_email_val}`;
        email.style.display = "block";
        document.querySelector(
          "#company-dates > ul > #email"
        ).style.backgroundColor = "rgba(98, 139, 146, 0.646)";

        let new_passw = input_passw.parentNode;
        new_passw.insertBefore(password, input_passw.nextSibling);
        new_passw.removeChild(input_passw);

        password.textContent = `${input_passw_val}`;
        password.style.display = "block";
        document.querySelector(
          "#company-dates > ul > #password"
        ).style.backgroundColor = "rgba(98, 139, 146, 0.646)";
      }, 1000);
    };

    button_edit.style.display = "none";

    let button = button_edit.parentNode;
    button.insertBefore(button_sav, button_edit.nextSibling);
    button.removeChild(button_edit);

    button_sav.addEventListener("click", save);
  }); //Função de editar
}); //Carregamento da página
