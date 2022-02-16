var arrB=JSON.parse(localStorage.getItem('ordered-items'))
var mainDiv=document.getElementById('ordered-items')

function orderedItem(array){

   var outerDiv=document.createElement('div')
   outerDiv.className='checkout-outer-div'
   outerDiv.id='order'+mainDiv.childElementCount
   console.log(outerDiv.id)
   var cancelOrder=document.createElement('p')
   var cancelBtn=document.createElement('i')
   cancelBtn.className='fas fa-times'
   cancelOrder.appendChild(cancelBtn)
   cancelOrder.classList.add('invisible')
   cancelOrder.id=mainDiv.childElementCount
   outerDiv.appendChild(cancelOrder)
   
    var imgDiv=document.createElement('div')
    outerDiv.appendChild(imgDiv)

    var mainImage=document.createElement('img')
    mainImage.src=array[0]
    imgDiv.appendChild(mainImage)

    var descriptionDiv=document.createElement('div')
    outerDiv.appendChild(descriptionDiv)

    var title=document.createElement('h4')
    title.innerHTML=array[1]
    descriptionDiv.appendChild(title)

    var price=document.createElement('p')
    price.innerHTML='Amount: Rs '+ array[3]
    descriptionDiv.appendChild(price)
    
    return outerDiv
}

function totalItems(){
    var arrB=JSON.parse(localStorage.getItem('ordered-items'))
    var mainDiv=document.getElementById('ordered-items')
    var priceArray=[]
    for(var i=0; i<arrB.length; i++){
        mainDiv.insertBefore(orderedItem(arrB[i]),mainDiv.firstElementChild)
        priceArray.push(arrB[i][3])
        console.log(arrB[i][3])
        localStorage.setItem('price-of-products',JSON.stringify(priceArray))
    }
    var getPriceArray=JSON.parse(localStorage.getItem('price-of-products'))
    var totalSum=0
    for(var i=0;i<getPriceArray.length;i++){
      var totalSum=totalSum+getPriceArray[i]
    }
    var totalAmount=document.getElementById('total-amount')
    totalAmount.innerText=totalSum
    var itemsInTotal=document.getElementById('total-items')
    itemsInTotal.innerText='Total Items:'+getPriceArray.length
    var numberOfItems=document.getElementById('number-items')
    numberOfItems.innerText=getPriceArray.length
}
totalItems()

function cancellingOrders(){
    var cancelElems=document.getElementsByClassName('invisible')
    for(var i=0;i<cancelElems.length;i++){  
        cancelElems[i].onclick=function(e){
            arrB.splice((e.target).id,1)
            localStorage.removeItem('ordered-items')
            localStorage.setItem('ordered-items',JSON.stringify(arrB))
            localStorage.removeItem('price-of-products')
            location.assign('./checkout.html')    
        }
    }
}
cancellingOrders()
