export const formattedAmount = (amount) => {
 let formatAmount
  if(amount){
    let amountNum = parseInt(amount.replace(",",""));
     formatAmount =  new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2
    }).format(parseInt(amountNum))
  }


  return formatAmount

}


export const stringToNumber = (amount) => {
  if(amount){
   return parseInt(amount.replace(",",""))
  }
  return
}