const btns = document.getElementsByClassName("nav-link");
    for (var i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", function(){
            var current = document.getElementsByClassName("active");
            var currentChildren = current[0].getElementsByTagName("hr");
            current[0].className = current[0].className.replace(" active", "");
            currentChildren[0].className = currentChildren[0].className.replace(" active-line", "");
            this.className += " active";
            this.getElementsByTagName("hr")[0].className += " active-line";
        });
    }

const injectCursorPosition = ({ x, y }) => {
        document.documentElement.style.setProperty('--x', Math.round(x))
        document.documentElement.style.setProperty('--y', Math.round(y))
    }

    document.body.addEventListener('pointermove', injectCursorPosition)