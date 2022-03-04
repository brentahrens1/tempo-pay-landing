import Head from 'next/head'
import Image from 'next/image'

export default function Home() {

  return (
    <div className='tempo-pay'>
      <Head>
        <title>Tempo Pay</title>
        <meta name="description" content="Simplify healthcare spending with flexible, no-interest payments at your pace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <div className='tempo-pay--logo'>
            <Image width={220} height={40} layout="responsive" priority={true} src='/images/logo.png' alt="Tempo Pay | Logo" /> 
          </div>
        </nav>
      </header>
      <section>
        <div className='tempo-pay--content'>
          <p className='headline'>Healthcare at</p>
          <p className='headline'>your rhythm</p>
          <p>TempoPay is a consumer engagement tool to compliment your benefit offering and drive member spend towards healthier actions and preferred providers.</p>
          <div className='tempo-pay--cta'>
            <p>Help your employees manage their physical and financial wellness.</p>
            <button><a href="mailto:contact@tempopay.com" target="_blank" rel="noreferrer">Contact</a></button>
          </div>
        </div>
      </section>
      <div className='tempo-pay__overlay desktop--bg-ig'>
        <Image width={220} height={170} layout="responsive" priority={true} src='/images/bg-img.png' alt="Tempo Pay | Homepage" /> 
      </div>
      <div className='tempo-pay__overlay mobile--bg-ig'>
        <Image width={220} height={170} layout="responsive" priority={true} src='/images/mobile-bg-image.png' alt="Tempo Pay | Mobile Homepage" /> 
      </div>
      <div className='tempo-pay__overlay'>
        <Image width={220} height={170} layout="responsive" priority={true} src='/images/overlay.png' alt="Tempo Pay | Overlay" /> 
      </div>
    </div>
  )
}
