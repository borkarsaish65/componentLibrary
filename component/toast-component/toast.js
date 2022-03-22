function openToast(event){

    let target = event.target;
    let id = target.getAttribute('data-target');
    let toast = document.querySelector(id);

    toast.classList.remove('hide')
    toast.classList.add('show')

    setTimeout(()=>{
        toast.classList.remove('show')
        toast.classList.add('hide')

    },2000)
}