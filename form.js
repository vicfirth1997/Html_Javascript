const nameField=document.getElementById("name");
    if(nameField) {
        nameField.addEventListener("focusout",()=>{
            let nameField=document.getElementById("name");
            if(nameField.value==0) {
       
                alert("Mandatory Field");
            }
        })
    }

    const emailField=document.getElementById("email");
    if(emailField) {
        emailField.addEventListener("focusout",()=>{
            let emailField=document.getElementById("email");
            if(emailField.value==0) {
                alert("Mandatory Field");
            }
        })
    }

    const passwordField=document.getElementById("password");
    if(passwordField) {
        passwordField.addEventListener("focusout",()=>{
            let passwordField=document.getElementById("password");
            if(passwordField.value==0) {
                alert("Mandatory Field");
            }
        })
    }


  function afterCheckedRadioButton(id) {
      document.getElementById(id).checked=true;
      for(let i=0;i<2;++i) {
          if(i+1===id) {
              continue;
          }
          document.getElementById(i+1).checked=false;
      }
  }

  const submitButton=document.getElementById("submit");
  //console.log(submitButton);
  if(submitButton) {
    submitButton.addEventListener("click",()=>{
        const mandatoryIds=["name","email","password"];
        for(let i=0;i<mandatoryIds.length;++i) {
            if(document.getElementById(mandatoryIds[i]).value==0) {
                alert(mandatoryIds[i] +"is a mandatory field")
            }
        }
    })
  }
 