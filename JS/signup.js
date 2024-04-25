//reset form
function resetForm(){
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    document.getElementById("phone").value="";
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("dob").value="";
    document.getElementById("confirm_password").value="";
    document.getElementById("otp").value="";
}
function signup_validation(){
    //Email validation
    var Email = document.getElementById("email").value
    var Email_flag=false
    var flag1=false
    var flag2=true
    for(var i=0;i<Email.length;i++){
        if(Email[i]=='@'){
            flag1=true
        }
        if((Email[i]>='A')&&(Email[i]<='Z')){
            flag2=false
        }
    }
    if((flag1==true)&&(flag2==true)){
        Email_flag=true
    }
    //phone_no validation
    var Phone=document.getElementById("phone").value
    var Phone_flag=false
    if((Phone>=6000000000)&&(Phone<=9999999999)){
        Phone_flag=true
    }

    //password validation
    var Password=document.getElementById("password").value
    var Password_flag=false
    var Length=0
    var Upper=0
    var Lower=0
    var Num=0
    var Special=0
    for(var i=0;i<Password.length;i++){
        Length++
        if((Password[i]>='A')&&(Password[i]<='Z'))
        {
            Upper++;
        }
        else if((Password[i]>='a')&&(Password[i]<='z'))
        {
            Lower++;

        }
        else if((Password[i]>='0')&&(Password[i]<='9'))
        {
            Num++;
        }
        else{
            Special++;
        }
    }
    if((Length>=8)&&(Length<=16)&&(Upper>=1)&&(Lower>=1)&&(Num>=1)&&(Special>=1))
        {
            Password_flag=true
        }
    //Confirm Password validation
    var Confirm=document.getElementById("confirm_password").value
        var Confirm_flag=false
        if(Password==Confirm){
            Confirm_flag=true
        }
    //Final validation
    if((Phone_flag==true)&&(Email_flag==true)&&(Password_flag==true)&&(Confirm_flag==true)){
        window.location.href="./Otp.html"
        resetForm();
    }
    else{
       
        document.getElementById("invalidModal").style.display = "block";
       
       
    }
}
function closeModal() 
    {
            
            document.getElementById("invalidModal").style.display = "none";
    }
