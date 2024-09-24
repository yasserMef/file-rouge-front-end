import React from 'react';

function Value() {
  return (
    <div className='mb-16 mt-24 px-6 md:px-12 lg:px-24 xl:px-32'>
      <h1 className='text-textColor text-2xl lg:text-3xl py-8 pb-12 font-bold max-w-lg'>
        Les valeurs qui nous définissent et nous responsabilisent
      </h1>
      <div className='grid gap-10 lg:gap-40 grid-cols-1 lg:grid-cols-3 items-start'>
        {/* Simplicité */}
        <div className='singleGrid rounded-2xl hover:bg-[#eeedf7] p-6'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-1 bg-[#dedef8] rounded-xl h-10 w-10 flex items-center justify-center'>
              <img src='/images/simplicity.png' alt='Simplicité' className='w-3/4' />
            </div>
            <p className='font-semibold text-textColor text-lg'>
              Simplicité
            </p>
          </div>
          <p className='text-sm lg:text-base text-gray-600 mt-3'>
            La simplicité élégante est au cœur de tout ce que nous faisons.
          </p>
        </div>

        {/* Bien social */}
        <div className='singleGrid rounded-2xl hover:bg-[#eeedf7] p-6'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-1 bg-[#dedef8] rounded-xl h-10 w-10 flex items-center justify-center'>
              <img src='/images/social_good.png' alt='Bien social' className='w-3/4' />
            </div>
            <p className='font-semibold text-textColor text-lg'>
              Bien social
            </p>
          </div>
          <p className='text-sm lg:text-base text-gray-600 mt-3'>
            Nous croyons en l'amélioration des choses pour tout le monde, même si ce n'est qu'un petit peu !
          </p>
        </div>

        {/* Confiance */}
        <div className='singleGrid rounded-2xl hover:bg-[#eeedf7] p-6'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-1 bg-[#dedef8] rounded-xl h-10 w-10 flex items-center justify-center'>
              <img src='/images/trust.png' alt='Confiance' className='w-3/4' />
            </div>
            <p className='font-semibold text-textColor text-lg'>
              Confiance
            </p>
          </div>
          <p className='text-sm lg:text-base text-gray-600 mt-3'>
            Nous travaillons sur la base de la création de confiance, qui peut être nourrie par l'authenticité et la transparence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Value;