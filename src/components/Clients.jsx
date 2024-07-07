import React from 'react'

const Clients = () => {
  return (
      <div className="p-4 bg-bgWhite mx-auto gap-4">
        <div className=''>
            <h1 className="text-center text-zinc9 font-semibold text-4xl my-2.5">Our Clients</h1>

            <div className='text-neutral5 text-base font-normal text-center'>We have been working with some Fortune 500+ clients</div>

            <div className='flex justify-evenly h-24 mt-6'>
                <img className='h-10 w-12 rounded-lg' src="/brand_Partners/bp1.png" alt="" />
                <img className='h-10 w-12 rounded-lg' src="/brand_Partners/bp2.png" alt="" />
                <img className='h-10 w-12 rounded-lg' src="/brand_Partners/bp3.png" alt="" />
                <img className='h-10 w-12 rounded-lg' src="/brand_Partners/bp4.png" alt="" />
                <img className='h-10 w-12 rounded-lg' src="/brand_Partners/bp5.png" alt="" />
                <img className='h-10 w-12 rounded-lg' src="/brand_Partners/bp6.png" alt="" />
                <img className='h-10 w-12 rounded-lg' src="/brand_Partners/bp7.png" alt="" />
            </div>
        </div>
          
        <div>
            <div className="text-center text-slate7 font-semibold text-4xl my-4 mt-6">
                Manage your entire community <br /> in a single system
            </div>
            <div className='text-neutral5 text-center'>
              Who is Nextcent suitable for?
            </div>

            <div className='flex justify-evenly h-72 px-36 mt-5'>
              <div className='flex flex-col gap-4 h-64 w-72 py-6 px-8'>
                  <div className='text-center mx-auto'>
                      <img className='w-16 h-14' src="/Features/f1.png" alt="" />
                  </div>

                  <div className='font-bold text-center text-2xl text-neutral7'>
                      Membership Organisations
                  </div>

                  <div className='text-neutral5 font-normal text-sm text-center'>
                      Our membership management software provides full automation of membership renewals and payments
                  </div>
              </div>

              <div className='flex flex-col gap-4 h-64 w-72 py-6 px-8'>
                    <div className='text-center mx-auto'>
                      <img className='w-16 h-14' src="/Features/f2.png" alt="" />
                    </div>

                    <div className='font-bold text-center text-2xl text-neutral7'>
                      National Associations
                    </div>

                    <div className='text-neutral5 font-normal text-sm text-center'>
                      Our membership management software provides full automation of membership renewals and payments
                    </div>
              </div>

              <div className='flex flex-col gap-4 h-64 w-72 py-6 px-8'>
                    <div className='text-center mx-auto'>
                      <img className='w-16 h-14' src="/Features/f3.png" alt="" />
                    </div>

                    <div className='font-bold text-center text-2xl text-neutral7'>
                      Clubs And <br /> Groups
                    </div>

                    <div className='text-neutral5 font-normal text-sm text-center'>
                      Our membership management software provides full automation of membership renewals and payments
                    </div>
              </div>
            </div>

        </div>
          
    </div>
  )
}

export default Clients