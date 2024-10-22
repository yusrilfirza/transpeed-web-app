import { Avatar, Flex, Group, Image, Space, Tabs, Text } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBus,
    faHotel,
    faPlaneUp,
    faTaxi,
    faTrain
} from '@fortawesome/free-solid-svg-icons';
import profilePhoto from '../../../assets/photo1.png';
import logo from '../../../assets/logo.png';

export const Header = () => {
    return (
        <header>
            <Group justify="space-between" h="100%">
                <Flex gap={8} align="center">
                    <Space w={24} />
                    <Image w={40} h={40} src={logo} />
                    <Text fw={700} size="xl">
                        Transpeed
                    </Text>
                </Flex>
                <Tabs defaultValue="flight">
                    <Tabs.List>
                        <Tabs.Tab
                            value="flight"
                            leftSection={
                                <FontAwesomeIcon icon={faPlaneUp} />
                            }
                        >
                            Flight
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="train"
                            leftSection={
                                <FontAwesomeIcon icon={faTrain} />
                            }
                        >
                            Train
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="hotel"
                            leftSection={
                                <FontAwesomeIcon icon={faHotel} />
                            }
                        >
                            Hotel
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="bus"
                            leftSection={
                                <FontAwesomeIcon icon={faBus} />
                            }
                        >
                            Bus
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="taxi"
                            leftSection={
                                <FontAwesomeIcon icon={faTaxi} />
                            }
                        >
                            Taxi
                        </Tabs.Tab>
                    </Tabs.List>
                </Tabs>
                <Group>
                    <Group>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16 8.75C15.59 8.75 15.25 8.41 15.25 8V7.25H8.75V8C8.75 8.41 8.41 8.75 8 8.75C7.59 8.75 7.25 8.41 7.25 8V7.32979C5.47542 7.61664 5.34793 8.6561 5.17042 10.11L4.27043 17.61C4.12043 18.88 4.30042 19.81 4.81042 20.38C5.32042 20.95 6.22042 21.24 7.50042 21.24H16.4904C17.7704 21.24 18.6704 20.95 19.1804 20.38C19.6674 19.8358 19.8535 18.9633 19.7387 17.78H8C7.59 17.78 7.25 17.44 7.25 17.03C7.25 16.62 7.59 16.28 8 16.28H19.5608L18.8204 10.11L18.8189 10.0972C18.6424 8.64323 18.5177 7.61546 16.75 7.33013V8C16.75 8.41 16.41 8.75 16 8.75ZM16.75 4.5V5.81606C19.6171 6.17699 20.0894 7.96683 20.3304 9.94L21.2304 17.44C21.4304 19.15 21.1304 20.48 20.3304 21.38C19.5004 22.29 18.2204 22.75 16.4904 22.75H7.50042C5.78042 22.75 4.49043 22.29 3.69043 21.38C2.89043 20.47 2.58042 19.15 2.79042 17.44L3.69043 9.94C3.92208 7.97095 4.39188 6.18447 7.25 5.81834V4.5C7.25 2.59 8.59 1.25 10.5 1.25H13.5C15.41 1.25 16.75 2.59 16.75 4.5ZM15.25 5.75H8.75V4.5C8.75 3.42 9.42 2.75 10.5 2.75H13.5C14.58 2.75 15.25 3.42 15.25 4.5V5.75Z"
                                fill="#2B3D57"
                                fillOpacity="0.6"
                            />
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.76972 8.91C6.76972 6.56759 8.31014 4.57955 10.4316 3.90527C11.1733 3.69744 11.9724 3.63864 12.8169 3.74421L12.8197 3.74455C13.0656 3.77436 13.3087 3.82399 13.5497 3.88912C15.6962 4.54863 17.2697 6.55575 17.2697 8.91V11.8C17.2697 12.1951 17.3511 12.6507 17.4639 13.0621C17.577 13.4744 17.7379 13.9019 17.93 14.2349L19.0869 16.1564C19.5007 16.8468 19.1651 17.7397 18.4143 17.9879L18.4121 17.9887C14.2568 19.377 9.77417 19.3771 5.61883 17.9891C5.16206 17.8342 4.89922 17.5489 4.7893 17.2521C4.67961 16.9558 4.6935 16.5704 4.94236 16.1567L6.09225 14.2469L6.09393 14.2441C6.29422 13.9081 6.45892 13.4776 6.57364 13.0644C6.68829 12.6513 6.76972 12.1954 6.76972 11.8V8.91ZM18.7697 8.91C18.7697 6.03842 16.9551 3.57235 14.4153 2.60122C13.9484 1.75786 13.0497 1.19 12.0199 1.19C10.9917 1.19 10.0941 1.7562 9.6266 2.59753C7.08145 3.56462 5.26972 6.02821 5.26972 8.91V11.8C5.26972 12.0146 5.22114 12.3287 5.12829 12.6631C5.03573 12.9966 4.91577 13.2906 4.80627 13.4747L4.80551 13.476L3.65708 15.3833C3.19604 16.1496 3.09984 17.0092 3.38264 17.7729C3.6651 18.5358 4.29686 19.1253 5.13927 19.4104L5.14205 19.4114C6.23058 19.775 7.34008 20.05 8.46031 20.2364C8.64726 20.7987 8.96303 21.3042 9.3692 21.7103C10.0437 22.3848 10.9921 22.81 12.0195 22.81C13.6739 22.81 15.0852 21.7271 15.5804 20.2345C16.6964 20.0483 17.8017 19.774 18.8863 19.4117C20.5545 18.8595 21.2784 16.8934 20.3728 15.3841L19.2262 13.4797C19.1191 13.2924 19.0015 12.9974 18.9105 12.6654C18.8184 12.3294 18.7697 12.0149 18.7697 11.8V8.91ZM13.7781 20.4581C12.6073 20.5537 11.4307 20.554 10.2598 20.4588C10.3129 20.5258 10.3697 20.5896 10.4299 20.6497C10.8354 21.0552 11.407 21.31 12.0195 21.31C12.7286 21.31 13.3647 20.9761 13.7781 20.4581Z"
                                fill="#2B3D57"
                                fillOpacity="0.6"
                            />
                        </svg>
                    </Group>
                    <div className="avatar-wrapper">
                        <Avatar src={profilePhoto} size={30} />
                    </div>
                </Group>
            </Group>
        </header>
    )
};

export default Header;
