import React from 'react';
import Modal from 'react-modal';


export default function Settings() {
    return (
        <div className='w-1/3 h-96 bg-snow rounded-lg m-auto mb-20'>
            <h1 className='font-bold text-xl ml-4 pt-4'>Settings</h1>
            <label class="inline-flex relative items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" />
  <div class="w-11 h-6 bg-description peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-snow after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-snow after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
</label>
        </div>
    )
}