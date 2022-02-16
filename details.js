
// var getPriceArray=JSON.parse(localStorage.getItem('price-of-products'))

// var numberOfItems=document.getElementById('number-items')

// numberOfItems.innerText=getPriceArray.length

var detailsImage=document.getElementById('details-image')
console.log(detailsImage)

// localStorage.removeItem('border-color')

var imagesAddress=JSON.parse(localStorage.getItem('img-src'))
console.log(imagesAddress)


detailsImage.src=imagesAddress[0]

var productName=document.getElementById('product-name')
productName.innerText=imagesAddress[1]

var productBrand=document.getElementById('product-brand')
productBrand.innerText=imagesAddress[2]

var productPrice=document.getElementById('product-price')
productPrice.innerText=imagesAddress[3]

var productDescription=document.getElementById('product-description')
productDescription.innerText=imagesAddress[4]

function createImages(){
    
    var imagesAddress2=imagesAddress[5]

    var ImagesMainDiv=document.getElementById('small-images')

    for(var i=0; i<imagesAddress2.length;i++){

        var imageDiv=document.createElement('div')

        var samllImg=document.createElement('img')        
        samllImg.className="small-photos"
        samllImg.src=imagesAddress2[i]
        imageDiv.appendChild(samllImg)
        ImagesMainDiv.appendChild(imageDiv)
        
  
    }
    var smallImgCollection=document.getElementsByClassName('small-photos')
    for(var i=0;i<smallImgCollection.length;i++){
        smallImgCollection[i].id=i
        console.log(smallImgCollection[i].id)
        smallImgCollection[i].onclick=function(e){
            var target=e.target
            var bColor=localStorage.getItem('border-color')
            if(bColor===null){
                detailsImage.src=target.src
                target.classList.add("border-color")
                localStorage.setItem('border-color',target.id)
             }
            else{
                var elem=document.getElementById(bColor)
                elem.classList.remove('border-color')
                detailsImage.src=target.src
                target.classList.add("border-color")
                localStorage.setItem('border-color',target.id)
            }
          
       
        }
    }
    return imageDiv;
}
createImages()

var addToCartBtn=document.getElementById('cart-btn')

addToCartBtn.onclick=function(){
    var arrayA=JSON.parse(localStorage.getItem('img-src'))
    var arrB=JSON.parse(localStorage.getItem('ordered-items'))
    if(arrB===null){
        arrC=[]
        arrC.push(arrayA)
        localStorage.setItem('ordered-items',JSON.stringify(arrC))
    }
    if(arrB!==null){
        arrB.push(arrayA)
        localStorage.setItem('ordered-items',JSON.stringify(arrB))
    }

}























