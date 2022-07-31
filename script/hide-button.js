Btn1.addEventListener('input',()=>{
    if (Btn1.checked){
        addUserField.classList.remove('hide')
        dellUserField.classList.add('hide')
        addBusField.classList.add('hide')
        dellBusField.classList.add('hide')
        dbField.classList.add('hide')
    }
})

Btn2.addEventListener('input',()=>{
    if (Btn2.checked){
        addUserField.classList.add('hide')
        dellUserField.classList.remove('hide')
        addBusField.classList.add('hide')
        dellBusField.classList.add('hide')
        dbField.classList.add('hide')
    }
})

Btn3.addEventListener('input',()=>{
    if (Btn3.checked){
        addUserField.classList.add('hide')
        dellUserField.classList.add('hide')
        addBusField.classList.remove('hide')
        dellBusField.classList.add('hide')
        dbField.classList.add('hide')
    }
})

Btn4.addEventListener('input',()=>{
    if (Btn4.checked){
        addUserField.classList.add('hide')
        dellUserField.classList.add('hide')
        addBusField.classList.add('hide')
        dellBusField.classList.remove('hide')
        dbField.classList.add('hide')
    }
})

Btn5.addEventListener('input',()=>{
    if (Btn5.checked){
        addUserField.classList.add('hide')
        dellUserField.classList.add('hide')
        addBusField.classList.add('hide')
        dellBusField.classList.add('hide')
        dbField.classList.remove('hide')
    }
})
