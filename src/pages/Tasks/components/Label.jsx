
import {useState, useEffect} from 'react'

import {MdOutlineLabel} from 'react-icons/md'
import {GrAdd} from 'react-icons/gr'


/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import LabelDropdown from './LabelDropdown'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Label() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full shadow-sm  bg-white text-sm font-medium text-gray-700 hover:bg-green-200 outline-none">
          <MdOutlineLabel/>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-left -right-1 absolute  mt-2 w-64 rounded-md shadow-lg bg-white border border-gray-200">
          <div>
           <LabelDropdown/>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
