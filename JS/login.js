//reset function
function resetForm(){
    document.getElementById("email").value="";
    document.getElementById("password").value="";
}

function login_validation(){
    var db={
        'priya@gmail.com':'Dharshini@31',
        'Jaya@gmail.com':'Dharshana@26'
    }
    var username=document.getElementById("email").value
    var password=document.getElementById("password").value
    var Names=Object.keys(db)
    var flag=false

    for(var i=0;i<Names.length;i++){
        if(Names[i]==username)
        {
            if(db[Names[i]]==password){
                flag=true
            }
        }
    }
    if(flag==true){
        window.location.href="./index.html"
        resetForm();
    }
    else
    {
        document.getElementById("invalidModal").style.display = "block";
        resetForm();
    }
}

function closeModal() 
    {
            
            document.getElementById("invalidModal").style.display = "none";
    }
