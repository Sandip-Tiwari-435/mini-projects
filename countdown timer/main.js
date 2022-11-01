function input(){
    hours=prompt('Enter the number of required hours for the countdown');
    mins=prompt('Enter the number of required minutes for the countdown');
    secs=prompt('Enter the number of required seconds for the countdown');
    alert(`Your countdown initial is ${hours} hours ${mins} minutes ${secs} seconds`);
}
        
const timer = ms => new Promise(res => setTimeout(res, ms))
async function yes(){
    let i=hours;
    let j=mins;
    let k=secs;
    while(j!=-2){
        while(k!=-2){
                    
            document.getElementById('timer').innerHTML=`${i} hours ${j} mins ${k} seconds`;
            
            await timer(1000);
            k--;
                    
            if (k==-1) {j--; k=59; break;}

        }
            
        if(j==-1) {if(i!=0)i--;j=59;}
        if(i==0&&j==59&&k==59)break;
            
                
    }    
    
        
}
document.querySelector("p").style.backgroundImage = url('https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5ODc5NjczNjEyNzM5OTI4/osama-bin-laden-gettyimages-1171315.jpg');
