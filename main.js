
//Animation of underscore, at the logo
const underscore = document.querySelector('#underscore')
let underscoreState = true
function underscoreRepeat(){
    if (underscoreState){
        underscore.style.opacity = 0
        underscoreState = false
    }else{
        underscore.style.opacity = 1
        underscoreState = true
    }
}setInterval(underscoreRepeat, 500)




