let input = document.querySelector("input");
let heading = document.getElementById("heading");
let buttons = document.querySelectorAll("button");


buttons[1].style.color = "#FF0060";


buttons.forEach((button) => {

    // Add click event on all button
    button.addEventListener("click", () => {

        // add a click efect class on a cliked button, and remove the class after 300ms
        button.classList.add("clicked");
        setTimeout(() => {
            button.classList.remove("clicked");
        }, 300)

        

        // Add the value on the input field by click button

        let btn_Value = button.textContent;

        if(btn_Value != "=" && btn_Value != "AC" && btn_Value != "DE"){
            input.value += btn_Value;
        }


        // remove all Charecter
        if(btn_Value == "AC"){
            input.value = "";
        }


        // Delete a last single Charecter
        if(btn_Value == "DE"){
            let value = input.value;
            input.value = value.slice(0, -1);
            
        }
        


        // Get the result by cliked a equal operator, and when get a error , the error is shown
        if(btn_Value == "="){

            try{
                let value = input.value;
                input.value =  eval(value);

                if(input.value == "undefined"){
                    
                    setTimeout(() => {input.value = "";}, 2000) 
                    throw "Emty Input";
                }
                
            }catch(err){
                if(err.name == "SyntaxError"){
                    err.name = "Calculation Error";
                    heading.innerText = err.name;
                }

                if(err == "Emty Input"){
                    heading.innerText = err;
                }
               
                heading.style.color = "red";
                input.style.color = "red";

                setTimeout(() => {
                    heading.innerText = "Calculator";
                    heading.style.color = "#060047";
                    input.style.color = "#000";
                }, 2000)  
            }
        }



        // remove double same Operater, and replace the last oparetor when click another opereter in the last
        let lastValue = input.value.slice(-1, input.value.length);
        let lastPreValue = input.value.slice(-2, -1);

        if(btn_Value == "." || btn_Value == "/" || btn_Value == "*" || btn_Value == "+" || btn_Value == "-"){

            if(lastPreValue == lastValue){
                input.value = input.value.slice(0, -1); 

            }else if(lastPreValue == "/" || lastPreValue == "*" || lastPreValue == "+" || lastPreValue == "-"){                
                input.value = input.value.slice(0, -2) + input.value.slice(-1);
            }

        }

    });

    
})





