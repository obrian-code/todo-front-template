const container_items = document.querySelector(".container-items");
const container_icon = document.querySelector(".container-icon");
const items_menu = document.querySelector(".container-items-menu");

let cont;

container_items.addEventListener("click", function () {
    container_icon.classList.replace("fa-regular", "fa-solid");
    items_menu.style = "display: flex;";
})


const btn_trash = document.querySelector(".fa-trash");


btn_trash.addEventListener("click", function () {
    Swal.fire({
        title: '¿Deseas eliminar esta Tarea?',
        confirmButtonColor: 'var(--color-Primary)',
        showCancelButton: true,
        showLoaderOnConfirm: true,
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
            container_icon.classList.replace("fa-solid", "fa-regular");
            items_menu.style = "display: none;";
        }
    })

})


const btn_edit = document.querySelector(".fa-pen-to-square");


btn_edit.addEventListener("click", function () {
    console.log("edit")
    Swal.fire({
        title: 'Editar Tarea',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        confirmButtonColor: 'var(--color-Primary)',
        showCancelButton: true,
        showLoaderOnConfirm: true,
    }).then((result) => {
        if (result.isConfirmed) {
            container_icon.classList.replace("fa-solid", "fa-regular");
            items_menu.style = "display: none;";
        }
    })

})

const btn_newTask = document.querySelector(".btn");

btn_newTask.addEventListener("click", function () {

    console.log("Crear")
    Swal.fire({
        title: 'Crear Tarea',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        confirmButtonColor: 'var(--color-Primary)',
        showCancelButton: true,
        showLoaderOnConfirm: true,
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Save!',
                'Your file has been save.',
                'success'
            )
        }
    })

});

let menu = document.querySelector('.menu');

menu.addEventListener('click', function () {

    document.querySelector('.menu_text').classList.toggle('toggle');
});