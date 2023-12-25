import React, { useState } from 'react';
import QaButtons from './Q&Abuttons'; // Ensure the path is correct based on your project structure

const SectionLayout = () => {
    const [selectedPage, setSelectedPage] = useState('main-menu');

    const sectionStyle = {
        display: 'flex',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        color: 'white',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    };

    const flexBoxStyle = {
        display: 'flex',
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
    };

    const leftTextStyle = {
        fontSize: '3em',
        fontWeight: 'lighter',
        fontFamily: 'Inter, sans-serif',
    };

    const rightTextStyle = {
        fontSize: '2.5em',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bolder',
        cursor: 'pointer',
    };

    const undoButtonStyle = {
        position: 'absolute',
        top: '30px',
        left: '30px',
        fontSize: '1em',
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: 'grey',    
        color: 'white',
        border: 'none',
        borderRadius: '5px',
    };

    const handleSelection = (page) => {
        setSelectedPage(page);
    };
    
    const handleUndo = () => {
        setSelectedPage('main-menu');
    };

    return (
        <div style={sectionStyle}>
            {selectedPage !== 'main-menu' &&
                <button onClick={handleUndo} style={undoButtonStyle}>
                    Back to menu
                </button>
            }

            {selectedPage === 'main-menu' && (
                <>
                    <div style={flexBoxStyle}>
                        <p style={leftTextStyle}>Stan Li</p>
                    </div>
                    <div style={flexBoxStyle}>
                        <p style={rightTextStyle} onClick={() => handleSelection('q&a')}>Q&A</p>
                        <p style={rightTextStyle} onClick={() => handleSelection('resume')}>Resume</p>
                        <p style={rightTextStyle} onClick={() => handleSelection('projects')}>Projects</p>
                    </div>
                </>
            )}

            {selectedPage === 'q&a' && <QaButtons />}
            
            {selectedPage === 'resume' && (
                <div>
                    <p> This is where my resume will go. </p>
                </div>
            )}

            {selectedPage === 'projects' && (
                <div>
                    <p> This is my projects page. </p>
                </div>
            )}
        </div>
    );
};

export default SectionLayout;
