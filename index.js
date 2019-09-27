const mildPranks = ["PALMS DOWN - Tell a friend that you know a great trick. Put your hand palm-down on the table and balance a full glass of liquid) on the back of your hand. Bet your friend that they can’t balance a glass on both hands at once (help your friend to put them in place). As soon as you have the glasses balanced on the prospects hands, stand up and walk out. They will be trapped and will have to spill to escape.","SNAKE! - All you need is a rubber snake and some fishing line. Tie the fishing line around the snake and then attach the other end of the line to the inside of a cupboard or anything that opens and closes. Set it up so that when they open the door/cupboard the snake will jump out.","SPRAY - Stick some duct tape on the nozzle of a kitchen sink or bathroom tap - leave a little gap towards the front where someone will stand!","DUAL REMOTE - Spend the money to get a second matching or dual remote. Change channels while they are watching. The secret to this prank is to not overuse it. If you use it in small doses you can carry this one on for months not just on April Fools Day."," SMALL SHOES - Stuff some cotton wool into the toes of his favorite shoes. He will think his feet grew or his shoes shrank.","MESSAGE - Change your phone message on April Fools Day: record your voice saying 'Hello. (pause) Hello? (another pause) Is anyone there??' After another pause.","WEIGHT ISSUE - If you can get the exact same clothes as the target except get them a size smaller - Swap with the original!","FAKE CAKE - Take a round car-washing sponge, or a piece of craft foam, and decorate it with cake frosting, sprinkles, etc. Then try not to laugh when the victim struggles to cut themselves some cake.","EGGS - Try this prank on someone who drinks Guinness or any other beer that is difficult to see thru. All you have to do is crack open an egg (only the yellow part) and drop it in their drink when they aren't paying attention","OH DEAR - Fold the flat sheet on the bed double and tuck in securely on the sides, when the person get into bed they can't go further than half way!"]

const interPranks = []

const meanPranks = []

const mildBtn = document.getElementById('#mild')
const mediumBtn = document.getElementById('#medium')
const hotBtn = document.getElementById('#hot')
const btnResponse = document.querySelector('.btn-response')

mildBtn.addEventListener('click', (e) =>{
    if (document.querySelector('.prankContent')){
        document.querySelector('.prankContent').remove()
    }else{
        throw('No Prank Content Found, continuing on with Program.')
    }

    let ranNum = Math.floor(Math.random() * 9)

    let newDiv = document.createElement('div')
    newDiv.classList.add('prankContent')
    newDiv.innerHTML = mildPranks[ranNum]
    btnResponse.appendChild(newDiv)

 

})

mediumBtn.addEventListener('click', (e) =>{
    if (document.querySelector('.prankContent')){
        document.querySelector('.prankContent').remove()
    }else{
        throw('No Prank Content Found, continuing on with Program.')
    }
    let ranNum = Math.floor(Math.random() * 9)
    
    let newDiv = document.createElement('div')
    newDiv.classList.add('prankContent')
    newDiv.innerHTML = interPranks[ranNum]
    btnResponse.appendChild(newDiv)
 

})

hotBtn.addEventListener('click', (e) =>{
    if (document.querySelector('.prankContent')){
        document.querySelector('.prankContent').remove()
    }else{
        throw('No Prank Content Found, continuing on with Program.')
    }
    let ranNum = Math.floor(Math.random() * 9)
    
    let newDiv = document.createElement('div')
    newDiv.classList.add('prankContent')
    newDiv.innerHTML = meanPranks[ranNum]
    btnResponse.appendChild(newDiv)

 

})