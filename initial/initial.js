window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splash').classList.toggle('fade');
        setTimeout(() =>{
            document.getElementById('splash').style.display = 'none';
        },3000)
    }, 2000);
    
})