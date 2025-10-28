import type { JSX } from 'react'

type FileDownloadProps = {
    text: string;
    fileUrl: string | null | undefined
}


export default function FileDownload({ fileUrl, text }: FileDownloadProps) {
    return (
        <section className="mx-auto w-full max-w-[1920px] xl:px-12 md:px-6 px-4 xl:mt-[57px] lg:mt-[28px] md:mt-[24px] mt-[10px]">
            <section className='w-full flex gap-6 md:gap-0 flex-col-reverse md:flex-row md:justify-between border border-[#D9D9D9] md:items-center xl:py-[32px] xl:px-[48px] lg:py-[24px] lg:px-[32px] p-6'>
                <div className='text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[28px] text-[#131313] font-medium leading-[11px] lg:leadfing-[13px] xl:leadfing-[15px] 2xl:leading-[20px] uppercase'>{text}</div>
                <a href={fileUrl || '#'} download target="_blank" rel="noopener noreferrer">
                    <svg width="39" height="48"className="w-[25.6px] h-[32px] lg:w-[28.8px] lg:h-[36px] xl:w-[33.6px] xl:h-[42]"viewBox="0 0 39 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.2405 30.4319C9.79886 30.4319 9.50126 30.4751 9.34766 30.5183V33.3455C9.53006 33.3887 9.75806 33.4007 10.0725 33.4007C11.2221 33.4007 11.9301 32.8199 11.9301 31.8407C11.9301 30.9599 11.3205 30.4319 10.2405 30.4319ZM18.6093 30.4607C18.1293 30.4607 17.8173 30.5039 17.6325 30.5471V36.8111C17.8173 36.8543 18.1149 36.8543 18.3837 36.8543C20.3445 36.8687 21.6213 35.7887 21.6213 33.5039C21.6357 31.5119 20.4717 30.4607 18.6093 30.4607Z" fill="#878787" />
                        <path d="M24 0H4.8C3.52696 0 2.30606 0.505713 1.40589 1.40589C0.505713 2.30606 0 3.52696 0 4.8V43.2C0 44.473 0.505713 45.6939 1.40589 46.5941C2.30606 47.4943 3.52696 48 4.8 48H33.6C34.873 48 36.0939 47.4943 36.9941 46.5941C37.8943 45.6939 38.4 44.473 38.4 43.2V14.4L24 0ZM13.1952 34.056C12.4536 34.752 11.3592 35.064 10.0848 35.064C9.8377 35.0667 9.59071 35.0522 9.3456 35.0208V38.4432H7.2V28.9968C8.1672 28.8528 9.1464 28.7856 10.1256 28.8C11.4624 28.8 12.4128 29.0544 13.0536 29.5656C13.6632 30.0504 14.076 30.8448 14.076 31.7808C14.0736 32.7216 13.7616 33.516 13.1952 34.056ZM22.332 37.308C21.324 38.1456 19.7904 38.544 17.916 38.544C16.7928 38.544 15.9984 38.472 15.4584 38.4V28.9992C16.427 28.8578 17.4051 28.7912 18.384 28.8C20.2008 28.8 21.3816 29.1264 22.3032 29.8224C23.2992 30.5616 23.9232 31.74 23.9232 33.432C23.9232 35.2632 23.2536 36.528 22.332 37.308ZM31.2 30.648H27.5232V32.8344H30.96V34.596H27.5232V38.4456H25.3488V28.872H31.2V30.648ZM24 16.8H21.6V4.8L33.6 16.8H24Z" fill="#878787" />
                    </svg>
                </a>
            </section>
        </section>
    )
}
