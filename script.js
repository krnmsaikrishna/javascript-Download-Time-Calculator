function numTotime(num)
{
var c1=c2=c3=c4=0;
var f1=f2="";
var x=y=z=0;
if(num<3600){f1="mins";f2="secs";
for (var z=num;z>=60;z=z-60)
{ c3++;} x=z;}
if(num>=3600){c1=0;f1="mins";f2="secs";
for (x=num;x>=60;x=x-60)
{ c1++;}}
if(c1>=60){f1="hours";f2="mins";
for (y=c1;y>=60;y=y-60)
{ c2++;} c1=c2; x=y;}
if(c1>=24){
for (m=c1;m>=24;m=m-24)
{c4++;}
if(x>=1){x=x+1;}
x=Math.floor(x);
return c4+"days"+" "+m+"hours"+" "+x+"minutes"+" "+"0seconds"; }
else
{x=Math.floor(x);
return c1+f1+" "+x+f2; }
};
function generator()
{
var fs=document.getElementById("fs").value;
var ns= document.getElementById("ns").value;
if (fs<=0 || ns<=0){return alert ("Enter Valid Inputs.");}
var no="";
for (var o=1;o<=6;o++){
var s=document.getElementById("ro"+o).checked;
if(s==true){no+=o;}}
var n1=no[0];var n2=no[1];var oztf=1024;
if(n1==undefined || n2==undefined){ return alert ("Select Both Memory Parameters.");}
if(n1=="1"){fs=fs*1;}
if(n1=="2"){fs=fs*oztf;}
if(n1=="3"){fs=fs*oztf*oztf;}
if(n2=="4"){ns=ns*1;}
if(n2=="5"){ns=ns*oztf;}
if(n2=="6"){ns=ns*oztf*oztf;}
var res=fs/ns;
var xyz=numTotime(res);
document.getElementById("res").value=xyz;
};
window.onresize=function(){
var wid=""+window.screen.width; 
var hei=""+window.screen.height;
wid=parseInt(wid.slice(0,wid.length-1));
hei=parseInt(hei.slice(0,hei.length-1));
var res=(wid-hei)/2;
if(res<=0){res=(res*-1)/2+1;}
if(res>0 && res<=9){res=9;}
document.getElementsByClassName("hangtext")[0].style.fontSize=res+"px";
};
window.onload=function(){
var wid=""+window.screen.width;
var hei=""+window.screen.height;
wid=parseInt(wid.slice(0,wid.length-1));
hei=parseInt(hei.slice(0,hei.length-1));
var res=(wid-hei)/2;
res=parseInt(res);
if(res<=0){res=(res*-1)/2+1;}
if(res>0 && res<=9){res=9;}
document.getElementsByClassName("hangtext")[0].style.fontSize=res+"px";
};
