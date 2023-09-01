import React from 'react'

export default function Contact() {
    return (
        <div className=''>
            <h2 className='text-center text-8xl font-medium text-sky-200 p-16'>Contact Us</h2>

            <ul
                class="mb-5 flex list-none flex-col flex-wrap pl-0 md:flex-row ml-20 mr-20"
                >
                <li role="presentation" class="flex-auto text-center flex justify-center">
                    <a
                        href="*"
                        class="w-[70%] my-2 block rounded-lg bg-sky-500 px-7 pb-3.5 pt-4 text-lg border-2 hover:bg-sky-700  border-sky-400 font-bold uppercase text-white md:mr-4"
                    >Twitter</a
                    >
                </li>
                <li role="presentation" class="flex-auto text-center flex justify-center">
                    <a
                        href="*"
                        class="w-[70%] my-2 block rounded-lg bg-sky-700 px-7 pb-3.5 pt-4 text-lg border-2 hover:bg-sky-900  border-sky-600 font-bold uppercase text-white md:mr-4"
                    >Linkedin</a
                    >
                </li>
                <li role="presentation" class="flex-auto text-center flex justify-center">
                    <a
                        href="*"
                        class="w-[70%] my-2 block rounded-lg bg-orange-500 px-7 pb-3.5 pt-4 text-lg border-2 hover:bg-orange-700 border-orange-400 font-bold uppercase text-white md:mr-4"
                    >Medium</a
                    >
                </li>
            </ul>

            
        </div>

    )
}
