import React from "react";
import SocialNetworks from "../components/SocialNetworks";
import styles from "../css/title.module.css";

const AboutUs = () => {
    return (
        <div>
            <div>
                <h1 className={styles.title}>Sobre nosotros</h1>
                <div className={styles.containerText}>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto modi ipsam nisi eveniet eum. Ratione voluptatem totam molestias explicabo aut omnis culpa quo, cum ex quidem nesciunt vitae. Ratione, aliquam!
                        Et soluta aperiam possimus, rerum accusantium minima ipsa, iusto libero magni molestiae odit aliquam vel? Itaque odio temporibus quo nobis nisi dicta omnis reprehenderit assumenda iste, qui placeat obcaecati vero!
                        Doloribus nulla vel, exercitationem numquam harum optio praesentium culpa fugiat molestiae obcaecati quae voluptatibus, soluta qui. Eos voluptate tempore voluptatibus fugiat. Omnis dignissimos qui corporis labore aut animi laboriosam accusantium?
                    </p>
                </div>
            </div>
            <div>
                <SocialNetworks />
            </div>
        </div>
    );
};

export default AboutUs;
