var curso = document.getElementsByName('curso')

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

function Clicar() {
    if (document.compra.nome.value=="" || document.compra.email.value=="" || document.compra.tel.value=="" || document.compra.cep.value=="" || document.compra.tel.value.length > 12 || document.compra.cep.value.length > 11 ) {
        alert("Há algum campo não preenchido ou não preenchido corretamente")
    } else {
        if (curso[0].checked) {
            alert("Seja Bem-Vindo(a) ao curso de Programação")
        } 
        
        if (curso[1].checked) {
            alert("Seja Bem-Vindo(a) ao curso de Enfermagem")
        } 
        
        if (curso[2].checked) {
            alert("Seja Bem-Vindo(a) ao curso de Mecatrônica")
        } 
        
        if (curso[3].checked) {
            alert("Seja Bem-Vindo(a) ao curso de Administração")
        } 
        
        if (curso[4].checked) {
            alert("Seja Bem-Vindo(a) ao curso de Contabilidade")
        } 
        
        else {
            return false;
        }
    }   
    
} 