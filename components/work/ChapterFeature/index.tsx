import ProjectView from '@components/shared/Project';
import Chapter from '@utils/contentTypes/Chapter';
import styles from './styles.module.scss';
import ImageHightlight from '@components/shared/ImageHighlight';
import AboutLink from './AboutLink';
import {
  IoIosGlobe as WebsiteLinkIcon,
  IoIosHeart as SocialMediaLinkIcon,
  IoIosCodeWorking as CodeRepoLinkIcon,
} from 'react-icons/io';

function ChapterFeature({
  name,
  photo,
  location,
  email,
  websiteLink,
  socialMediaLink,
  socialMediaLinkType,
  codeRepoLink,
  projects,
}: Chapter) {
  return (
    <div className={styles.root}>
      <div className={styles.about_chapter_container}>
        <div className={styles.text_content}>
          <h3>{name}</h3>
          <p className={styles.subheading}>
            Located in {location}{' '}
            <a className={styles.contact} href={email}>
              • Contact
            </a>
          </p>
          <ul className={styles.links}>
            <AboutLink link={websiteLink}>
              <WebsiteLinkIcon /> Learn more on their site
            </AboutLink>
            <AboutLink link={socialMediaLink}>
              <SocialMediaLinkIcon /> Follow on {socialMediaLinkType}
            </AboutLink>
            <AboutLink link={codeRepoLink}>
              <CodeRepoLinkIcon /> Browse their project repos
            </AboutLink>
          </ul>
        </div>
        <ImageHightlight
          className={styles.image}
          src={photo.url}
          alt={photo.description}
          height="355"
          width="500"
        />
      </div>
      {projects?.items?.length ? (
        <>
          <h4>Featured Projects</h4>
          {projects.items.map(item => (
            <ProjectView key={item.name} {...item} />
          ))}
        </>
      ) : null}
    </div>
  );
}

export default ChapterFeature;
