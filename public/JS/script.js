// Image Upload Click Event 

let img = null;
let imgUrl =null;
let imgInput = document.getElementById('imgUpload')
let nameShow = document.getElementById('imgLabel')
let preview = document.getElementById('preview')


function ReadUrl(input){
    let reader =  new FileReader();
     reader.onload = function(e) {
        imgUrl = e.target.result
        $('#preview').attr('src',e.target.result)
    }
    reader.readAsDataURL(input)

}

imgInput.addEventListener('change', function (e){
    if(e.currentTarget.files[0].type == 'image/png' ||e.currentTarget.files[0].type == 'image/jpeg'||e.currentTarget.files[0].type == 'image/jpg'){
        ReadUrl(e.currentTarget.files[0])
        img = e.currentTarget.files[0].name
        nameShow.innerText = img
    }else{
        nameShow.innerText = 'please, provide image file'
        nameShow.style.color = '#E91F63'
    }

})