//var no_operator = ("none" === document.calculator.action.substr(-4));
    var first_num = true;
    function borrar(){
        /*
        document.calculator.a.value = 0;
        document.calculator.b.value = 0;
        document.calculator.action = "/none";
         */
        $('input[name=a]').val('0');
        $('input[name=b]').val('0');
        $('#calc').attr('action', '/none');
        first_num = true;
    }

    function num0(){
        if(first_num){
        document.calculator.b.value = 0;
        first_num = false;
        }
        if(document.calculator.b.value != 0)
            document.calculator.b.value+='0';
    }
    
    function num(numero){
        if(document.calculator.b.value == 0 || first_num){
            document.calculator.b.value = numero;
            first_num = false;
        }
        else
            document.calculator.b.value+= numero.toString();
    }
        
    function suma() {
        document.calculator.a.value = document.calculator.b.value;
        document.calculator.b.value = "0";
        first_num = true;
        document.calculator.action = "/getSuma";
    }

    function resta() {
        document.calculator.a.value = document.calculator.b.value;
        document.calculator.b.value = "0";
        first_num = true;
        document.calculator.action = "/getResta";
    }

    function multiplicacion() {
        document.calculator.a.value = document.calculator.b.value;
        document.calculator.b.value = "0";
        first_num = true;
        document.calculator.action = "/getProducto";
    }

    function divicion() {
        document.calculator.a.value = document.calculator.b.value;
        document.calculator.b.value = "0";
        first_num = true;
        document.calculator.action = "/getCociente";
    }