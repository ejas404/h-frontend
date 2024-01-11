let arr = [{
    "_id": {
      "$oid": "659fc7c717ecc9abb398d6f0"
    },
    "user": {
      "$oid": "657980f9bb81ae807dce3670"
    },
    "products": [
      {
        "product": {
          "$oid": "6582f98a9a1ccf73bcfd1bbf"
        },
        "size": [
          0,
          1,
          0,
          0
        ],
        "_id": {
          "$oid": "659fc7c717ecc9abb398d6f1"
        }
      },
      {
        "product": {
          "$oid": "6582fa8a9a1ccf73bcfd1bcf"
        },
        "size": [
          1,
          0,
          0,
          0
        ],
        "_id": {
          "$oid": "659fcb20836a81c910c17f0d"
        }
      }
    ]
  }]

  let id = "6582fa8a9a1ccf73bcfd1bcf"

function isInCart(array,product_id){
    for (let each of array[0].products){
        if(each.product.$oid === product_id){
            return true
        }
    }

    return false

}

console.log(isInCart(arr,id))