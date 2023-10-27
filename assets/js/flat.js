(function(){
    //render content
    const aScene = document.querySelector('a-scene');
    const header = document.querySelector('header');
    function ActivateAll(){

        var buttons = document.querySelectorAll("article div button");

        for(let i = 0;i<buttons.length;i++){
            let el = buttons[i];
            el.addEventListener('click', showmore);
        }
    }
    function showmore(event){
        let e = event.target;
        let excerpt = e.parentNode.parentNode.childNodes[1];
        let content = e.parentNode.parentNode.childNodes[2];
        excerpt.classList.toggle('show');
        excerpt.classList.toggle('hide');
        content.classList.toggle('show');
        content.classList.toggle('hide');
    }
    ActivateAll();

    const sections = document.querySelectorAll('main > section');
    function handleScroll(e) {
        sections.forEach(ha => {
        const rect = ha.getBoundingClientRect();
        if(rect.top == 0) {
            const location = window.location.toString().split('#')[0];
            history.replaceState(null, null, location + '#' + ha.id);
            
            AFRAME.scenes[0]?.emit('changeLocation', {location:'#'+ha.id});
        }
        });
    }
    const main = document.querySelector('main');
    main.addEventListener('scroll', handleScroll);

    //when the window load, scroll
    window.onload = function(){
        if(window.location.hash){
            window.location.href = window.location.origin + window.location.pathname + '#intro'
        }
    }

    aScene.addEventListener('loaded', function () { 
        header.classList.remove('waiting');
    });
    aScene.addEventListener('renderstart', function () {
        header.classList.remove('waiting');
    });

    window.addEventListener('popstate', function(event) {
        var location = window.location.hash;  
        AFRAME.scenes[0]?.emit('changeLocation', {location});
    });


})();

function toogleNavTo(id){
    const currentUrl = window.location.href;
    if (currentUrl.includes(id)) {
        window.location.href = currentUrl.split('#')[0] + '#intro';
    } else {
        window.location.href = currentUrl.split('#')[0] + id;
    }
}

