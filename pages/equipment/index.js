import Head from "next/head";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function Equipment() {
  const [equipment, setEquipment] = useState([]);

  async function getEquipment() {
    const { data, error } = await supabase.from("equipment").select();
    if (error) {
      console.error(error);
    }

    setEquipment(data);
  }

  useEffect(() => {
    getEquipment();
  }, []);

  return (
    <div className='bg-white'>
      <Head>
        <title>Music Equipment for sale</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0'>
          <div className='lg:col-span-2'>
            <ul
              role='list'
              className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8'
            >
              {equipment.map((item) => (
                <li key={item.name}>
                  <div className='space-y-4'>
                    <div className='aspect-w-3 aspect-h-2'>
                      <img
                        className='object-cover rounded-lg shadow-lg'
                        src={item.image_url}
                        alt=''
                      />
                    </div>
                    <div className='space-y-1 text-lg font-medium leading-6'>
                      <h3>{item.name}</h3>
                      <p className='text-gray-900'>{item.owners_name}</p>
                    </div>
                    <div className='text-lg'>
                      <p className='text-gray-500'>{item.description}</p>
                    </div>

                    <ul role='list' className='flex space-x-5'>
                      <li>
                        <p className='font-semibold tracking-wide text-gray-900 hover:text-gray-500'>
                          ${item.amount / 100}
                        </p>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
