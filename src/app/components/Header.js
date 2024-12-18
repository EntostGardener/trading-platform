import styles from "../components/Header.module.css";

const Header = () => {
    return (
     <div className={styles.headerWrapper}>
            <div className={styles.headerMainCont}>
                <div className={styles.logoCont}>
                    <img></img>
                </div>
                <div className={styles.homeCont}></div>
                <div className={styles.learnTradingCont}></div>
                <div className={styles.aboutCont}></div>
                <div className={styles.contactCont}></div>
                <div className={styles.loginCont}></div>
                <div className={styles.signUpCont}></div>
            </div>
     </div>
    )
}

export  default Header;