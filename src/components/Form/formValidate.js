//EXPRESIONES REGULARES
export const validate = (input) => {
    let errors = {}
  
    if(!input.name) {
      errors.name = 'El nombre es requerido'
    } else if(!/^[a-zA-Z0-9-() .]+$/.test(input.name)){
      errors.name = 'Solo se aceptan letras, numeros, guiones medios y parentesis'
    }
  
    if(input.image.length !== 0 && !/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(input.image)){
      errors.image='invalid URL'
    }
  
    if(!input.description) {
      errors.description = 'La descripcion es requerida'
    } else if (input.description.length > 100) {
      errors.description = 'La descripcion es muy larga. (Max = 100 caracteres)'
    }
  
    if(!input.released) {
      errors.released = 'La fecha de lanzamiento es requerida'
    }
  
    if(!input.rating) {
      errors.rating = 'El rating es requerido'
    } else if(input.rating > 5) {
      errors.rating = 'El rating no debe ser mayor a 5'
    } else if(input.rating < 0) {
      errors.rating = 'El rating no puede ser un numero negativo'
    }
  
    return errors //la funcion validate devuelve el objeto errors, ya sea vacio o con alguna propiedad si es que encuentra un error
  }

  
