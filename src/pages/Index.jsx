import React, { useState } from "react";
import { Box, Heading, Text, Button, Stack, Flex, Image, Link, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Input, Textarea } from "@chakra-ui/react";
import { FaVoteYea, FaBook, FaComments } from "react-icons/fa";

const Index = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [discussionTopic, setDiscussionTopic] = useState("");
  const [discussionComment, setDiscussionComment] = useState("");

  const handleRegister = () => {
    // TODO: Implement voter registration logic
    setIsRegistered(true);
  };

  const handleDiscussionSubmit = () => {
    // TODO: Implement discussion submission logic
    setDiscussionTopic("");
    setDiscussionComment("");
  };

  return (
    <Box p={8}>
      <Flex justify="space-between" align="center" mb={8}>
        <Heading as="h1" size="xl">
          Civic Engagement Platform
        </Heading>
        <Image src="https://images.unsplash.com/photo-1604420022249-87e637722439?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2b3RlJTIwaWNvbnxlbnwwfHx8fDE3MTE2NTE3OTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Vote" boxSize="50px" />
      </Flex>

      <Stack spacing={8}>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Voter Registration
          </Heading>
          {isRegistered ? (
            <Text>You are registered to vote!</Text>
          ) : (
            <>
              <Text mb={4}>Register to vote and make your voice heard in the democratic process.</Text>
              <Button leftIcon={<FaVoteYea />} colorScheme="blue" onClick={handleRegister}>
                Register to Vote
              </Button>
            </>
          )}
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Educational Resources
          </Heading>
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Civic Rights and Responsibilities
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>Learn about your rights and responsibilities as a citizen, including voting, participating in the political process, and engaging in your community.</Text>
                <Link href="#" color="blue.500">
                  Read More
                </Link>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Understanding the Political System
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>Gain a deeper understanding of how the political system works, including the branches of government, the election process, and the role of political parties.</Text>
                <Link href="#" color="blue.500">
                  Read More
                </Link>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Discussion Forums
          </Heading>
          <Text mb={4}>Engage in discussions on various political issues and connect with like-minded individuals to organize grassroots initiatives.</Text>
          <Stack spacing={4}>
            <Input placeholder="Topic" value={discussionTopic} onChange={(e) => setDiscussionTopic(e.target.value)} />
            <Textarea placeholder="Your comment" value={discussionComment} onChange={(e) => setDiscussionComment(e.target.value)} />
            <Button leftIcon={<FaComments />} colorScheme="green" onClick={handleDiscussionSubmit}>
              Submit
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Index;
