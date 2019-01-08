var customerName = 'bob'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
  return customerName
}

var bestCustomer = undefined

function setBestCustomer() {
  bestCustomer = 'not bob'
  return bestCustomer
}

function overWriteBestCustomer() {
  bestCustomer = 'maybe bob'
 return bestCustomer
}

const LeastFavoriteCustomer = "not I"

function reassignLeastFavorite() {
  LeastFavoriteCustomer = "I hope not I"
}

const favoriteCustomer = "Lorenzo"

function attemptTwoFavoriteCustomers(){
  const favoriteCustomer ="Imelda"
}
