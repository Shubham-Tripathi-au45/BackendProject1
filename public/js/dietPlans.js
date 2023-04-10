const container = document.querySelector(".container")
let btn = document.querySelector("#btn")
const plans = document.querySelector(".diet-plans")
let footer = document.querySelector(".footer")
const bmi = document.querySelector("#bmi-input")
let foot = document.querySelector(".footer")
let i=0
btn.addEventListener("click", async (req, res) => {
    let proso = await fetch("http://localhost:8000/user")
    let reso = await proso.json()
    if ((Number(bmi.value) > 0 && Number(bmi.value) < 100)&&(bmi.value!=="")){
        if(Number(bmi.value)<=18.5){i=0}
        else if(Number(bmi.value)>18.5&&Number(bmi.value)<=24.9){i=1}
        else{i=2}
        const pro = await fetch("http://localhost:8000/getDiet")
        const result = await pro.json()
        foot.classList.add("dynamic-footer")
        plans.innerHTML = `<h1 class="head1">${result[i].head}</h1>
    <h3 class="head2">Hi ${reso.name} ${result[i].description}</h3>
    <h4 class="head4">${result[i].head1}</h4>
    <div><img src=${result[i].meal1}></div>
    <h4 class="head4">${result[i].head2}</h4>
    <div><img src=${result[i].meal2}></div>
    <h4 class="head4">${result[i].head3}</h4>
    <div><img src=${result[i].meal3}></div>
    <h4 class="head4">${result[i].headPre}</h4>
    <div><img src=${result[i].preWorkout}></div>
    <h4 class="head4">${result[i].headPost}</h4>
    <div><img src=${result[i].postWorkout}></div>
    <h4 class="head4">${result[i].head5}</h4>
    <div><img src=${result[i].meal5}></div>
    <h4 class="head4">${result[i].head6}</h4>
    <div><img src=${result[i].meal6}></div>
    <subFooter>Note: Take every meal with a gap of 2.5 hrs and drink more water as <em>Hydration</em> is the key to achieve every Health Goals </subFooter>
</div>`}
    else { alert("Please enter correct BMI") }
})