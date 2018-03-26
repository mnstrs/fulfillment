// import fonts from './vendors/fontLoader'

import app from './app'

app()

// function setStage(){
    
//     const resultsTableWrp = document.querySelector(".results-table-wrp");
//     const btns = document.querySelectorAll('.details-btn')
//     const scrollTable = document.querySelector('.scroll-table')
//     const details = document.querySelector('.details')

//     const state = {
//         el : null,
//         open : false
//     } 


//     function showDetails(e){

//         const rowEl = e.target.parentNode.parentNode

//         if(state.el !== rowEl){
//             state.el = rowEl
//             state.open = true
//             resultsTableWrp.classList.add("showingDetails");
//             rowEl.classList.add('current')
//             scrollTable.classList.add('no-scroll')
//         }else if(state.el === rowEl && state.open === true){
//             state.el = null
//             state.open = false
//             resultsTableWrp.classList.remove("showingDetails");
//             rowEl.classList.remove('current')
//             scrollTable.classList.remove('no-scroll')
//         }

//     }

//     forEach(btns, btn => btn.addEventListener('click', showDetails))

// }


// setStage()

