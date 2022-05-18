window.addEventListener("scroll",()=>{
    let project_img1 = document.querySelector(".project_img1").querySelectorAll("img");
    for (var i = 0; i < project_img1.length; i++) {
        let contentPosition = project_img1[i].getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
        if(contentPosition < screenPosition){
       // alert("working")
            project_img1[i].classList.add('active');
        }else{
            project_img1[i].classList.remove('active');
        }
    }
    
    let project_img2 = document.querySelector(".project_img2").querySelectorAll("img");
    for (var i = 0; i < project_img2.length; i++) {
        let contentPosition = project_img2[i].getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
        if(contentPosition < screenPosition){
       // alert("working")
            project_img2[i].classList.add('active');
        }else{
            project_img2[i].classList.remove('active');
        }
    }
})