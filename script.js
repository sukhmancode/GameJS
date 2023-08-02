const container=document.querySelector('.container');
const optionImages=document.querySelectorAll('.option-image')
const user=document.getElementById('user');
const cpu=document.getElementById('cpu');
const UserName=document.getElementById('name');
const playBtn=document.getElementById('play')
const modal=document.querySelector('.modal')
var regex = /^[a-zA-Z ]{2,30}$/;

container.style.display="none"
UserName.addEventListener('input',(e)=>{
  playBtn.addEventListener('click',()=>{
    if(!regex.test(UserName.value)){
  document.querySelector('.name-error').innerHTML="Please enter an valid name"
  return regex.test(UserName.value);
     
  }else{
    document.querySelector('.name-error').innerHTML=""

  }
  
  
    modal.classList.add('active')

    after.innerText=`Let's Play ${UserName.value}!!`
    container.style.display="flex"
  
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