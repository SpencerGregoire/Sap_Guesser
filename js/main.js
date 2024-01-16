const petList = Array.from(createList());
let dailyPet = petDb[Math.floor(Math.random() * petDb.length)];
const guessButton = document.querySelector('.guessButton')
let selection = ''

petList.forEach(pet => {
    pet.addEventListener('click', storePet)
})
const input = document.querySelector("input");
document.querySelector('.tryAgain').addEventListener("click",refreshPage )
// document.addEventListener('click', function(e){   
//     const ul = document.querySelector('ul')
//     if (!(ul.contains(e.target) || input.contains(e.target))){
//       ul.classList.add('hidden')
//     } 
//   });

document.addEventListener('click', hideUl)

input.addEventListener("click", showUl)
input.addEventListener("input", filterList);

guessButton.addEventListener('click', makeGuess)

function refreshPage(){
    window.location.reload();
}

//Populates list of possible pet guesses.
//Returns the generated list to be filtered
function createList(){
    let list= document.querySelector('ul')
    for(pet of petDb){
        
        let newItem = document.createElement('li')
        let newSpan = document.createElement('span')
        let newImg = document.createElement('img')
        let newContent = document.createTextNode(pet.name)
        newImg.src = getPetImg(pet)
        newSpan.classList.add('ignoreClick')
        newImg.classList.add('ignoreClick')
        newSpan.appendChild(newContent)

        newItem.appendChild(newImg)
        newItem.appendChild(newSpan)
        
        // newItem.classList.add('hidden')

        list.appendChild(newItem)
       
    }

    return document.querySelectorAll('li')
}


function filterList(){
    const filterStr = input.value.toLowerCase() 
    removeHidden()
    if(filterStr === ""){

    }

    else{
      let temp = petList.filter(pet =>!(pet.querySelector('span').textContent.toLowerCase().includes(filterStr)))
      for(pet of temp){
        pet.classList.add('hidden')
      }  
    }
}


//Function to assist with the showing and hiding of the list
//Show ul will show the pet list when clicking on the form
function showUl(){
    const ul = document.querySelector('ul')
    ul.classList.remove('hidden');
}


//This function will hide the ul when clicking outside the form or list
function hideUl(event){
    const ul = document.querySelector('ul')
    if (!(ul.contains(event.target) || input.contains(event.target))){
      ul.classList.add('hidden')
    } 
  }
  

//Helper function for searching the list
function removeHidden(){
    for(pet of petList){
        pet.classList.remove('hidden')
    }
}


//Helper function for createList. Generates file paths of images from pet objects
function getPetImg(pet){
    let url = ''
    let tempName = pet.name
    if(pet.name.includes(' ')){
        tempName = replaceSpaces(pet.name)
    }
    url = `../assets/img/tier${pet.tier}/${tempName}.webp`
    return url;
}


//Helper function for getPetImg. Replaces spaces in pet names with underscores to so match up pet names with image file names
//Calls itself recursively if a name has multiple spaces.
function replaceSpaces(str){
    if(str.includes(' ')){
        str = str.replace(' ', '_')
        return replaceSpaces(str)
    }

    else{
        return str;
    }
}

//Store the clicked pet in a global variable to be guessed
function storePet(event){
    selection = event.target
    
    input.value = selection.textContent
    document.querySelector('ul').classList.add('hidden')
}


//Completes one cycle of the game.
//Write the user guess to the table and compares the values to the daily pet
//If all values are the same the game will end and the user will have won
//If not all values are the same. The games continues and the guess counter ticks down by 1
function makeGuess(){
    selection = getPet(input.value)
    if(!selection){
        alert('Please enter a valid pet.')  //Should only trigger if the input is empty or an incorrect value is manually entered
        removeHidden()
        return;
    }
    
    writeTable(selection)
    input.value = ''
    removeHidden()

    if(selection.name == dailyPet.name){
        fillEndCard();
        victory();
    } 

    else{
        decrementGuessCounter()
    }

    
}


