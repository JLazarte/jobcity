import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { Label } from "@/components/atoms/label";
import { Card } from "@/components/molecules/card";

export default function Home() {

  const MenuOptions = [
    {
      label: <>Nonprofit <span>-&gt;</span></>,
      description: "List non profit companies",
      link: "/companies"
    },
    {
      label: <>Templates <span>-&gt;</span></>,
      description: "Create or Modify template",
      link: "/templates"
    },
    {
      label: <>Notification <span>-&gt;</span></>,
      description: "Send new notification",
      link: "/notification"
    }
  ]


  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        {
          MenuOptions.map(option => <Link
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card {...option}></Card>
            </Link>
          )
        }
      </div>
    </main>
  );
}
