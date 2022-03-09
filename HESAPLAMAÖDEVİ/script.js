function hesapla(){
    let faktoriyel=1;
    let sayi=document.getElementById("sayi").value;
    
  
    if(sayi>=0){
        for(let i=1;i<=sayi;i++){
            faktoriyel=faktoriyel*i;
        }
    }
    document.getElementById("sonuc").innerHTML="Sonuç : " + faktoriyel ;
  }
  
  let faktoriyelhesap=document.getElementById("hesapla");
  faktoriyelhesap.onclick=hesapla;