import * as React from "react";
import styles from "./Footer.module.css";
import { BsFacebook, BsGithub, BsTelegram } from 'react-icons/bs';
const Footer = () => {
    return (
        <>
        <div className={styles.phantom}></div>
        <div className={styles.footer}>
            
                <a href="https://www.facebook.com/abdullaev.akbar" className={styles.social_links}>
                    <BsFacebook />
                </a>
                <a href="https://github.com/newGentle?tab=repositories" className={styles.social_links}>
                    <BsGithub />
                </a>
                <a href="https://t.me/Newgentle" className={styles.social_links}>
                    <BsTelegram />
                </a>

                <p class="copyright">© Copyright 2023</p>
            
        </div>
        </>
    );
};

export { Footer };
