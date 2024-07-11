//    tooltip
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


//    alert cuando se hace click
    // document.getElementById("#submitMessage");
    $("#submitMessage").click(function(){
        alert("Mensaje enviado");

    });

    // Desaparecer texto al hacer click en icono
    $("#airPlane").on("click", function() {
        $( "#textAirPlane" ).toggle("slow");
    });

    $("#mountain").on("click", function() {
        $( "#textMountain" ).toggle("slow");
    });  

    $("#route").on("click", function() {
        $( "#textRoute" ).toggle("slow");
    });

