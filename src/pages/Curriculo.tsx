import { FunctionComponent, useCallback } from "react";
import styles from "./Curriculo.module.css";

const Curriculo: FunctionComponent = () => {
  const onIconmonstrLinkedin31Click = useCallback(() => {
    window.open("https://www.linkedin.com/in/gumiguel/");
  }, []);

  const onIconmonstrGithub11Click = useCallback(() => {
    window.open("https://github.com/gumiguell");
  }, []);

  const onIconWhatsappClick = useCallback(() => {
    window.open(
      "https://api.whatsapp.com/send/?phone=5519995398942&text&type=phone_number&app_absent=0"
    );
  }, []);

  return (
    <div className={styles.curriculo}>
      <div className={styles.background} />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <div className={styles.frame}>
        <div className={styles.frameChild} />
        <a
          className={styles.iconmonstrLinkedin31}
          href="https://www.linkedin.com/in/gumiguel/"
          onClick={onIconmonstrLinkedin31Click}
        >
          <img className={styles.groupIcon} alt="" src="/vector1.svg" />
        </a>
        <a
          className={styles.iconmonstrGithub11}
          href="https://github.com/gumiguell"
          onClick={onIconmonstrGithub11Click}
        >
          <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
        </a>
        <div className={styles.iconDocumentDownload}>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
        </div>
        <img
          className={styles.iconWhatsapp}
          alt=""
          src="/-icon-whatsapp.svg"
          onClick={onIconWhatsappClick}
        />
        <h1 className={styles.gustavoMiguel}>GUSTAVO MIGUEL</h1>
        <i className={styles.estudanteFrontEnd}>ESTUDANTE FRONT-END</i>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
        <h1 className={styles.sobreMim}>Sobre mim</h1>
        <b className={styles.meuObjetivoProfissionalContainer}>
          <p className={styles.meuObjetivoProfissional}>
            Meu objetivo profissional atualmente é ingressar no mercado de
            trabalho, adquirir experiência e conhecimento, desenvolver
            habilidades e contribuir positivamente. Acredito na importância de
            trabalhar duro, sempre estar disposto a aprender e superar desafios.
          </p>
        </b>
        <b className={styles.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa}>
          <p className={styles.meuObjetivoProfissional}>
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p>
        </b>
        <h1 className={styles.objetivos}>Objetivos</h1>
        <img className={styles.image6Icon} alt="" src="/imgGustavo@2x.png" />
      </div>
      <h1 className={styles.projetos}>// Projetos</h1>
    </div>
  );
};

export default Curriculo;
