var nameofthestudent=[]
function submit(){
    name1=document.getElementById("nameofstudent1").value


name2=document.getElementById("nameofstudent2").value


    name3=document.getElementById("nameofstudent3").value

    
        name4=document.getElementById("nameofstudent4").value

nameofthestudent.push(name1)
nameofthestudent.push(name2)
nameofthestudent.push(name3)
nameofthestudent.push(name4)
document.getElementById("output").innerHTML=nameofthestudent

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block"

    }
    function sorting(){
        nameofthestudent.sort()
        document.getElementById("output").innerHTML=nameofthestudent
    }

    