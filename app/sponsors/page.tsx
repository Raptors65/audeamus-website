import classNames from 'classnames';
import Link from 'next/link';
import styles from '../home.module.css';

export default async function Sponsors() {
  return (
    <>
      <div className="font-glacialindifferencebold w-full h-60 overflow-hidden bg-[url('/team.webp')] bg-cover bg-center flex flex-col items-center justify-center">
        <div className="w-full h-full flex justify-center items-center backdrop-blur-md">
          <h1 className={classNames('text-center align-middle text-6xl sm:text-8xl font-bold mb-2', styles.redShadow)}>SPONSORS</h1>
        </div>
      </div>
      <div className="container mx-auto px-5 max-w-5xl">
        <h3 className={classNames('text-4xl font-bold text-center mb-2 mt-4', styles.textShadow)}>Thank you for your interest in sponsoring Audeamus!</h3>
        <p className="text-2xl font-bold text-center mt-4 mb-8 px-5">
          For new potential sponsors, you can download our Sponsorship Package and Team Resume,
          as well as view our Sponsorship Tiers.
        </p>
        <h4 className={classNames('text-6xl font-bold mb-4 mt-4', styles.titleShadow)}>TIERS</h4>
        <div className="grid grid-cols-4 mt-6 mb-10">
          <div className="col-span-4 lg:col-span-1 mb-3">
            <div className="text-4xl font-bold text-[#B2935B] mb-1">COPPER</div>
            <ul className="text-2xl font-bold">
              <li>- Never gonna</li>
              <li>- Give you up</li>
              <li>- Let you down</li>
            </ul>
          </div>
          <div className="col-span-4 lg:col-span-1 mb-3">
            <div className="text-4xl font-bold text-[#DDDDDD] mb-1">ALUMINIUM</div>
            <ul className="text-2xl font-bold">
              <li>- Never gonna</li>
              <li>- Give you up</li>
              <li>- Let you down</li>
              <li>- Run around</li>
            </ul>
          </div>
          <div className="col-span-4 lg:col-span-1 mb-3">
            <div className="text-4xl font-bold text-[#C0C0C0] mb-1">SILVER</div>
            <ul className="text-2xl font-bold">
              <li>- Never gonna</li>
              <li>- Give you up</li>
              <li>- Let you down</li>
              <li>- Run around</li>
              <li>- Desert you</li>
            </ul>
          </div>
          <div className="col-span-4 lg:col-span-1 mb-3">
            <div className="text-4xl font-bold text-[#FFD700] mb-1">GOLD</div>
            <ul className="text-2xl font-bold">
              <li>- Copper &gt; Aluminium</li>
              <li>- Where Bronze</li>
              <li>- What if Platinum &gt; Gold</li>
              <li>- Should buttons</li>
              <li>- be above tiers?</li>
              <li>- Italics makes me think it&apos;s a link</li>
            </ul>
          </div>
        </div>
        <h4 className={classNames('text-6xl font-bold mb-4 mt-4', styles.titleShadow)}>CURRENT SPONSORS</h4>
        <div className="grid grid-cols-2 mx-auto max-w-5xl">
          <div className="flex items-center flex-col col-span-2 lg:col-span-1 mb-5">
            <h3 className={classNames('text-3xl font-bold mb-2', styles.textShadow)}>Download our Sponsorship Package:</h3>
            <Link className="italic bg-red-600 mx-auto text-3xl font-bold px-3 py-2 rounded-xl" href="#">Download</Link>
          </div>
          <div className="flex items-center flex-col col-span-2 lg:col-span-1 mb-5">
            <h3 className={classNames('text-3xl font-bold mb-2', styles.textShadow)}>Download our Team Resume:</h3>
            <Link className="italic bg-red-600 mx-auto text-3xl font-bold px-3 py-2 rounded-xl" href="#">Download</Link>
          </div>
        </div>
      </div>
    </>
  );
}
