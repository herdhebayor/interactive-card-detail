/** @format */
const inputs = document.querySelectorAll('input')
const expiryInput = document.querySelectorAll('.expiry-val')
const submitBtn = document.getElementById("submit");

inputs.forEach((input) => {
	input.addEventListener('input', (e) => {
	const mo = document.querySelector('.mo');
	const yr = document.querySelector(".yr");
    if(e.target.className.includes("invalid") && !e.target.value ==""){
        e.target.classList.remove("invalid")
    }
		if (e.target.id == 'name') {
			document.querySelector('.holder-name').innerHTML =
				e.target.value
		} else if (e.target.id == 'card-num') {
			const cardNumOutput = document.querySelector('.card-number')
			if (!e.target.value) {
				cardNumOutput.innerHTML = '0000 0000 0000 0000';
			} else {
				const valueOfInput = e.target.value.replaceAll(' ', '')
					if(e.target.value.length > 14) {
					e.target.value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4')
					cardNumOutput.innerHTML = e.target.value.replace(
						/(\d{4})(\d{4})(\d{4})(\d{4})/,	'$1 $2 $3 $4')
					cardNumOutput.innerHTML = e.target.value.replace(
						/(\d{4})(\d{4})(\d{4})(\d{4})/,
						'$1 $2 $3 $4'
					)
				} else if (e.target.value.length > 9) {
					e.target.value.replace(/(\d{4})(\d{4})(\d{4})/, '$1 $2 $3')
					cardNumOutput.innerHTML = e.target.value.replace(
						/(\d{4})(\d{4})(\d{4})/,
						'$1 $2 $3'
					)
				} else if (e.target.value.length > 4) {
					e.target.value.replace(/(\d{4})(\d{0,4})/, '$1 $2')
					cardNumOutput.innerHTML = e.target.value.replace(
						/(\d{4})(\d{0,4})/,
						'$1 $2'
					)
				} else {
					cardNumOutput.innerHTML = valueOfInput
				}
			}
		} else if (e.target.id == 'cvx-num') {
		     document.querySelector('.cvx-number').innerHTML=
		     e.target.value
    }else if(e.target.id == "month"){
    mo.innerHTML =  e.target.value
        if(e.target.value.length >= 2){
		    e.target.nextElementSibling.focus()
		}
    } else if (e.target.id == "year"){
        yr.innerHTML = e.target.value
        if (document.getElementById("year").value.length >= 2){
            document.getElementById("cvx-num").focus()
    }}
})
})


submitBtn.addEventListener("click",  function validateForm(e){
        e.preventDefault()
        
       const name = document.getElementById("name")
        const cardNum = document.getElementById("card-num")
       const expMo = document.getElementById("month")
        const expYr = document.getElementById('year')
       const cvxNum = document.getElementById("cvx-num")
      let errorCont = document.createElement("div")
      errorCont.setAttribute("class", "errorMsg")
      if(name.value == ""){
        errorCont.innerHTML = "can't be blank"
        name.parentElement.appendChild(errorCont)
        name.classList.add("invalid")
        return;
      }
      else if(cardNum.value == "" || cardNum.value.includes(isNaN)){
        errorCont.innerHTML = "wrong format, numbers only"
        cardNum.parentElement.appendChild(errorCont)
        cardNum.classList.add('invalid')
        return;
        }
    else if(expMo.value == "" || expMo.value>12 || expYr.value == "" ){
        errorCont.innerHTML = "input is blank or wrong input"
        document.querySelector(".exp").appendChild(errorCont)
        expMo.classList.add('invalid')
        expYr.classList.add('invalid')

        }
    else if(cvxNum.value == ""){
        errorCont.innerHTML = "can't be blank"
        cvxNum.parentElement.appendChild(errorCont)
        cvxNum.classList.add('invalid')
        return
    }
    else{
        document.querySelector(".form-container").style.display = "none"
        document.querySelector(".confirmation-page").style.display = "block"
    }
}
)
    document.getElementById('reset').addEventListener('click', () => {
		window.location.reload()
	})