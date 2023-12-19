let deadCounter = parseInt(document.getElementById(`dead`).textContent);
let lostCounter = parseInt(document.getElementById(`lost`).textContent);
const hole = document.getElementsByClassName(`hole`);

document.addEventListener('click', function(event) {
        
    let clickHole = document.getElementById(`${event.target.id}`);
    
    if (clickHole.classList.contains( 'hole_has-mole' )) {
        deadCounter += 1;
        dead.textContent = (`${deadCounter}`);        
    } else {
        lostCounter +=1;
        lost.textContent = (`${lostCounter}`); 
    }
    if (deadCounter == 10 || lostCounter == 5) {
        checkStatus();
        deadCounter = 0;
        lostCounter = 0;
        dead.textContent = `${deadCounter}`;
        lost.textContent = `${lostCounter}`;
    }
    
});

const checkStatus = () => {
    if (deadCounter === 10) {
        alert(`Победа!`);
    } else if (lostCounter === 5) {
        alert(`Вы проиграли`);
    }
};
