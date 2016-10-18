DICTIONARIES = {
    es: {
        "pageTitle": "Scipy Latino América 2017 - La Habana",
        "start": "Inicio",
        "about": "Acerca de",
        "sciPyLa2017": "Scipy Latino América 2017",
        "may2017": "Mayo 2017",
        "laHavanaCuba": "La Habana, Cuba.",
        "previousEventTitle": "Ediciones previas",
        "contact": "Contacto",
        "aboutScipyLa": "Sobre Scipy Latino América 2017",
        "aboutScipyLaContent": ('SciPy Latino América 2017, es la quinta conferencia anual de computación científica con Python, ' +
                                'el encuentro sera en próximo mayo en la ciudad de la Habana, Cuba. SciPy es una comunidad dedicada ' +
                                'al avance de la computación científico a traves de software Python open-source para matemáticas, ciencia e ingeniería'),
        "venue": "Lugar",
        "venueTitle": "Lugar - La Habana",
        "venueContent": ('La Habana, capital de Cuba, es la ciudad más grande del Caribe y uno de los centros urbanos con mayor ' +
                         'riqueza cultural en el mundo, cuyo pasado colonial queda evidenciado en la variedad de impresionantes castillos, ' +
                         'catedrales, mansiones y museos. El histórico vecindario de La Habana Vieja es un fascinante sitio designado Patrimonio ' +
                         'de la Humanidad por la UNESCO, con más de 900 monumentos históricos, incluyendo el Palacio Presidencial y la Plaza de la Catedral.'),
        "readMore": "Lea más",
        "contactTitle": "Contacto",
        "mailingList": "Lista de correo",
        "homepage": "SciPy Latino América",
        "feelFreeToContactUs": "Sientase libre de contactarnos en:",
        "contactContent": ('<p>Nucleamos a los usuarios de Python en el ámbito científico, para centralizar la comunicación a nivel regional.</p>' +
                           '<p>Pretendemos llegar a usuarios, académicos y empresas, promover el uso de Python, intercambiar información, compartir experiencias ' +
                               'y en general, ser el marco de referencia local en el uso y difusión de esta tecnología en la ciencia.</p>'),
        "eventTracks": 'Talleres del evento',
        "comingSoon" : "Este contenido no ha sido publicado todavía. <br/> Le invitamos a suscribirse para recibir una notificación cuando esté disponible."
    }
}


function translate(lang, key){
    var dict = DICTIONARIES[lang];
    if(!!dict){
        var text = dict[key];
        if(!!text){
            return text;
        }
    }
    return null;
}


function localize(selector, lang){
    $(selector).each(function(idx, elem){
        var $elem = $(elem);
        var elemId = $elem.attr("id");
        var text = translate(lang, elemId);
        if(!!text){
            $("#" + elemId).html(text);
        }
    });
}


