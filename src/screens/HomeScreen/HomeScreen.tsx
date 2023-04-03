import Box from '@src/components/Box';
import ProfileHeader from '@src/screens/HomeScreen/patterns/ProfileHeader';
import Sidebar from './patterns/Sidebar';
import Feed from '@src/screens/HomeScreen/patterns/Feed';
import Head from 'next/head';

export default function HomeScreen() {
  return (
    <Box>
      <Head>
        <title>Perfil Elisangela Lima</title>
      </Head>
      <ProfileHeader />
      <Sidebar />
      <Box
        as="main"
        styleSheet={{
          flex: 1,
          alignItems: 'start',
          justifyContent: 'center',
          position: 'absolute',
          flexDirection: 'row',
          flexWrap: 'wrap',
          left: { xs: '74px', md: '154px' },
          top: { xs: '440px', md: '380px' },
          width: { xs: 'calc(100% - 100px)', md: 'calc(100% - 200px)' },
          gap: '40px',
          paddingBottom: '100px',
        }}
      >
        <Feed />
      </Box>
    </Box>
  );
}
