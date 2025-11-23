const text = document.querySelector('h2')
text.addEventListener('click', ()=>{
    text.innerHTML = "Mandatory Step";
    text.style.background = 'red';
    text.style.color = 'blue';
})

class A{
    constructor(myForm, name, email, number) {
        this.myForm = myForm;
        this.name = name;
        this.email = email;
        this.number = number;
    }
}

init=() => {
document.getElementById(this.myForm).addEventListener('submit',this.handleSubmit);
}

const handleSubmit = (e) => {
    e.preventDefault();
    let name = document.getElementById(this.name).value;
    let email = document.getElementById(this.email).value;
    let number = document.getElementById(this.number).value;

    let isOk = true;

    if(name === '' || email === '' || number === '') {
        isOk = false;
    }
    if(isOk === false) {
        alert("Error: Fill all fields");
        return
    }
    document.getElementById(this.myForm).submit();
}


const B = new A("myForm", "name", "email", "number");
B.init();
