// Head is a Next.js provided component that
// allows you to modify the head of the page
import Head from "next/head";
// Image is a Next.js provided component that handles
// image responsiveness, only loading images when they enter viewport
// image optimization
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Ruby Stitches Sewing";
export const siteTitle = "Ruby Stitches";

export default function Layout({ children, home }) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-8'>
          <Head>
            <link rel='icon' href='/favicon.ico' />
            <meta
              name='description'
              content='Learn to sew with Ruby Stitches Sewing'
            />
            <meta
              property='og:image'
              content={`https://og-image.vercel.app/${encodeURI(
                siteTitle
              )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name='og:title' content={siteTitle} />
            <meta name='twitter:card' content='summary_large_image' />
          </Head>
          <header className={styles.header}>
            {home ? (
              <>
                <Image
                  priority
                  src='/images/profile.jpg'
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt={name}
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
              </>
            ) : (
              <>
                <Link href='/'>
                  <a>
                    <Image
                      priority
                      src='/images/profile.jpg'
                      className={utilStyles.borderCircle}
                      height={108}
                      width={108}
                      alt={name}
                    />
                  </a>
                </Link>
                <h2 className={utilStyles.headingLg}>
                  <Link href='/'>
                    <a className={utilStyles.colorInherit}>{name}</a>
                  </Link>
                </h2>
              </>
            )}
          </header>
          <main>{children}</main>
          {!home && (
            <div className={styles.backToHome}>
              <Link href='/'>
                <a>← Back to home</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
