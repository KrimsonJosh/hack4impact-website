import Head from 'next/head';
import { FaNetworkWired, FaHandshake, FaFolder } from 'react-icons/fa';
import styles from './styles.module.scss';
import Container from '@components/shared/Container';
import ProjectView from '@components/shared/Project';
import Card from '@components/home/Card';
import LinkButton from '@components/shared/LinkButton';
import Hero from '@components/home/Hero';
import fetchContent from '@utils/fetchContent';
import Project from '@utils/contentTypes/Project';

type Props = {
  featuredProjects: Project[];
};

function Home({ featuredProjects }: Props) {
  return (
    <main style={{ marginTop: 0 }}>
      <Head>
        <title>Hack4Impact</title>
      </Head>
      <Hero />
      <Container>
        <h2>Our Initiatives</h2>
        <div className={styles.card_row}>
          <Card
            title="Chapter Network"
            subtitle="We mentor"
            description="We help new chapters help their local community by providing established communication channels with veteran chapters and mentors"
            href="/work#our-chapters"
            buttonTitle="Current Chapters">
            <FaNetworkWired />
          </Card>
          <Card
            title="Nonprofit Projects"
            subtitle="We build"
            description="We help nonprofits do the good they are meant to be doing more efficiently. By building them the custom software they need, they can focus on their important work"
            href="/work"
            buttonTitle="Current Projects">
            <FaHandshake size={34} />
          </Card>
          <Card
            title="Chapter Resources"
            subtitle="We share"
            description="Our 6 years of experience in building socially impactful technology has given our chapters and members the tools to help nonprofits"
            href="/apply/chapter"
            buttonTitle="Our Resourses">
            <FaFolder />
          </Card>
        </div>
      </Container>
      <Container>
        <h2>Featured Projects</h2>
        {featuredProjects.map(item => (
          <ProjectView key={item.name} {...item} />
        ))}
        <div className={styles.button_row}>
          <LinkButton href="/work">See all chapters</LinkButton>
          <LinkButton href="/apply/nonprofit" type="secondary">
            Propose your nonprofit project
          </LinkButton>
        </div>
      </Container>
    </main>
  );
}

export default Home;

export async function getStaticProps() {
  const { projectCollection } = await fetchContent(`
  {
    projectCollection(limit: 3, where: {featuredOnHomePage: true}) {
      items {
        photo {
          url
          description
        }
        name
        tags
        description {
          json
        }
        link
      }
    }
  }
  `);
  return {
    props: {
      featuredProjects: projectCollection.items,
    },
  };
}
