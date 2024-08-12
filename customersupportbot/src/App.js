
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/system';
import { Button, InputBase, Typography } from '@mui/material';
import { sendMessageToChatGPT } from './chatService'; // Import the service

function App() {
    const [navbarDropdownOpen, setNavbarDropdownOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', content: "Hi, I'm Customer-Support-Bot, version 1.0.0. If you have a question, please feel free to ask!" },
        { role: 'user', content: "Hi Customer-Support-Bot, I'm a totally real customer. I have a question... How do I cancel an order I have made?" },
        { role: 'bot', content: "Sure! All you have to do is go to the 'previous orders' tab, make sure your order is still being processed, and if it is, you can press 'Cancel Order' to cancel the order. Let me know if you need anything else!" }
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = async () => {
        if (inputValue.trim() === '') return;

        const userMessage = { role: 'user', content: inputValue };
        setMessages([...messages, userMessage]);

        try {
            const botResponse = await sendMessageToChatGPT(inputValue);
            const botMessage = { role: 'bot', content: botResponse };
            setMessages(prevMessages => [...prevMessages, botMessage]);
        } catch (error) {
            console.error('Error getting response:', error);
        }

        setInputValue('');
    };

    return (
        <div style={{ width: '100vw' }}>
            <Box
                sx={{
                    width: '100vw',
                    backgroundColor: 'rgba(0,212,255,1)',
                    alignItems: 'center',
                    height: 75,
                    display: 'block',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Inter',
                            color: '#fff',
                            fontSize: { xs: 20, md: 30 },
                            padding: 2,
                            userSelect: 'none',
                        }}
                    >
                        Customer-Support-Bot | v1.0.0
                    </Typography>

                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 4,
                            ml: 'auto',
                            padding: 2,
                            mr: 2,
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                color: '#fff',
                                fontSize: 30,
                                cursor: 'pointer',
                            }}
                            onClick={() => window.open('https://github.com/LS10WorstCoder/CustomerSupportBot', '_blank')}
                        >
                            GitHub
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                color: '#fff',
                                fontSize: 30,
                                cursor: 'pointer',
                            }}
                        >
                            Credit: @plcid, @ls10worstcoder, @muhammadamray
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            fontSize: 30,
                            ml: 'auto',
                            padding: 2,
                            color: '#fff',
                            display: { xs: 'flex', md: 'none' },
                            cursor: 'pointer',
                            userSelect: 'none',
                        }}
                        onClick={() => setNavbarDropdownOpen(!navbarDropdownOpen)}
                    >
                        ☰
                    </Typography>
                </Box>

                <Box
                    sx={{
                        position: 'fixed',
                        top: 75,
                        width: '100vw',
                        backgroundColor: 'rgba(0,212,255,1)',
                        opacity: navbarDropdownOpen ? 1 : 0,
                        transition: 'all .25s ease-out',
                        padding: 2,
                        pt: 0,
                        alignItems: 'center',
                        justifyContent: 'left',
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Inter',
                            color: '#fff',
                            fontSize: 30,
                            cursor: 'pointer',
                            mb: 1,
                        }}
                        onClick={() => window.open('https://github.com/LS10WorstCoder/CustomerSupportBot', '_blank')}
                    >
                        GitHub
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: 'Inter',
                            color: '#fff',
                            fontSize: 30,
                            cursor: 'pointer',
                        }}
                    >
                        Credit: @plcid, @ls10worstcoder, @muhammadamray
                    </Typography>
                </Box>
            </Box>

            <Box>
                {messages.map((message, index) => (
                    <Box
                        key={index}
                        sx={{
                            fontFamily: 'Inter',
                            width: '60%',
                            backgroundColor: message.role === 'bot' ? '#edeef2' : '#9fbed2',
                            color: message.role === 'bot' ? '#000' : '#fff',
                            padding: 2,
                            margin: 2,
                            borderRadius: 4,
                            marginLeft: message.role === 'bot' ? 'none' : 'auto',
                        }}
                    >
                        {message.content}
                    </Box>
                ))}
            </Box>

            <Box
                sx={{
                    height: 50,
                    width: '100%',
                    display: 'flex',
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                }}
            >
                <InputBase
                    sx={{
                        width: '100%',
                        height: 50,
                        fontFamily: 'Inter',
                        padding: 2,
                        borderTop: '1px solid #000',
                    }}
                    placeholder='Send Message'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') handleSendMessage();
                    }}
                />
                <Button
                    sx={{
                        fontFamily: 'Inter',
                        borderRadius: 0,
                        borderLeft: 0,
                        color: '#fff',
                        background: 'linear-gradient(164deg, rgba(2,0,36,1) 0%, rgba(9,9,128,1) 0%, rgba(0,212,255,1) 100%)',
                    }}
                    onClick={handleSendMessage}
                >
                    Send
                </Button>
            </Box>
        </div>
    );
}

export default App;
