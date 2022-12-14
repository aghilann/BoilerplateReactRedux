import { AuthenticationForm, HeaderAction } from '../../Components/index';
import { Button, Container, Group, Modal, Text } from '@mantine/core';

import React from 'react';
import { RootState } from '../../Redux/store';
import { headerData } from '../../Components/HeaderAction/header-data';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const Home: React.FC<any> = ({ transition }) => {
  const [opened, setOpened] = useState(false);
  const currentUser = useSelector((state: RootState) => state.user);
  return (
    <motion.div {...transition}>
      <Container>
        <HeaderAction {...headerData} />
        <h1>Hello</h1>
      </Container>
    </motion.div>
  );
};
