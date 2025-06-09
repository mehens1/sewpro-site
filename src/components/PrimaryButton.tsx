import React from 'react';

interface PrimaryButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onClick, className }) => {
    return (
        <button
            className={`btn puprple_btn ${className || ''}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default PrimaryButton;