//Helper function for make guess
//Grabs the pet object from the data file based on the user inputed name
//If the name does not appear in the table returns false to throw an error message.
function getPet(petName){
    for(pet of petDb){
        if(pet.name.toLowerCase() == petName.toLowerCase()){
           return pet
        }
    }
    return false
}
//Writes the selected pet to the table applying classes to the each for wrong and write guesses
function writeTable(pet){
    let table = document.querySelector('table')
    let newRow = table.insertRow(-1)
    for(data of dataTypes){
        let rowData = pet[data]
        let newCell = newRow.insertCell(-1)
        let newText = document.createTextNode(rowData)
        newCell.classList.add(checkGuess(data),'newTr')
        newCell.appendChild(newText)
    }
}

//Helper function for writeTable. Adds classes to each table cell through comparisions of the user selected guess and the dail pet
//None means the data didnt match between the selected guess and the daily pet
//Some means there is a partial match in the data(Should only appear on cells in the pack column)
//All means the data is the same
//These classes are used to style the cells differently 
function checkGuess(data){
    let check = 'none'
    if(selection[data] == dailyPet[data]){
        check = "all"
    }

    if(data == 'pack'){
       check = comparePacks(selection[data], dailyPet[data])
    }

    return check;

    
}

//Helper function for check guess. Checks if each pack list contains all of each others packs, some, or none
function comparePacks(arr1,arr2){
    let check = 'none'
    if((arr1.every( ai => arr2.includes(ai) )) && (arr2.every( ai => arr1.includes(ai)) )){
        check = 'all'
    }

    else if((arr1.some( ai => arr2.includes(ai) )) && (arr2.some( ai => arr1.includes(ai)) )){
        check = 'some'
    }

    else{
        check = 'none'
    }

    return check
}





function decrementGuessCounter(){
    let guessCounter = document.querySelector('strong')
    let count = Number(guessCounter.textContent)
    count--
    guessCounter.textContent = count;
    if(count == 0){
        fillEndCard();
        gameOver();
    }
}
function victory(){
    overlayOn()
    removeEvents()
}
function gameOver(){
    document.querySelector('.textBlock h1').textContent = 'Game Over';
    overlayOn()
    removeEvents()
}

function removeEvents(){
    guessButton.removeEventListener('click', makeGuess)
    guessButton.textContent = 'Check'
    guessButton.addEventListener('click', overlayOn)
    document.querySelector('.overlay').addEventListener('click', overlayOff)
}


function fillEndCard(){
    let endCard = document.querySelector('.endCard')
    let petInfo = document.querySelector('.petInfo')
    endCard.querySelector('img').src = getPetImg(dailyPet)
    petInfo.querySelector('.petName').textContent = ` ${dailyPet.name}`
    petInfo.querySelector('.petAbility').textContent = `${dailyPet.trigger}: ${dailyPet.ability}`

}

function overlayOn() {
    document.querySelector(".overlay").style.opacity = "1";
    // document.querySelector(".overlay").style.height = "100%";
    // document.querySelector(".overlay").style.display = "block";
    document.querySelector(".overlay").classList.remove('ignoreClick')
    

  }

function overlayOff() {
    document.querySelector(".overlay").style.opacity= "0";
    // document.querySelector(".overlay").style.height = "0";
    document.querySelector(".overlay").classList.add('ignoreClick')
    // document.querySelector(".overlay").style.display = "hidden";
   
  }


// const scrollDemo = document.querySelector('ul');

// scrollDemo.addEventListener("scroll", event => {
//     let pos = scrollDemo.scrollTop
    
//     let thumb = window.getComputedStyle(scrollDemo,"::--webkit-scrollbar-thumb")
//     if(pos<=200){
//         scrollDemo.style.setProperty('--thumbRadiusTopRight','10px')
//         scrollDemo.style.setProperty('--thumbRadiusBottomRight','0px')
//     }
//     if((pos>200 && pos < 31601)){
//         scrollDemo.style.setProperty('--thumbRadiusTopRight','0px')
//         scrollDemo.style.setProperty('--thumbRadiusBottomRight','0px')
//     }
//     if(pos>=31601){
//         scrollDemo.style.setProperty('--thumbRadiusTopRight','0px')
//         scrollDemo.style.setProperty('--thumbRadiusBottomRight','10px')
//     }

//     console.log(scrollDemo.scrollTop)
//     console.log(scrollDemo.scrollLeft)
// }, { passive: true });


//31801
//0
