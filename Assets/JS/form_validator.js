function Validator(options){
    function validate(inputElement,rule){
        var errorElement= inputElement.parentElement.querySelector(options.errorSelector)
        var errorMessage = rule.test(inputElement.value);
        
        if(errorMessage){
            errorElement.innerText=errorMessage;
            inputElement.parentElement.classList.add('invalid')
            inputElement.parentElement.classList.remove('input-invalid');
        }else{
            errorElement.innerText=''
            inputElement.parentElement.classList.remove('invalid')
        }
    }
    var formElement = document.querySelector(options.form);

    if(formElement){
        options.rules.forEach(function (rule){
            var inputElement = formElement.querySelector(rule.selector)
            if(inputElement){
                inputElement.onblur=function(){
                    validate(inputElement,rule);
                }

                inputElement.oninput= function(){
                    var errorElement= inputElement.parentElement.querySelector(options.errorSelector)
                    errorElement.innerText='';
                    inputElement.parentElement.classList.remove('invalid');
                    inputElement.parentElement.classList.add('input-invalid');
                }
            }
        })
    }
}

Validator.isEmailPhone= function(selector){
    return{
        selector:selector,
        test: function(value){
            var flag=0;
            var email_regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var phone_regex=/((09|03|07|08|05)+([0-9]{8})\b)/g;
            if(email_regex.test(value)||phone_regex.test(value)){
                flag=1;
            }
            return flag===1 ? undefined:'Trường này phải là email hoặc số điện thoại'
        }
    }
}