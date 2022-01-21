// import Head from 'next/head'
import { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'

function calculate(calc) {
  
}

export default function Home() {
  const [display, setDisplay] = useState('')
  const [error, setError] = useState(null)

  return (
    <div className='bg-blueGray-900 text-white w-screen h-screen flex items-center justify-center px-5'>
      <div className='w-full'>
        {/* Upper */}
        <div>
          <p className='text-right text-3xl text-gray-400'>
            {display !== '' ? display : <p className='opacity-20'>Calculation</p>}
          </p>
          <p className='text-right text-base text-red-500'>
            {error}
          </p>
        </div>

        {/* Bottom */}
        <div className='mt-10 text-gray-400'>
          <div className='flex items-center'>
            <button className='transform w-1/3 h-16 border-1 border-gray-600 bg-white bg-opacity-5 rounded-tl-lg' onClick={() => {
              setDisplay(display + '1')
            }}>
              1
            </button>
            <button className='transform w-1/3 h-16 border-1 border-gray-600 bg-white bg-opacity-5' onClick={() => {
              setDisplay(display + '2')
            }}>
              2
            </button>
            <button className='transform w-1/3 h-16 border-1 border-gray-600 bg-white bg-opacity-5' onClick={() => {
              setDisplay(display + '3')
            }}>
              3
            </button>
            <button className='transform w-1/3 h-16 border-1 border-gray-600 flex justify-center items-center rounded-tr-lg' onClick={() => {
              setDisplay(display.substring(0, display.length - 1))
            }}>
              <BiArrowBack />
            </button>
          </div>
          <div className='flex items-center'>
            <button className='transform w-1/3 h-16 border-1 border-gray-600 bg-white bg-opacity-5' onClick={() => {
              setDisplay(display + '4')
            }}>
              4
            </button>
            <button className='transform w-1/3 h-16 border-1 border-gray-600 bg-white bg-opacity-5' onClick={() => {
              setDisplay(display + '5')
            }}>
              5
            </button>
            <button className='transform w-1/3 h-16 border-1 border-gray-600 bg-white bg-opacity-5' onClick={() => {
              setDisplay(display + '6')
            }}>
              6
            </button>
            <div className='flex items-center justify-center transform w-1/3 h-16 border-1 border-gray-600' onClick={() => {
              // setDisplay('')
            }}>
              <button className='w-1/2 border-r-2 border-gray-600 h-full' onClick={() => {
              setDisplay(display + '(')
            }}>
                (
              </button>
              <button className='w-1/2 h-full' onClick={() => {
              setDisplay(display + ')')
            }}>
                )
              </button>
            </div>
          </div>
          <div className='flex items-center'>
            <button className='transform w-1/3 h-16 border-1 border-gray-600 bg-white bg-opacity-5' onClick={() => {
              setDisplay(display + '7')
            }}>
              7
            </button>
            <button className='transform w-1/3 h-16 border-1 border-gray-600 bg-white bg-opacity-5' onClick={() => {
              setDisplay(display + '8')
            }}>
              8
            </button>
            <button className='transform w-1/3 h-16 border-1 border-gray-600 bg-white bg-opacity-5' onClick={() => {
              setDisplay(display + '9')
            }}>
              9
            </button>
            <button className='transform w-1/3 h-16 border-1 border-gray-600' onClick={() => {
              setDisplay(display + '+')
            }}>
              +
            </button>
          </div>
          <div className='flex items-center'>
            <button className='transform w-1/3 h-16 border-1 border-gray-600 bg-white bg-opacity-5' onClick={() => {
              setDisplay(display + '0')
            }}>
              0
            </button>
            <button className='transform w-1/3 h-16 border-1 border-gray-600' onClick={() => {
              setDisplay(display + '/')
            }}>
              /
            </button>
            <button className='transform w-1/3 h-16 border-1 border-gray-600' onClick={() => {
              setDisplay(display + '*')
            }}>
              *
            </button>
            <button className='transform w-1/3 h-16 border-1 border-gray-600' onClick={() => {
              setDisplay(display + '-')
            }}>
              -
            </button>
          </div>
          <div className='flex items-center text-white text-xl'>
            <button className='transform w-1/2 h-16 bg-red-500 border-1 border-gray-600 rounded-bl-lg' onClick={() => {
              setDisplay('')
              setError('')
            }}>
              Clear
            </button>
            <button className='transform w-1/2 h-16 bg-green-500 border-1 border-gray-600 rounded-br-lg' onClick={() => {
              try {
                setDisplay(eval(display).toString())
                setError('')
              } catch {
                setError('Invalid calculation')
              }
            }}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
