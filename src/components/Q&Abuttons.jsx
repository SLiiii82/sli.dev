import React, { useState } from 'react';

const QaButtons = () => {
    const [qaAnswer, setQaAnswer] = useState('');

    const handleQaButtonClick = (question) => {
        let answer = '';

        switch (question) {
            case 'techStack':
                answer = 'My tech stack includes HTML, CSS, JavaScript, React, and Node.js.';
                break;
            case 'aboutMe':
                answer = 'I am currently a student at Las Positas College attending for a BS in Computer Science.';
                break;
            

            

            default:
                answer = '';
        }

        setQaAnswer(answer);
    };

    const buttonContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        margin: '5px',
    };
    const answerContainerStyle = {
        minHeight: '50px', // Set a minimum height
        maxHeight: '100px', // Set a maximum height to handle longer content
        overflowY: 'auto', // Add a scrollbar for overflow content
        marginTop: '10px',
        textAlign: 'center',
    };
    
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={buttonContainerStyle}>
                <button onClick={() => handleQaButtonClick('techStack')} style={{ margin: '5px' }}>
                    What is my tech stack?
                </button>
                <button onClick={() => handleQaButtonClick('aboutMe')} style={{ margin: '5px' }}>
                    About me
                </button>
            </div>

            <div style={answerContainerStyle}>
                <p>{qaAnswer || 'Select a question to see the answer.'}</p>
            </div>
        </div>
    );
};

export default QaButtons;