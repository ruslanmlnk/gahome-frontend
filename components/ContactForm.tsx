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
    <section className='w-full md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px] 2xl:max-w-[1920px] mx-auto 2xl:px-12 xl:px-9 md:px-6 px-4'>
      <div className='flex flex-col md:flex-row items-start gap-6 md:gap-9 2xl:gap-[15px]'>
      {/* Left copy */}
      <div className='xl:w-1/2 xl:max-w-none lg:max-w-[464px] md:max-w-[336px]'>
        <h2 className='text-[#131313] uppercase font-medium text-[24px] md:text-[26px] lg:text-[30px] xl:text-[42px] 2xl:text-[48px] md:leading[28.5px] lg:leading[33px] xl:leading-[46px] 2xl:leading-[52.5px]'>
          {titleLine1}
          <br />
          {titleLine2}
        </h2>
        <p className='mt-[9px] md:mt-0 xl:mt-[36px] 2xl:mt-[48px] text-[#878787] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[26px] leading-[165%] max-w-[904.5px]'>
          {description}
        </p>
      </div>

      {/* Right form */}
      <div className='w-full md:w-1/2 border border-[#D9D9D9] p-6 xl:p-8 bg-white'>
        <form className='flex flex-col gap-[24px] lg:gap-[28px] xl:gap-[32px] 2xl:gap-[33.377px]' onSubmit={onSubmit}>
          <div>
            <label htmlFor='fullName' className='block text-[#131313] text-[16px] lg:text-[18px] leading-[11px] xl:text-[20px] 2xl:text-[24px] font-medium mb-4 lg:leading-[13px] xl:leading-[14px] 2xl:leading-[17px]'>
              Full Name
            </label>
            <input
              id='fullName'
              type='text'
              placeholder='Enter your name'
              className='w-full 2xl:h-[62px] xl:h-[61px] lg:h-[51px] md:h-[50px] h-[42px] border border-[#E7E7E7] px-[16px] md:px-[24.09px] text-[#131313] placeholder:text-[#B7B7B7] outline-none focus:ring-1 focus:ring-black'
            />
          </div>

          <div>
            <label htmlFor='email' className='block text-[#131313] text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium mb-4 leading-[11px] lg:leading-[13px] xl:leading-[14px] 2xl:leading-[17px]'>
              Email
            </label>
            <input
              id='email'
              type='email'
              placeholder='Enter email adress'
              className='w-full 2xl:h-[62px] xl:h-[61px] lg:h-[51px] md:h-[50px] h-[42px] border border-[#E7E7E7] px-[16px] md:px-[24.09px] text-[#131313] placeholder:text-[#B7B7B7] outline-none focus:ring-1 focus:ring-black'
            />
          </div>

          <div>
            <label htmlFor='phone' className='block text-[#131313] text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium mb-4 leading-[11px] lg:leading-[13px] 2xl:leading-[17px]'>
              Phone
            </label>
            <input
              id='phone'
              type='tel'
              placeholder='Enter phone number'
              className='w-full 2xl:h-[62px] xl:h-[61px] lg:h-[51px] md:h-[50px] h-[42px] border border-[#E7E7E7] px-[16px] md:px-[24.09px] text-[#131313] placeholder:text-[#B7B7B7] outline-none focus:ring-1 focus:ring-black'
            />
          </div>

          <div>
            <label htmlFor='message' className='block text-[#131313] text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium mb-4 leading-[11px] lg:leading-[13px] xl:leading-[14px] 2xl:leading-[17px]'>
              Message
            </label>
            <textarea
              id='message'
              placeholder='Write your message...'
              className='w-full h-[150px] md:h-[100px] lg:h-[150px] border border-[#E7E7E7] p-[16px] md:p-[24px] text-[#131313] placeholder:text-[#B7B7B7] outline-none focus:ring-1 focus:ring-black'
            />
          </div>

          <div>
            <button type='submit' className='w-full 2xl:h-[62px] xl:h-[61px] lg:h-[51px] md:h-[50px] h-[51px] bg-[#131313] text-white xl:text-[18px] 2xl:text-[20px] font-medium'>
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>
    </section>
  )
}
