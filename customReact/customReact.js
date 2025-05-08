function customRender(reactElement,container){
    // const domEle = document.createElement(reactElement.type)
    // domEle.innerHTML=reactElement.children
    // domEle.setAttribute('href',reactElement.props.href)
    // domEle.setAttribute('target',reactElement.props.target)
    // container.appendChild(domEle)

    const domEle = document.createElement(reactElement.type)
    domEle.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
       domEle.setAttribute(prop,reactElement.props.prop)
    }
    domEle.style.textDecoration="none"
    container.appendChild(domEle)
}



const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_balnk'

    },
    children:'Click me to visit google'

}
const mainCon = document.getElementById('root')

customRender(reactElement,mainCon)