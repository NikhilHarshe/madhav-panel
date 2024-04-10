import "./App.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Modal, Image, Flex, Text, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, Stack, SimpleGrid, Box } from '@chakra-ui/react';
import { useState } from "react";
import image1 from "./assets/soldering-iron-1038540_1920.jpg"
import image2 from "./assets/ceiling-fans.jpg"
import image3 from "./assets/lights.jpg"
import image4 from "./assets/tv.jpg"
import image5 from "./assets/Washing Machine2.jpg"
import image6 from "./assets/headphones.jpg"
import image7 from "./assets/electrical-cable.jpg"

const modelData = [
  // {
  //   _id: 1,
  //   mainImg: image1,
  //   modalTitle: "Solder Kit",
  //   coverImageUrl: image1,
  //   coverImageAlt: "Cover Image",
  //   heading: "Precision Crafting: Discover Soldering Irons!",
  //   headingDes: "Unlock your creative potential with our range of soldering irons. Engineered for precision and reliability, our soldering irons are essential tools for electronic repairs, DIY projects, and intricate crafting. With adjustable temperatures and ergonomic designs, achieve flawless soldering results with ease. Elevate your craftsmanship and tackle any project with confidence using our premium selection of soldering irons.",
  // },
  // {
  //   _id: 2,
  //   mainImg: image2,
  //   modalTitle: "Ceiling Fans",
  //   coverImageUrl: image2,
  //   coverImageAlt: "Ceiling Fans",
  //   heading: "Elevate Your Space with Stylish Ceiling Fans!",
  //   headingDes: "Elevate your comfort with our range of stylish ceiling fans. Crafted for both functionality and aesthetics, our ceiling fans seamlessly blend into any space, providing refreshing airflow during hot summer days and evenly distributing warmth in the winter. With energy-efficient designs and versatile features such as remote controls and integrated lighting options, our fans offer not just cooling, but also convenience and style. Experience the perfect blend of comfort and sophistication with our premium ceiling fans",
  // },
  // {
  //   _id: 3,
  //   mainImg: image3,
  //   modalTitle: "Light Bulbs",
  //   coverImageUrl: image3,
  //   coverImageAlt: "Light Bulbs",
  //   heading: "Illuminate Your Space: Explore Light Bulbs!",
  //   headingDes: "Discover the perfect lighting solution with our range of light bulbs. From energy-efficient LEDs to versatile smart bulbs, brighten your space with ease and style. Transform any room into a beacon of light and comfort.",
  // },
  {
    _id: 4,
    mainImg: image4,
    modalTitle: "TV (Television)",
    coverImageUrl: image4,
    coverImageAlt: "TV",
    heading: "Experience Entertainment: Explore TV Options!",
    headingDes: "Transform your viewing experience with our exceptional range of TVs. From stunning 4K displays to immersive smart features, discover the perfect TV to elevate your entertainment. Dive into a world of captivating visuals and crystal-clear sound, right in the comfort of your home. Upgrade your viewing experience with our premium selection of TVs.",
    label1: 'Clients',
    score1: '450',
    label2: 'Projects',
    score2: '321',
    label3: 'Revenue',
    score3: '$3M'
  },
  {
    _id: 5,
    mainImg: image5,
    modalTitle: "Washing Machine",
    coverImageUrl: image5,
    coverImageAlt: "Washing Machine",
    heading: "Effortless Laundry: Discover Washing Machines!",
    headingDes: "Simplify your laundry routine with our range of washing machines. Designed for efficiency and performance, our washing machines offer convenience and cleanliness at your fingertips. From advanced features to spacious capacities, find the perfect match for your laundry needs. Experience hassle-free washing and refreshing results with our premium selection of washing machines.",
    label1: 'Clients',
    score1: '650',
    label2: 'Projects',
    score2: '421',
    label3: 'Revenue',
    score3: '$2M'
  },
  {
    _id: 6,
    mainImg: image6,
    modalTitle: "Headphones",
    coverImageUrl: image6,
    coverImageAlt: "Headphones",
    heading: "Immerse Yourself: Explore Headphones!",
    headingDes: "Dive into unparalleled audio experiences with our range of headphones. From wireless freedom to studio-quality sound, our headphones offer the perfect blend of comfort and performance. Whether you're on the go or enjoying your favorite tunes at home, discover the ultimate sound companion. Elevate your listening experience with our premium selection of headphones.",
    label1: 'Clients',
    score1: '550',
    label2: 'Projects',
    score2: '421',
    label3: 'Revenue',
    score3: '$5M'
  },
  // {
  //   _id: 7,
  //   mainImg: image7,
  //   modalTitle: "Electrical Cables",
  //   coverImageUrl: image7,
  //   coverImageAlt: "Electrical Cables",
  //   heading: "Power Your Connections: Explore Electrical Cables!",
  //   headingDes: "Empower your electrical setups with our range of high-quality cables. Engineered for reliability and safety, our electrical cables ensure seamless connections for your various applications. From powering appliances to networking systems, our cables deliver consistent performance and durability. Choose peace of mind and efficiency with our premium selection of electrical cables.",
  // },
  // {
  //   _id: 8,
  //   mainImg: 'https://imgs.search.brave.com/ekwkJYc5RMUrj95HhOuPkK7kYw-UBmwKeJNCratetj8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGZsaXEubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzEx/LzEzMC5qcGc',
  //   modalTitle: "2Modal Title",
  //   coverImageUrl: 'https://imgs.search.brave.com/ekwkJYc5RMUrj95HhOuPkK7kYw-UBmwKeJNCratetj8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGZsaXEubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzEx/LzEzMC5qcGc',
  //   coverImageAlt: "Cover Image",
  //   heading: "2Trusted by Our Clients",
  //   headingDes: "2Lorem ipsum dolor sit amet consecte adipiscing elit. Vestibulum eros ex, mollis eget urna eu, convallis interdum ligula. Aenean posuere quam quam, id ultrices nisi vehicula et.",
  // },
];

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [index, setIndex] = useState(0);

  function indexdata(index) {
    onOpen();
    setIndex(index);
  }

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {modelData.map((data, idx) => (
          <SwiperSlide key={idx}>
            <div style={{
              width: "100vw",
              height: "100vh",

              objectFit: "cover"
            }}
              onClick={() => indexdata(idx)}
            >
              <img style={{ objectFit: "cover" }} height={"100%"} width={"100%"} src={data.mainImg} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal isOpen={isOpen} size={'full'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"} fontWeight={"bold"}>{modelData[index].modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack minH="100vh" direction={{ base: 'column', md: 'row' }}>
              <Flex flex={1}>
                <Image alt={modelData[index].coverImageAlt} objectFit="cover" src={modelData[index].coverImageUrl} />
              </Flex>
              <Flex p={8} flex={1} align="center" justifyContent="center">
                <Flex direction="column">
                  <Text fontWeight="extrabold" fontSize="x-large" mb={2}>
                    <Box as="span" display="inline-block" position="relative">
                      {modelData[index].heading}
                      <Box as="span" display="block" position="absolute" bg="blue.600" w="100%" h="1px" />
                    </Box>
                  </Text>
                  <Text>
                    {modelData[index].headingDes}
                  </Text>
                  <SimpleGrid columns={{ base: 2, sm: 3, md: 3 }} spacing={1} mt={12} mb={4}>
                    {/* {statData.map((data) => ( */}
                    <Box p={{ base: 2, sm: 5 }} textAlign="center">
                      <Text fontWeight="extrabold" fontSize="xx-large">
                        {modelData[index].score1}
                      </Text>
                      <Text fontSize="sm">{modelData[index].label1}</Text>
                    </Box>
                    <Box p={{ base: 2, sm: 5 }} textAlign="center">
                      <Text fontWeight="extrabold" fontSize="xx-large">
                        {modelData[index].score2}
                      </Text>
                      <Text fontSize="sm">{modelData[index].label2}</Text>
                    </Box>
                    <Box p={{ base: 2, sm: 5 }} textAlign="center">
                      <Text fontWeight="extrabold" fontSize="xx-large">
                        {modelData[index].score3}
                      </Text>
                      <Text fontSize="sm">{modelData[index].label3}</Text>
                    </Box>
                    {/* ))} */}
                  </SimpleGrid>
                </Flex>
              </Flex>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
