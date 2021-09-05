
/* Aqui ficam as definiçoes de layout do html da pagina */

/* Pra facilitar criei essa funcao que melhora a legibilidade da cracao das tags */

document.title = 'Meu Primeiro Jogo Multiplayer'

const style = document.createElement('style')

style.innerHTML = `#screen {
    border: 1px solid #CCC;
    image-rendering:pixelated;
    image-rendering:crisp-edges;
    image-rendering:-moz-crisp-edges;
    width:500px;
    height:500px;
}`
style.type = 'text/css'

const canvas = document.createElement('canvas')
canvas.id = 'screen'

document.querySelector('head').appendChild(style)
document.querySelector('body').appendChild(canvas)


export default canvas