import type { FormEvent, JSX } from 'react'

type Props = {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
  titleLine1?: string
  titleLine2?: string
  description?: string
}

export default function ContactForm({
  onSubmit,
  titleLine1 = 'HAVE QUESTIONS',
  titleLine2 = 'OR NEED ASSISTANCE?',
  description =
    'We’re here to help! Whether you have questions, need guidance, or require support, our team is ready to assist',
}: Props): JSX.Element {
  return (
    <section className='w-full max-w-[1920px] mx-auto 2xl:px-12  xl:px-9'>
      <div className='flex flex-col md:flex-row items-start gap-10 2xl:gap-[15px]'>
      {/* Left copy */}
      <div className='md:w-1/2'>
        <h2 className='text-[#131313] uppercase font-medium text-[34px] md:text-[42px] xl:text-[42px] 2xl:text-[48px] xl:leading-[46px] 2xl:leading-[52.5px]'>
          {titleLine1}
          <br />
          {titleLine2}
        </h2>
        <p className='xl:mt-[36px]  3xl:mt-[48px] text-[#878787] text-[16px] xl:text-[20px] 2xl:text-[26px] leading-[165%] max-w-[904.5px]'>
          {description}
        </p>
      </div>

      {/* Right form */}
      <div className='md:w-1/2 border border-[#D9D9D9] md:p-8 2xl:p-[32px] bg-white'>
        <form className='flex flex-col gap-[32px]' onSubmit={onSubmit}>
          <div>
            <label htmlFor='fullName' className='block text-[#131313] xl:text-[20px] 2xl:text-[24px] font-medium mb-4 xl:leading-[14px] 2xl:leading-[17px]'>
              Full Name
            </label>
            <input
              id='fullName'
              type='text'
              placeholder='Enter your name'
              className='w-full 2xl:h-[62px] xl:h-[61px] border border-[#E7E7E7] px-[24.09px] text-[#131313] placeholder:text-[#B7B7B7] outline-none focus:ring-1 focus:ring-black'
            />
          </div>

          <div>
            <label htmlFor='email' className='block text-[#131313] xl:text-[20px] 2xl:text-[24px] font-medium mb-4 xl:leading-[14px] 2xl:leading-[17px]'>
              Email
            </label>
            <input
              id='email'
              type='email'
              placeholder='Enter email adress'
              className='w-full 2xl:h-[62px] xl:h-[61px] border border-[#E7E7E7] px-[24.09px] text-[#131313] placeholder:text-[#B7B7B7] outline-none focus:ring-1 focus:ring-black'
            />
          </div>

          <div>
            <label htmlFor='phone' className='block text-[#131313] xl:text-[20px] 2xl:text-[24px] font-medium mb-4 leading-[17px] 2xl:leading-[17px]'>
              Phone
            </label>
            <input
              id='phone'
              type='tel'
              placeholder='Enter phone number'
              className='w-full 2xl:h-[62px] xl:h-[61px] border border-[#E7E7E7] px-[24.09px] text-[#131313] placeholder:text-[#B7B7B7] outline-none focus:ring-1 focus:ring-black'
            />
          </div>

          <div>
            <label htmlFor='message' className='block text-[#131313] xl:text-[20px] 2xl:text-[24px] font-medium mb-4 xl:leading-[14px] 2xl:leading-[17px]'>
              Message
            </label>
            <textarea
              id='message'
              placeholder='Write your message...'
              className='w-full h-[150px] border border-[#E7E7E7] p-[24px] text-[#131313] placeholder:text-[#B7B7B7] outline-none focus:ring-1 focus:ring-black'
            />
          </div>

          <div>
            <button type='submit' className='w-full 2xl:h-[62px] xl:h-[61px] bg-[#131313] text-white xl:text-[18px] 2xl:text-[20px] font-medium'>
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>
    </section>
  )
}
