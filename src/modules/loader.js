function loader() {
    // LOADER
    const elLoader = document.querySelector('.loader');
    
    setTimeout(() => {
        elLoader.style.opacity = '0'
        setTimeout(() => {
            elLoader.style.display = 'none';
        }, 500)
    }, 1000);
}

export default loader;