var i18n = {

    //~ =======================================================================
    //~ DICTS
    //~ =======================================================================

    DICTIONARIES: {
        es: {
            "pageTitle": "XXX ENDIO - XXVII EPIO - Córdoba 2017",
            "start": "Inicio",
            "about": "Acerca de",
            "contact": "Contacto",
            "venue": "Lugar",
            "may2017": "29, 30 y 31 de Mayo del 2017",
            "cordobaArgentina": "Córdoba, Argentina",
            "previousEventTitle": "Ediciones previas",
            "venueTitle": "Lugar - Córdoba",
            "venueContent": ('Córdoba es un importante centro cultural, económico, educativo, financiero, turístico y de ' +
                             'entretenimiento. Fundada el 6 de Julio de 1573 por Don Jerónimo Luis de Cabrera y dueña de una ' +
                             'rica historia, la ciudad de Córdoba es uno de los destinos elegidos por miles de turistas. ' +
                             'Su privilegiada ubicación en el centro de la República Argentina y a los pies de una ' +
                             'cadena montañosa que ostenta diversos destinos turísticos. Tiene una historia muy rica, ' +
                             'caracterizada por eventos trascendentes como la creación de la primera Universidad, ' +
                             'la Academia Nacional de Ciencias, la Reforma Universitaria de 1918, que estructuró la ' +
                             'Universidad Argentina actual o el movimiento popular conocido como el “Cordobazo”, ' +
                             'ocurrido en 1969.'),
            "readMore": "Lea más",
            "contactTitle": "Contacto",
            "mail": "Correo electrónico",
            "homepage": "EPIO",
            "feelFreeToContactUs": "Sientase libre de contactarnos en:",
            "contactContent": ('<p>Nucleamos a  especialistas en investigación operativa  en el ámbito científico, para centralizar la ' +
                               'comunicación a nivel nacional. Pretendemos llegar a estudiantes,  docentes, investigadores y empresas para ' +
                               'promover el uso de herramientas de investigación operativa y posibilitar el intercambio de información y ' +
                               'experiencias.</p>'),
            "aboutENDIO_EPIO": "Sobre XXX ENDIO - XXVII EPIO",
            "aboutENDIO_EPIOContent": ('Los Encuentros Nacionales De Docentes en Investigación Operativa (ENDIO) y las Jornadas de la ' +
                                       'Escuela de Perfeccionamiento en Investigación Operativa (EPIO),  congregan a docentes, investigadores, ' +
                                       'estudiantes de grado y de postgrado de diferentes carreras universitarias y por tanto, con perfiles ' +
                                       'y orígenes curriculares diversos. Ingenieros de distintas especialidades, Contadores y Licenciados ' +
                                       'en Administración, Matemáticos, Analistas en Sistemas, constituyen las profesiones más frecuentes ' +
                                       'entre los asistentes. En su mayoría, se desempeñan en asignaturas tales como Investigación Operativa, ' +
                                       'Investigación de Operaciones, Métodos Cuantitativos, Modelos y Simulación, Estadística, Operaciones, ' +
                                       'Logística, entre otras, o realizan posgrados vinculados con esas temáticas.'),
            "xxx_endio": "XXX ENDIO",
            "xxx_endio_long": "Encuentro Nacional de Docentes en Investigación Operativa",
            "xxvii_epio": "XXVII EPIO",
            "xxvii_epio_long": "Escuela de Perfeccionamiento en Investigación Operativa",
            "instructions": "Modalidades para la presentación de trabajos",
            "instructionsContent": ("<p>Se contemplan las siguientes modalidades:</p>"+
                                    "<ul>" +
                                    "<li><p>Resumen de  a lo sumo trescientas palabras. El Resumen debe estar " +
                                         "acompañado por cinco Referencias, que ayuden a ubicar sobre el marco " +
                                         "conceptual del tema a tratar.</p></li>" +
                                    "<li><p>Un trabajo completo, de hasta 8 páginas, incluyendo referencias.</p></li>" +
                                    "</ul>" +
                                    "<p>Para que el documento presentado se publique en los pre-anales y anales, al " +
                                    "menos uno de los autores debe abonar la inscripción y defender el trabajo " +
                                    "durante el evento.</p>")
        }
    },


    //~ =======================================================================
    //~ LANGUAGE CONSTANTS
    //~ =======================================================================

    PARAMS_LANG: function() {
      // This function is anonymous, is executed immediately and
      // the return value is assigned to QueryString!
      var query_string = {};
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
            // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
          query_string[pair[0]] = decodeURIComponent(pair[1]);
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
          var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
          query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
          query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
      }
      return query_string;
    }().lang,

    BROWSER_LANG: navigator.language.split("-", 1)[0].toLowerCase(),


    //~ =======================================================================
    //~ FUNCTIONS
    //~ =======================================================================

    translate: function(lang, key, verbosity){
        var dict = i18n.DICTIONARIES[lang];
        if(!!dict){
            var text = dict[key];
            if(!!text){
                return text;
            }
        }
        if(verbosity)
            console.error("key '" + key + "' not found in language '" + lang + "'.");
        return null;
    },

    localize: function(selector, lang, verbosity){
        $(selector).each(function(idx, elem){
            var $elem = $(elem);
            var elemId = $elem.attr("id");
            var text = i18n.translate(lang, elemId, verbosity);
            if(!!text){
                $("#" + elemId).html(text);
            }
        });
    }
}
