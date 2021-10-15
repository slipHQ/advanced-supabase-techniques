import Head from "next/head";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://sslnlcrlytrzdeoqtjyi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDA2NzU2NSwiZXhwIjoxOTQ5NjQzNTY1fQ.YcoIuw02PpOLuattu8BZjtgiqt3Gdqd9zba0CJtGAfE"
);

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

  const people = [
    {
      name: "Emma Dorsey",
      role: "Senior Front-end Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
      twitterUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Emma Dorsey",
      role: "Senior Front-end Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
      twitterUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Emma Dorsey",
      role: "Senior Front-end Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
      twitterUrl: "#",
      linkedinUrl: "#",
    },
    // More people...
  ];

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
