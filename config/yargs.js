const argumentos = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('actualizar', 'Actualiza el estado de una tarea a completado', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca la tarea como completada'
        }
    })
    .command('borrar', 'Borra una tarea especifica', {
        descripcion: {
            demand: true,
            alias: 'b'
        }
    })
    .help()
    .argv;


module.exports = {
    argumentos
}