document.getElementById('btn1').onclick = () => showModal('Eliminar', '¿Esta seguro que quiere seguir?', "Si", "No", () => {
    Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Se a eliminado correctamente',
    showConfirmButton: false,
    timer: 1500
    })
});
document.getElementById('btn2').onclick = () => showModal('Actualizar', '¿Esta seguro que desea actualizar?', "Si", "No", () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se a actualizado correctamente',
        showConfirmButton: false,
        timer: 1500
        })
});
