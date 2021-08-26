const a = document.getElementById('identify-requirements')
const b = document.getElementById('request-quotation')
const c = document.getElementById('find-products')
const d = document.getElementById('raise-order')
const e = document.getElementById('authorise-sale')
const f = document.getElementById('pay-provider')
const g = document.getElementById('deliver-product')
const h = document.getElementById('invoice-check')
const i = document.getElementById('place-order')

let toggleA = 'off'
let toggleB = 'off'
let toggleC = 'off'
let toggleD = 'off'
let toggleE = 'off'
let toggleF = 'off'
let toggleG = 'off'
let toggleH = 'off'
let toggleI = 'off'

const supplier_product = document.getElementById('supplier_product')
const quotation_order_process = document.getElementById('quotation_order_process')
const expediting_receiving_orders = document.getElementById('expediting_receiving_orders')
const processing_invoices = document.getElementById('processing_invoices')
const paying_suppliers = document.getElementById('paying_suppliers')
const total_process_costs = document.getElementById('total_process_costs')

const calresults = document.getElementById('calresults')
const reset = document.getElementById('reset')


document.addEventListener('DOMContentLoaded', () => {
  

let total = 0
const totalamount = document.getElementById('totalamount')

//Button toggles 
a.addEventListener('click', () => {
  if(toggleA === 'off'){
    toggleA = 'on'
    total += 6
    totalamount.innerHTML = '£ '+ Math.round(total*100)/100
    a.classList.add('on')
  } else {
    toggleA = 'off'
    total -= 6
    totalamount.innerHTML = '£ ' + Math.round(total * 100) / 100
    a.classList.remove('on')
  }
})
b.addEventListener('click', () => {
  if(toggleB === 'off'){
    toggleB = 'on'
    total += 3
    totalamount.innerHTML = '£ ' + Math.round(total * 100) / 100
    b.classList.add('on')
  } else {
    toggleB = 'off'
    total -= 3
    totalamount.innerHTML = '£ ' + Math.round(total * 100) / 100
    b.classList.remove('on')
  }
})
c.addEventListener('click', () => {
  if(toggleC === 'off'){
    toggleC = 'on'
    total += 16
    totalamount.innerHTML = '£ ' + Math.round(total * 100) / 100
    c.classList.add('on')
  } else {
    toggleC = 'off'
    total -= 16
    totalamount.innerHTML = '£ ' + Math.round(total * 100) / 100
    c.classList.remove('on')
  }
})
d.addEventListener('click', () => {
  if(toggleD === 'off'){
    toggleD = 'on'
    total += 6
    totalamount.innerHTML = '£ ' + Math.round(total * 100) / 100
    d.classList.add('on')
  } else {
    toggleD = 'off'
    total -= 6
    totalamount.innerHTML = '£ ' + Math.round(total * 100) / 100
    d.classList.remove('on')
  }
})
e.addEventListener('click', () => {
  if(toggleE === 'off'){
    toggleE = 'on'
    total += 21.55
    totalamount.innerHTML = '£ ' + Math.round(total * 100) / 100
    e.classList.add('on')
  } else {
    toggleE = 'off'
    total -= 21.55
    totalamount.innerHTML = '£ ' + Math.round(total * 100) / 100
    e.classList.remove('on')
  }
})
f.addEventListener('click', () => {
  if(toggleF === 'off'){
    toggleF = 'on'
    total += 13
    totalamount.innerHTML = '£ ' + Math.round(total * 100) / 100
    f.classList.add('on')
  } else {
    toggleF = 'off'
    total -= 13
    totalamount.innerHTML = '£ ' + Math.round(total * 100) / 100
    f.classList.remove('on')
    console.log(total)
  }
})
g.addEventListener('click', () => {
  if(toggleG === 'off'){
    toggleG = 'on'
    total += 4.3
    totalamount.innerHTML = '£ ' + Math.round(total * 100) / 100
    g.classList.add('on')
  } else {
    toggleG = 'off'
    total -= 4.3
    totalamount.innerHTML = '£ ' + Math.round(total * 100) / 100
    g.classList.remove('on')
  }
})
h.addEventListener('click', () => {
  if(toggleH === 'off'){
    toggleH = 'on'
    total += 6
    totalamount.innerHTML = '£ ' + Math.round(total * 100) / 100
    h.classList.add('on')
  } else {
    toggleH = 'off'
    total -= 6
    totalamount.innerHTML = '£ ' + Math.round(total * 100) / 100
    h.classList.remove('on')
  }
})
i.addEventListener('click', () => {
  if(toggleI === 'off'){
    toggleI = 'on'
    total += 6.5
    totalamount.innerHTML = '£ ' + Math.round(total * 100) / 100
    i.classList.add('on')
    console.log(toggleI)
  } else {
    toggleI = 'off'
    total -= 6.5
    totalamount.innerHTML = '£ ' + Math.round(total * 100) / 100
    i.classList.remove('on')
  }
})

  //question1
  const answer1 = document.getElementById('answer1')
  let input1

  answer1.addEventListener('input', (e) => {
    e.preventDefault
    input1 = e.target.value
    console.log(input1)
  })

  //question2
  const answer2 = document.getElementById('answer2')
  let input2

  answer2.addEventListener('input', (e) => {
    e.preventDefault
    input2 = e.target.value
    console.log(input2)
  })

  //question3
  const answer3 = document.getElementById('answer3')
  let input3

  answer3.addEventListener('input', (e) => {
    e.preventDefault
    input3 = e.target.value
    console.log(input3)
  })

  //results
  calresults.addEventListener('click', () =>{
   
    let a_value = 0
    let b_value = 0
    let c_value = 0
    let d_value = 0
    let e_value = 0
    let f_value = 0
    let g_value = 0
    let h_value = 0
    let i_value = 0
    let total1
    let total2
    let total3
    let total4
    let total5


    if (toggleA === "on"){
      a_value = 6
    }
    if (toggleB === "on"){
      b_value = 3
    }
    if (toggleC === "on"){
      c_value = 16
    }
    if (toggleD === "on"){
      d_value = 6
    }
    if (toggleE === "on"){
      e_value = 21.55
    }
    if (toggleF === "on"){
      f_value = 13
    }
    if (toggleG === "on"){
      g_value = 4.3
    }
    if (toggleH === "on"){
      h_value = 6
    }
    if (toggleI === "on"){
      i_value = 6.5
    }
    if(input2){
       total1 = Math.round(input2 * (a_value + b_value) * 100) / 100
       total2 = Math.round(input2 * (c_value + d_value + e_value + f_value) * 100) / 100
       total3 = Math.round(input2 * h_value * 100) / 100
    } else {
      window.alert('please enter a value for question 2')
    }
    if(input1){
       total4 = Math.round(input1 * g_value * 100) / 100
    } else{
      window.alert('please enter a value for question 1')
    }
    if(input3){
      total5 = Math.round(input3 * i_value * 100) / 100
    } else {
      window.alert('please enter a value for question 3')
    }
    
    if(input1&&input2&&input3){
      supplier_product.innerHTML = '£ ' + total1
      quotation_order_process.innerHTML = '£ ' + total2
      processing_invoices.innerHTML = '£ ' + total3
      expediting_receiving_orders.innerHTML = '£ ' + total4
      paying_suppliers.innerHTML = '£ ' + total5

      total_process_costs.innerHTML = '£ ' + (total1 + total2 + total3 + total4 + total5)
    }
    

    reset.addEventListener('click', () =>{
      supplier_product.innerHTML = '£ 0.00'
      quotation_order_process.innerHTML = '£ 0.00'
      processing_invoices.innerHTML = '£ 0.00'
      expediting_receiving_orders.innerHTML = '£ 0.00'
      paying_suppliers.innerHTML = '£ 0.00'
      total_process_costs.innerHTML = '£ 0.00'
    })





  })
  
})

