function ingresar ()
{
    var usuario="Maria";
    var contraseña= "examen";


    if(document.formingreso.txtusuario.value==usuario &&
         document.formingreso.txtcontraseña.value==contraseña)
    {
        document.location="./html/Inicio.html"
    }

    else
    {
       alert("Ingrese sus datos correctamente") 
    }

}