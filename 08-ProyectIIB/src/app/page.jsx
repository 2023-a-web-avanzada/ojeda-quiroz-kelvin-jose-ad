import Image from "next/image"
import styles from "./page.module.css"
import Hero from "public/hero.png"
import Button from "@/components/Button/Button"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Una herramienta para gestionar tus cursos de capacitación.
        </h1>
        <p className={styles.desc}>Ten un registro de tus cursos online.</p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  )
}
