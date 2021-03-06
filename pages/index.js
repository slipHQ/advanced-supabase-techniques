import Head from "next/head";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>jammer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center flex-1 w-full px-20 text-center'>
        <h1 className='text-6xl font-bold'>jammer</h1>

        <p className='mt-3 text-2xl'>
          marketplace for buying and selling music equipment
        </p>

        <div className='flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full'>
          <a
            href='/equipment'
            className='p-6 mt-6 text-left border shadow-sm w-96 hover:text-pink-600 focus:text-pink-600'
          >
            <h3 className='text-2xl font-bold'> Music gear for sale</h3>
            <p className='mt-4 text-xl'>Find rad gear 🎸</p>
          </a>

          <a
            href='/list'
            className='p-6 mt-6 text-left border shadow-sm w-96 hover:text-pink-600 focus:text-pink-600'
          >
            <h3 className='text-2xl font-bold'>Sell your music gear</h3>
            <p className='mt-4 text-xl'>
              Make some 💰 selling your used music equipment
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
