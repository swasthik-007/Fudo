import Image from 'next/image'
import css from '../styles/Hero.module.css'
import Cherry from '../assets/Cherry.png'
import HeroImage from '../assets/HeroImage.png'
import pizza1 from '../assets/p1.jpg'
import { UilPhone } from '@iconscout/react-unicons'
export default function Hero() {
    return (
        <div className={css.container}>
            {/* left side */}

            <div className={css.left}>

                <div className={css.cherryDiv}>
                    <span>More than Faster</span>
                    <Image src={Cherry} alt="" width={40} height={25} />
                </div>


                <div className={css.heroText}>

                    <span>Be The Fastest</span>
                    <span>In Delivering</span>
                    <span>

                        Your <span style={{ color: "var(--themeRed)" }}>Pizza</span>
                    </span>

                </div>


                {/* </div> */}

                <span className={css.miniText}>
                    Our Mission is to filling your tummy with delicious
                    and free delivery
                </span>



                <button className={`btn ${css.btn}`}>
                    Get Started
                </button>


            </div >
            {/* right side */}

            <div className={css.right}>

                <div className={css.imageContainer}>

                    <Image src={HeroImage} alt='' layout='intrinsic' />

                </div>

                <div className={css.ContactUs}>
                    <span>Contact Us</span>
                    <div>
                        <UilPhone color='white' />
                    </div>
                </div>

                <div className={css.Pizza}>
                    <div>
                        <Image src={pizza1} alt='' objectFit='cover' layout='intrinsic' />
                    </div>
                    <div className={css.details}>
                        <span>Italian Pizza</span>
                        <span><span style={{ color: "var(--themeRed)" }}>$</span>7.49</span>
                    </div>
                </div>

            </div >
        </div >
    );
}