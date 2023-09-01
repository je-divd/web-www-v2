import { FaqHome } from "components/faq/FaqHome";
import ExportedImage from "next-image-export-optimizer";
import * as React from "react";
import { CtaLink } from "ui/button/CtaLink";
import { Card } from "ui/card/Card";
import { CardPerson } from "ui/card/CardPerson";
import { Carousel } from "ui/carousel/Carousel";
import { CarouselSmall } from "ui/carousel/CarouselSmall";
import { Opener } from "ui/opener/Opener";
import { SubOpener } from "ui/opener/SubOpener";
import { PageLayout } from "ui/page/PageLayout";
import { PageSection } from "ui/page/PageSection";
import { Stats, StatsItem } from "ui/stats/Stats";
import i18n from "i18n/i18n";

import { attributes } from "../../content/home.md";
let { en, nl } = attributes as any;

export interface HomeProps {
  lang?: "en" | "nl";
}

export function Home({ lang = "en" }: HomeProps) {
  let content = lang === "en" ? en : nl;
  let t = i18n(lang);

  return (
    <div className="home-layout">
      <Opener imgSrc="/static/test.png" imgAlt="Test">
        <h1>{content.title}</h1>
        <p className="opener">{content.intro}</p>
        <CtaLink href={`/${lang}/who-we-are`}>{t("whoweare")}</CtaLink>
      </Opener>
      <PageSection type="inverse" overlap="top">
        <PageLayout columns={3}>
          <Card imgSrc="/static/test.png" imgAlt="Test">
            <h2>A race between Russion criminals and Dutch hackers.</h2>
            <CtaLink href="/temp">Read more</CtaLink>
          </Card>
          <Card imgSrc="/static/test.png" imgAlt="Test">
            <h2>A race between Russion criminals and Dutch hackers.</h2>
            <CtaLink href="/temp">Read more</CtaLink>
          </Card>
          <Card imgSrc="/static/divd_family.png" imgAlt="Test" cta fit="contain">
            <h2>A race between Russion criminals and Dutch hackers.</h2>
            <CtaLink href="/temp">Read more</CtaLink>
          </Card>
        </PageLayout>
        <PageLayout layout="left" extend>
          <div className="reverse">
            <h2>What we do</h2>
            <p>
              We aim to make the digital world safer by reporting vulnerabilities we find in digital systems to the
              people who can fix them.
            </p>
            <CtaLink href="/temp" isSecondary>
              Learn more
            </CtaLink>
          </div>

          <Carousel>
            <Card imgSrc="/static/test.png" imgAlt="Test">
              <h2>A race between Russion criminals and Dutch hackers.</h2>
              <CtaLink href="/temp">Read more</CtaLink>
            </Card>
            <Card imgSrc="/static/test.png" imgAlt="Test">
              <h2>A race between Russion criminals and Dutch hackers.</h2>
              <CtaLink href="/temp">Read more</CtaLink>
            </Card>
            <Card imgSrc="/static/divd_family.png" imgAlt="Test" cta fit="contain">
              <h2>A race between Russion criminals and Dutch hackers.</h2>
              <CtaLink href="/temp">Read more</CtaLink>
            </Card>
          </Carousel>
        </PageLayout>
      </PageSection>

      <PageSection type="gradient">
        <PageLayout columns={3}>
          <h2>Our proudest work</h2>
          <Card imgSrc="/static/test.png" imgAlt="Test">
            <h2>A race between Russion criminals and Dutch hackers.</h2>
            <CtaLink href="/temp">Read more</CtaLink>
          </Card>
          <Card imgSrc="/static/test.png" imgAlt="Test">
            <h2>A race between Russion criminals and Dutch hackers.</h2>
            <CtaLink href="/temp">Read more</CtaLink>
          </Card>
          <Card imgSrc="/static/divd_family.png" imgAlt="Test" cta fit="contain">
            <h2>A race between Russion criminals and Dutch hackers.</h2>
            <CtaLink href="/temp">Read more</CtaLink>
          </Card>
        </PageLayout>
      </PageSection>

      <PageSection type="inverse" overlap="bottom" round={["topright"]}>
        <PageLayout>
          <SubOpener>
            <h2>Our Mission</h2>
            <p>
              We aim to make the digital world safer by reporting vulnerabilities we find in digital systems to the
              people who can fix them. We have a global reach, but do it Dutch style: open, honest, collaborative and
              for free.
            </p>
          </SubOpener>
        </PageLayout>
        <PageLayout>
          <Stats>
            <StatsItem>
              <h2>100+</h2>
              <h6>members</h6>
            </StatsItem>
            <StatsItem>
              <h2>86</h2>
              <h6>total cases</h6>
            </StatsItem>
            <StatsItem>
              <h2>356.781</h2>
              <h6>vulnerable ip's notified</h6>
            </StatsItem>
          </Stats>
        </PageLayout>
      </PageSection>

      <PageSection>
        <PageLayout extend>
          <h2>Testemonials</h2>
          <Carousel>
            <CardPerson name="John Doe" title="CEO" imgSrc="/static/deckard.webp">
              <p>Lorem ipsum</p>
            </CardPerson>
            <CardPerson name="John Doe" title="CEO" imgSrc="/static/deckard.webp">
              <p>Lorem ipsum</p>
            </CardPerson>
            <CardPerson name="John Doe" title="CEO" imgSrc="/static/deckard.webp">
              <p>Lorem ipsum</p>
            </CardPerson>
            <CardPerson name="John Doe" title="CEO" imgSrc="/static/deckard.webp">
              <p>Lorem ipsum</p>
            </CardPerson>
          </Carousel>
        </PageLayout>
        <PageLayout columns={2}>
          <div>
            <h2>Help us, help you!</h2>
            <p>
              Make our work easier by putting our security.txt in the code of your website and our IP 194.5.73.0-255 on
              your allow list. This way you make sure that our research team can look for vulnerabilities without
              alarming your cyber security systems. And we know who to talk to when we find vulnerabilities.
            </p>
            <p>&nbsp;</p>
            <CtaLink href="/temp">Download Security.txt</CtaLink>
            <p>&nbsp;</p>
          </div>
          <div style={{ position: "relative" }}>
            <ExportedImage
              src="/static/csirt_team.png"
              alt="Security.txt"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain" }}
            />
          </div>
        </PageLayout>
      </PageSection>

      <PageSection type="primary" round={["topleft"]}>
        <PageLayout columns={2}>
          <div>
            <h2>Want to become a volunteer?</h2>
            <p>Test yo</p>
            <p>Test yo</p>
            <p>Test yo</p>
            <CtaLink href="/temp">Become a volunteer</CtaLink>
            <CtaLink href="/temp" isInverse isExternal>
              Open Roles
            </CtaLink>
          </div>
          <div style={{ position: "relative" }}>
            <ExportedImage
              src="/static/volunteers.png"
              alt="Become a volunteer"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain" }}
            />
          </div>
        </PageLayout>
      </PageSection>

      <PageSection type="inverse" round={["bottomright"]}>
        <PageLayout>
          <div className="reverse">
            <h2>Our partners</h2>

            <CarouselSmall>
              <div>A</div>
              <div>B</div>
              <div>C</div>
              <div>D</div>
            </CarouselSmall>

            <p>
              Lorem ipsum dolor sit amet consectetur. Sagittis volutpat risus euismod venenatis gravida purus non.
              Maecenas tortor tempor nulla bibendum. A sem velit tellus tortor risus.
            </p>

            <CtaLink isSecondary href="/temp">
              Become a partner
            </CtaLink>
          </div>
        </PageLayout>
      </PageSection>

      <PageSection type="gradient-reverse">{/* <FaqHome lang={lang} /> */}</PageSection>
    </div>
  );
}
