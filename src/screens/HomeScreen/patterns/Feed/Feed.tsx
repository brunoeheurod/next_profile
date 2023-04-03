import Box from '@src/components/Box';
import Icon from '@src/components/Icon';
import Link from '@src/components/Link';
import Card from '@src/screens/HomeScreen/patterns/Card';
import aboutInfo from '@src/utils/mocks/about';
import skillsInfo from '@src/utils/mocks/skills';
import commentsInfo from '@src/utils/mocks/comments';
import projectsInfo from '@src/utils/mocks/projects';
import interestsInfo from '@src/utils/mocks/interests';
import React from 'react';

export default function Feed() {
  const { about, socialMedia } = aboutInfo;
  return (
    <>
      <Box
        className="fine-adjust"
        styleSheet={{
          width: {
            xs: '100%',
            sm: '100%',
            md: '100%',
            lg: '100%',
            xl: '100%',
          },
          flexDirection: 'row',
          alignItems: 'top',
          justifyContent: {
            xs: 'center',
            sm: 'center',
            md: 'center',
            lg: 'center',
            xl: 'space-between',
          },
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <Card>
          <Card.Header iconName="personFill">Sobre mim</Card.Header>
          <Card.Body>{about}</Card.Body>

          <Card.Footer>
            {socialMedia.map(({ url, id, name }) => (
              <Link href={url} key={id}>
                <Icon isLink name={name} />
              </Link>
            ))}
          </Card.Footer>
        </Card>
        <Card size="sm">
          <Card.Header iconName="stack">Skills</Card.Header>
          {skillsInfo.map(({ id, title, info }) => (
            <Card.Body key={id} bodyTitle={title}>
              {info}
            </Card.Body>
          ))}
        </Card>
        <Card size="xl">
          <Card.Header isEditable={false} iconName="message">
            Comentários
          </Card.Header>
          {commentsInfo.map(({ id, name, content, profileUrl }, i, array) => (
            <Card.Body
              isComment
              imgSrc={profileUrl}
              imgAlt={`Foto de perfil ${name}`}
              bodyTitle={name}
              key={id}
              isLastComment={i === array.length - 1}
            >
              {content}
            </Card.Body>
          ))}
        </Card>
      </Box>

      <Box
        className="fine-adjust-1"
        styleSheet={{
          width: {
            xs: '100%',
            sm: '100%',
            md: '100%',
            lg: '100%',
            xl: '100%',
          },

          alignItems: 'start',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'end',
          gap: '20px',
        }}
      >
        <Box
          className="fine-adjust-2"
          styleSheet={{
            width: {
              xs: '100%',
              sm: '100%',
              md: '100%',
              lg: '100%',
              xl: '100%',
            },
            flex: { sm: 0, xl: 1 },
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <Card size="xl">
            <Card.Header iconName="heart">Interesses</Card.Header>
            {interestsInfo.map(({ id, title, info }) => (
              <Card.Body key={id} bodyTitle={title}>
                {info}
              </Card.Body>
            ))}
          </Card>
          <Card isTransparent size="xl">
            <Card.Header iconName="award">Projetos</Card.Header>
          </Card>
          {projectsInfo.map(({ id, projectTitle, content }) => (
            <Card size="xl" key={id}>
              <Card.Body bodyTitle={projectTitle}>{content}</Card.Body>
            </Card>
          ))}
        </Box>
        <Box
          className="fine-adjust-3"
          styleSheet={{
            width: {
              xs: '100%',
              sm: '100%',
              md: '100%',
              lg: '100%',
              xl: '100%',
            },
            flex: { lg: 0, xl: 1 },
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <Card size="xl">
            <Card.Header iconName="star">Destaques</Card.Header>
            <Card.Footer imgSrc="/assets/svg/catPicture.svg" />
          </Card>
          <Card size="xl">
            <Card.Header isEditable={false} iconName="briefcase">
              Profissional
            </Card.Header>
            <Card.Body iconName="dollarSign">R$ 200,00/hora</Card.Body>
            <Card.Body iconName="watch">Tempo Integral</Card.Body>
          </Card>
        </Box>
      </Box>
    </>
  );
}
