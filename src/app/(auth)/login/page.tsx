'use client'

import Button from '@/components/ui/Button'
import { FC, useState } from 'react'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import Image from 'next/image'
import Link from "next/link";
import styles from "../../../../styles/auth/login/page.module.css"

const Page: FC = () => {

  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function loginWithGoogle() {
    setIsLoading(true)
    try {
      await signIn('google')
    } catch (error) {
      // display error message to user
      toast.error('Something went wrong with your login.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className={styles.page_parent}>
        <div className={styles.page_wrapper}>
          <div className={styles.top_title_wrapper}>
            <h2 className={styles.top_title}>
              Real Time Chat App
            </h2>
            <span className={styles.information_span}>
              <p>Features</p>

              <p>Login With Google</p>
              <span className={styles.white_span_line}></span>
              <p>Accept Requests</p>
              <span className={styles.white_span_line}></span>
              <p>Send Requests</p>
              <span className={styles.white_span_line}></span>
              <p>Chat With Friends</p>
              <span className={styles.white_span_line}></span>
            </span>
          </div>


          <div className={`flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8`}>
          <div className={styles.pageinfo_column}>

            <div className='w-full flex flex-col items-center max-w-md space-y-8'>
              <div className='flex  flex-col items-center gap-8'>

                <Link
                  href={"https://astrumstellar.com"}>


                  <div className={styles.top_links_group}>
                    <p className={styles.made_by}>Developer: Deo Singiza</p>
                    <p className={styles.made_by}>Developer&apos;s Website</p>
                    <p className={styles.top_link2}> Source Code In Github
                    </p>
                  </div>

                </Link>

                <Link
                  href={"https:astrumstellar.com"}>
                  <Image
                    className={styles.logo}
                    alt='logo'
                    src={'/logored2.png'}
                    width={100}
                    height={100}>
                  </Image>
                </Link>

                  <div className={styles.topinfo}>
                <h2 className={styles.sign_in_text}>
                  Sign In To Chat With Your Friends
                </h2>
                <button onClick={handleButtonClick}>How to Use The App?</button>
                {isPopupVisible && (
        <div className={styles.popup}>
          <div className={styles.popup_content}>
            <p className={styles.popup_content_items}>
              <span>1. Log In With A Google Account</span>
              <span>2. Check The Dashboard For The Add A Friend Button</span>
              <span>3.Enter The Email You Want To Add.</span>
              <span>4. If The Person Whose Email You Added Has Also Already Logged In To This App And Is Using It, Then The Email Will Be Added. Otherwise You Will Get An Error. This Is For Safety Reasons, No Need To Get In Trouble Here!</span>
              <span>5.Once A Friend Has Been Added, You Can Chat With Them.</span>
              <span>Note: This App has a monthly data cap as it is a demo app for clients to view. If for some reason the app is not working for you, please contact me and I will provide you another link for testing. Cheers.</span>

            </p>
            <button onClick={handlePopupClose}>Close</button>
          </div>
        </div>
        
      )}
    </div>
    </div>
              </div>


              <div className={styles.signin_andicons}>


              <Button
                isLoading={isLoading}
                type='button'
                className='max-w-sm mx-auto w-max pl-10 pr-10'
                onClick={loginWithGoogle}>
                {isLoading ? null : (
                  <svg
                    className='mr-2 h-4 w-4'
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fab'
                    data-icon='github'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'>
                    <path
                      d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                      fill='#4285F4'
                    />
                    <path
                      d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                      fill='#34A853'
                    />
                    <path
                      d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                      fill='#FBBC05'
                    />
                    <path
                      d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                      fill='#EA4335'
                    />
                    <path d='M1 1h22v22H1z' fill='none' />
                  </svg>
                )}
                <p className={styles.google_sign_in}>
                  Google Sign In
                </p>
              </Button>
              <div className='align-middle justify-items-center flex flex-row m-3'
              >
                <Link
                  href={"https://vercel.com/"}>
                  <Image
                    className={styles.bottom_logo}
                    alt='logo'
                    src={'/vercel.jpg'}
                    width={100}
                    height={100}>
                  </Image>
                </Link>
                <Link
                  href={"https://pusher.com/"}>
                  <Image
                    className={styles.bottom_logo}
                    alt='logo'
                    src={'/pusher.jpg'}
                    width={100}
                    height={100}>
                  </Image>
                </Link>

                <Link
                  href={"https://redis.com/"}
                >
                  <Image
                    className={styles.bottom_logo}
                    alt='logo'
                    src={'/redislogo.jpg'}
                    width={100}
                    height={100}>
                  </Image>
                </Link>
              </div>
              </div>
            </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Page
