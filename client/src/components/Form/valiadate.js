



export const validateForm = (obj) => {
    const errors = {};
    if(obj.temporada === "seleccionar") errors.temporada = "Seleccione una temporada"
    if(obj.duracion > 24) errors.duracion = "La duracion no puede pasar las 24hs"
    if(obj.duracion <= 0) errors.duracion = 'La duracion minima es de 1hs'
    if(obj.name.length < 3)errors.name = "El nombre de la actividad no puede ser menor a 3 caracteres"
    if(obj.name.length > 30)errors.name = "El nombre de la actividad no puede pasar los 20 caracteres"
    if(obj.dificultad === "seleccionar") errors.dificultad = "Seleccione la dificultad"
    return errors;
}