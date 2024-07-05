import Link from "next/link";
import styles from "./page.module.css";
import { Label } from "@/components/atoms/label";
import { Card } from "@/components/molecules/card";
import { Code } from "@/components/atoms/code";

import NonProfitService from "@/services/nonprofit/nonprofit.service";
import { Flex } from "@/components/atoms/flex";
import { List } from "@/components/atoms/list";

export default function Home() {

  const MenuOptions = [
    {
      label: <>Nonprofit <span>-&gt;</span></>,
      description: "CRUD Companies",
      link: "/companies"
    },
    {
      label: <>Templates <span>-&gt;</span></>,
      description: "CRUD Templates",
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
      <Flex className={styles.container}>
        <Label>NonProfit Accounts Manager</Label>
        <Code>Searching for list of companies <span className="loading"></span></Code>
        <List style={{ flex: 1 }}>
          <Flex style={{ flexDirection: "column", height: "inherit", flexWrap: "nowrap" }}>
            {
                NonProfitService
                  .getCompanies()
                  .map((company: any) => <Card
                      label={`Name: ${company.name}`}
                      description={[company.address, company.email].join(" - ")}>
                  </Card>)
            }
          </Flex>
        </List>
        <Flex even={true}>
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
        </Flex>
      </Flex>
    </main>
  );
}
