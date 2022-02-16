var animatedbtns=document.getElementsByTagName('button')

function buttonId(){
    for(var i=0; i<animatedbtns.length; i++){
       animatedbtns[i].id=i+1
       animatedbtns[i].className='animated-btns'
     }
}
buttonId()

animatedbtns[0].classList.add("bg-color")
var firstBtn=document.getElementById('1')
localStorage.setItem('btn-id', firstBtn.id)

function btnFnctn(){

   var idInLS=Number(localStorage.getItem('btn-id'))

   function changingBtn(){

      animatedbtns[idInLS-1].classList.add('bg-color-2')
      animatedbtns[idInLS-1].classList.remove('bg-color')
      animatedbtns[idInLS].classList.add('bg-color')
      var nextBtn=document.getElementById(idInLS+1)
      localStorage.setItem('btn-id',nextBtn.id)

   }

   if(idInLS<4){changingBtn()}

   if(idInLS===4){

      animatedbtns[3].classList.remove('bg-color')
      animatedbtns[0].classList.add('bg-color')
      localStorage.setItem('btn-id',1)
      for(var i=0;i<animatedbtns.length; i++){
         animatedbtns[i].classList.remove('bg-color-2')

      }
    }

}

function btnIntrvl(){
   setInterval(btnFnctn,2000)
}

setTimeout(btnIntrvl,1500);

var bannerDiv=document.getElementById('animated-part')

function createBannerDivs(path){
   var bannerDiv=document.createElement('div')
   bannerDiv.className="animated-divs"
   var bannerImg=document.createElement('img')
   bannerImg.className='img'
   bannerImg.src=path
   bannerDiv.appendChild(bannerImg)
   return bannerDiv
}

function animationEffect(){
   var bannerImgArr=["https://imgur.com/96OnkX7.png","https://imgur.com/sfjg9R8.png","https://imgur.com/p0wdadG.png"]
   for(var i=0; i<bannerImgArr.length;i++){
   bannerDiv.appendChild(createBannerDivs(bannerImgArr[i]))
   }
}
animationEffect()

function createClothingDiv(obj){

   var imgDiv=document.createElement('div')
   imgDiv.id=obj.id

   var imgLink=document.createElement('a')
   imgLink.href="./details.html"
   imgDiv.appendChild(imgLink)

   var actualImage=document.createElement('img')
   actualImage.src=obj.preview;
   imgLink.appendChild(actualImage);

   var imgName=document.createElement('p')
   imgName.className='image-name'
   imgName.innerText=obj.name
   imgDiv.appendChild(imgName)

   var imgBrand=document.createElement('p')
   imgBrand.className='image-brand'
   imgBrand.innerText=obj.brand
   imgDiv.appendChild(imgBrand)

   var imgPrice=document.createElement('p')
   imgPrice.className='image-price'
   imgPrice.innerText="Rs "+obj.price
   imgDiv.appendChild(imgPrice)
   
   actualImage.onclick=function(){
      detailsOfProducts=[obj.preview,obj.name,obj.brand,obj.price,obj.description,obj.photos,obj.id]
      localStorage.setItem('img-src',JSON.stringify(detailsOfProducts))
   }

   return imgDiv
}

var xhttp=new XMLHttpRequest()
xhttp.open('GET',"http://5d76bf96515d1a0014085cf9.mockapi.io/product",true)
xhttp.onreadystatechange=function(){
   if(this.readyState===4){
      var responseArr=JSON.parse(this.responseText)
      for(var i=0; i<5; i++){
         var clothingDiv=document.getElementById('clothing')
         clothingDiv.appendChild(createClothingDiv(responseArr[i]))
      }
      for(var i=5; i<10; i++){
         var accessoriesDiv=document.getElementById('accessories')
         accessoriesDiv.appendChild(createClothingDiv(responseArr[i]))
      }
   }
}
xhttp.send()

var getPriceArray=JSON.parse(localStorage.getItem('price-of-products'))
var numberOfItems=document.getElementById('number-items')
numberOfItems.innerText=getPriceArray.length





