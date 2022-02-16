var getPriceArray=JSON.parse(localStorage.getItem('price-of-products'))
var numberOfItems=document.getElementById('number-items')
if(getPriceArray===null){
   numberOfItems.innerText="0"
}
else{
   numberOfItems.innerText=getPriceArray.length
}

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
      
    }
 }
 xhttp.send()