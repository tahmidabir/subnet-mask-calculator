

function subnet(value){
    
    var x;
    
    if(value<0 || value>32){
         x="Invalid Value";
       document.getElementById("output").value=x;
       
       }
    else if(value==0){
         x="0.0.0.0";
       document.getElementById("output").value=x;
    }
    else if(value==1){
         x="128.0.0.0";
       document.getElementById("output").value=x;
    }
    else if(value==2){
         x="192.0.0.0";
       document.getElementById("output").value=x;
    }
    else if(value==3){
         x="224.0.0.0";
       document.getElementById("output").value=x;
    }
    else if(value==4){
         x="240.0.0.0";
       document.getElementById("output").value=x;
    }
    else if(value==5){
         x="248.0.0.0";
       document.getElementById("output").value=x;
    }
    else if(value==6){
         x="252.0.0.0";
       document.getElementById("output").value=x;
    }
    else if(value==7){
         x="254.0.0.0";
       document.getElementById("output").value=x;
    }
    else if(value==8){
         x="255.0.0.0";
       document.getElementById("output").value=x;
    }
    else if(value==9){
        var x="255.128.0.0";
       document.getElementById("output").value=x;
    }
    else if(value==10){
         x="255.192.0.0";
       document.getElementById("output").value=x;
    }
    else if(value==11){
         x="255.224.0.0";
       document.getElementById("output").value=x;
    }
    else if(value==12){
         x="255.240.0.0";
       document.getElementById("output").value=x;
    }
    else if(value==13){
         x="255.248.0.0";
       document.getElementById("output").value=x;
    }
    else if(value==14){
         x="255.252.0.0";
       document.getElementById("output").value=x;
    }
    else if(value==15){
         x="255.254.0.0";
       document.getElementById("output").value=x;
    }
    else if(value==16){
         x="255.255.0.0";
       document.getElementById("output").value=x;
    }
    else if(value==17){
         x="255.255.128.0";
       document.getElementById("output").value=x;
    }
    else if(value==18){
        var x="255.255.192.0";
       document.getElementById("output").value=x;
    }
    else if(value==19){
        var x="255.255.224.0";
       document.getElementById("output").value=x;
    }
    else if(value==20){
         x="255.255.240.0";
       document.getElementById("output").value=x;
    }
    else if(value==21){
         x="255.255.248.0";
       document.getElementById("output").value=x;
    }
    else if(value==22){
         x="255.255.252.0";
       document.getElementById("output").value=x;
    }
    else if(value==23){
         x="255.255.254.0";
       document.getElementById("output").value=x;
    }
    else if(value==24){
        x="255.255.255.0";
       document.getElementById("output").value=x;
    }
    else if(value==25){
         x="255.255.255.128";
       document.getElementById("output").value=x;
    }
    else if(value==26){
         x="255.255.255.192";
       document.getElementById("output").value=x;
    }
    else if(value==27){
         x="255.255.255.224";
       document.getElementById("output").value=x;
    }
    else if(value==28){
         x="255.255.255.240";
       document.getElementById("output").value=x;
    }
    else if(value==29){
        var x="255.255.255.248";
       document.getElementById("output").value=x;
    }
    else if(value==30){
         x="255.255.255.252";
       document.getElementById("output").value=x;
    }
    else if(value==31){
         x="255.255.255.254";
       document.getElementById("output").value=x;
    }
    else if(value==32){
         x="255.255.255.255";
       document.getElementById("output").value=x;
    }
    
}