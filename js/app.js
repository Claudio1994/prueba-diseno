let now = new Date();
let nacimiento = new Date();

now.setMonth(now.getMonth() + 3);
let diaMaxVencimiento = `${now.getFullYear()}-${now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1 }-${now.getDate()}`;

nacimiento.setFullYear(nacimiento.getFullYear() - 18);
let diaMaxNacimiento = `${nacimiento.getFullYear()}-${nacimiento.getMonth() + 1 < 10 ? `0${nacimiento.getMonth() + 1}` : nacimiento.getMonth() + 1 }-${nacimiento.getDate()}`;

let date = new Date();

let hoy = `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1 }-${date.getDate()}`;

$("#formulario").validate({
    errorClass: "is-invalid",
    rules:{
        monto: {
            required: true,
            min: 120000,
            max: 50000000,
            step: 1
        }
        ,
        cuotas: {
            required: true,
            min: 6,
            max: 72
        }
        ,
        fvencimiento:{
            required: true,
            min: hoy,
            max: diaMaxVencimiento
        }
        ,
        run: {
            required: true,
            minlength: 9,
            maxlength: 10
        }
        ,
        celular:{
            required: true,
            maxlength: 8,
            minlength: 8
        }
        ,
        email:{
            required: true,
            email: true
        }
        ,
        nombre:{
            required: true,
            minlength: 2,
            maxlength: 70
        }
        ,
        fnacimiento:{
            required: true,
            max: diaMaxNacimiento,
        }
        ,
        renta:{
            required: true
        }
    }
    ,
    messages:{
        monto:{
            required: "El campo monto es requerido",
            min: "El monto mínimo es de $120.000",
            max: "El monto máximo es de $50.000.000",
            number: 'Ingrese un número'
        }
        ,
        cuotas:{
            required: "El campo cuotas es requerido",
            min: "El mínimo de cuotas es 6",
            max: "El máximo de cuotas es 72",
            number: 'Ingrese un número'
        }
        ,
        fvencimiento:{
            required: "Ingrese fecha de vencimiento",
            max: "La fecha máxima de vencimiento son 3 meses a contar desde hoy",
            
        }
        ,
        run:{
            required:"El run es requerido",
            minlength: "El largo mínimo es de 9 caracteres",
            maxlength: "El largo máximo es de 10 caracteres"
        }
        ,
        celular:{
            required: "El campo celular es requerido",
            maxlength: "El número de celular no puede ser mayor a 8 dígitos",
            minlength: "El número de celular no puede ser menor a 8 dígitos",
            number: "Ingrese un número válido"
        },
        email: {
            required: "El campo email es requerido",
            email: "Ingrese un emil válido"
        },
        nombre: {
            required: "El campo nombre y apellido es requerido",
            minlength: "Debe contener mínimo 2 caracteres",
            maxlength: "Debe contener máximo 70 caracteres"
        },
        fnacimiento:{
            required: "El campo fecha de nacimiento es requerido",
            max: "Debes ser mayor de edad",
            min: "Ingrese una fecha válida"
        },
        renta: {
            required: "El campo renta es requerido"
        }

    }
});

$("#formulario").submit(function(){

    let run = $("#run").val();

    if(run.length > 1){
        if(run.split('.').length > 1){
            alert("El run debe no debe contener puntos");
            return;
        }else if(run.split('-').length != 2){
            alert("El run debe contener un guión");
            return;
        }else if(run.split('-')[1].length > 1){
            alert("Ingrese un run correcto");
            return;
        }
    }
    
    if($(this).valid()){
        console.log("Es valido!!!!")
    
        datos = $(this).serializeObject()
        console.log(datos)

        // $("#data").append(`
        // <tr>
        //     <th>${datos.monto}</th>
        //     <th>${datos.cuotas}</th>
        //     <th>${datos.fvencimiento}</th>
        //     <th>${datos.run}</th>
        //     <th>${datos.peso ? 'si' : 'no'}</th>
        //     <th>${datos.estatura}</th>
        //     <th>${datos.peso}</th> 
        //     <th>${datos.actividad}</th>
        // </tr>
        // `)
    }else{
        console.log("Faltan datos por validar")
    }


    return false;
});


$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();

    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};