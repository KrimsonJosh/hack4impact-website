import Head from 'next/head';
import Header from '@components/shared/Header';
import ImageHighlight from '@components/shared/ImageHighlight';
import Container from '@components/shared/Container';
import LinkButton from '@components/shared/LinkButton';
import styles from './styles.module.scss';
import classNames from 'classnames';
import FAQCell from '@components/apply/FAQCell';
import Link from 'next/link';
import HoverShinyEffect from '@components/shared/HoverShinyEffect';
import { IoMdArrowDropright as ArrowIcon } from 'react-icons/io';

const fakeContentful = {
  chapter: {
    title: "Writing your chapter application",
    description:
      'Want to create your own chapter? Have a deep interest in social good and technology? Hack4Impact is currently recruiting for their Spring 2020 chapter cohort. Find your founders, partners, and friends, and consider applying to have an impact in your local community. Below you can find frequently asked questions to help guide you through your application process, and feel free to email contact@hack4impact.org at anytime for questions.',
    photo: 'http://placekitten.com/g/1000/600',
    applicationLink: 'http://placekitten.com',
    faqs: [
      {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel odio erat. Nullam vel risus nisi. Etiam sed nisi augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi a odio rutrum, feugiat elit quis, aliquam enim. Aliquam vel vehicula nisi, in venenatis nulla. Maecenas mollis in metus in pulvinar. Nullam consequat massa quis quam tristique, sit amet pulvinar lectus pharetra. Donec ornare purus at ultrices facilisis.',
      },
      {
        question: 'Lorem ipsum dolor sit amet?',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel odio erat. Nullam vel risus nisi. Etiam sed nisi augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi a odio rutrum, feugiat elit quis, aliquam enim. Aliquam vel vehicula nisi, in venenatis nulla. Maecenas mollis in metus in pulvinar. Nullam consequat massa quis quam tristique, sit amet pulvinar lectus pharetra. Donec ornare purus at ultrices facilisis.',
      },
    ],
  },
  nonprofit: {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel odio erat. Nullam vel risus nisi. Etiam sed nisi augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi a odio rutrum, feugiat elit quis, aliquam enim. Aliquam vel vehicula nisi, in venenatis nulla. Maecenas mollis in metus in pulvinar. Nullam consequat massa quis quam tristique, sit amet pulvinar lectus pharetra. Donec ornare purus at ultrices facilisis.  ',
    image: 'http://placekitten.com/g/1000/600',
    applicationLink: 'http://placekitten.com',
    faqs: [
      {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel odio erat. Nullam vel risus nisi. Etiam sed nisi augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi a odio rutrum, feugiat elit quis, aliquam enim. Aliquam vel vehicula nisi, in venenatis nulla. Maecenas mollis in metus in pulvinar. Nullam consequat massa quis quam tristique, sit amet pulvinar lectus pharetra. Donec ornare purus at ultrices facilisis.',
      },
    ],
  },
};

type Props = {
  content: any; // TODO: update when Contentful is added
  applicationType: 'chapter' | 'nonprofit';
};

function Apply({ content, applicationType }: Props) {
  return (
    <main>
      <Head>
        <title>Join Us</title>
      </Head>
      <Header title="Apply">
        <div className={styles.switch_control}>
          <Link href="/apply/[applicationType]" as="/apply/chapter">
            <a className={classNames({ [styles.selected]: applicationType === 'chapter' })}>
              For New Chapters
              <HoverShinyEffect />
            </a>
          </Link>
          <Link href="/apply/[applicationType]" as="/apply/nonprofit">
            <a className={classNames({ [styles.selected]: applicationType === 'nonprofit' })}>
              For Non Profits
              <HoverShinyEffect />
            </a>
          </Link>
        </div>
      </Header>
      <div style={{ marginTop: 20 }}>
        <Container className="row spaced aligned wrap">
          <div className={styles.requirements}>
            <h2>{content.title}</h2>
            <p style={{ marginBottom: 40 }}>{content.description}</p>
            <LinkButton href={content.applicationLink} className={styles.link_button} external>
              Apply Here 
              <ArrowIcon />
            </LinkButton>
          </div>
          <div className={styles.image_wrap}>
            <ImageHighlight
              src={content.photo}
              alt=""
              width="400"
              height="300"
              className={styles.image}
            />
          </div>
        </Container>
        <Container>
          <h2>FAQs</h2>
          {content.faqs.map(({ question, answer }) => (
            <FAQCell key={question} question={question} answer={answer} />
          ))}
        </Container>
      </div>
    </main>
  );
}

export default Apply;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { applicationType: 'chapter' } },
      { params: { applicationType: 'nonprofit' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params: { applicationType } }) {
  const content = fakeContentful[applicationType];

  return {
    props: { content, applicationType },
  };
}
