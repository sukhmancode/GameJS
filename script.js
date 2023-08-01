const container=document.querySelector('.container');
const optionImages=document.querySelectorAll('.option-image')
const user=document.getElementById('user');
const cpu=document.getElementById('cpu');
const UserName=document.getElementById('name');
const playBtn=document.getElementById('play')
const modal=document.querySelector('.modal')

container.style.display="none"
UserName.addEventListener('input',(e)=>{
    if(!localStorage.setItem){
        container.style.display="flex"
        modal.style.display="none"
    }
 
  playBtn.addEventListener('click',()=>{
    modal.classList.add('active')
    if(UserName.value==""){ 
       alert("enter")
    }
    after.innerText=`Let's Play ${UserName.value}!!`
    container.style.display="flex"
  
  let user_data={
    name:UserName.value
};
localStorage.setItem('user_data',JSON.stringify(user_data));

let retrieveUserData=JSON.parse(localStorage.getItem('user_data'))  
console.log(retrieveUserData);

  })
  
 
})



optionImages.forEach((img,index)=>{
    img.addEventListener('click',function(e){
        img.classList.add('active');
        optionImages.forEach((img2,index2)=>{
            index!==index2 && img2.classList.remove('active');
        })
        user.src=cpu.src="/images/rock.png";
        after.innerText="Wait...."
        container.classList.add('start');
        let time=setTimeout(() => {
            container.classList.remove('start')
            let imagesrc=e.target.querySelector("img").src;
        user.src=imagesrc;
        console.log(imagesrc);
          let randomNo=Math.floor(Math.random() * 3);
          let cpuimages=["images/rock.png","images/paper.png","images/scissors.png"];
        cpu.src=cpuimages[randomNo];
        let cpuvalue=["R","P","S"][randomNo];
        console.log(cpuvalue);
        let uservalue=["R","P","S"][index];
        console.log(cpuvalue,uservalue);

        let outcomes={
            RR:"DRAW",
            RP:"CPU",RS:UserName.value,PP:"DRAW",PR:"CPU",PS:"CPU",SS:"DRAW",SR:"CPU",SP:UserName.value
        }

let outcomevalue=outcomes[uservalue+cpuvalue];
        document.getElementById('after').innerText=uservalue===cpuvalue?"Match DRAW" :`${outcomevalue} Wins`
}, 2000);  
 
})
})